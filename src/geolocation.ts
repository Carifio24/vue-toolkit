import { ref, onMounted } from "vue";
import { Capacitor, PermissionState as CapacitorPermissionState } from '@capacitor/core';
import { Geolocation, PermissionStatus as CapacitorPermissionStatus, Position, PositionOptions } from "@capacitor/geolocation";

/**
  * Determine which of two capacitor permission states is 'better'.
  * This implementation takes "prompt-with-rationale" to be better than "prompt".
  * @returns The 'better' of the two input permission states
  */
function betterPermissionState(firstState: CapacitorPermissionState, secondState: CapacitorPermissionState): CapacitorPermissionState {
  const states: CapacitorPermissionState[] = ["granted", "prompt-with-rationale", "prompt", "denied"];
  for (const state of states) {
    if (firstState === state || secondState === state) {
      return state;
    }
  }
  return "denied";
}

export type PositionCoords = Position['coords'];

/**
  * A composable that encapsulates the current state of the browser
  * geolocation position and permission status.
  * @param onStartup - Whether or not to query the user's geolocation on startup.
  * @returns Reactive state describing the geolocation
  */
export function useGeolocation(onStartup=true) {

  const geolocation = ref<PositionCoords | null>(null);
  const error = ref<GeolocationPositionError | null>(null);
  const permissions = ref<string>("");
  const permissionGranted = ref(false);
  const hasPermissionsAPI = ref(true);

  function handleNotSupported() {
    hasPermissionsAPI.value = false;
  }

  function handleCapacitorPermission(result: CapacitorPermissionStatus) {
    permissionGranted.value = result.location === "granted" || result.coarseLocation === "granted";
    permissions.value = betterPermissionState(result.location, result.coarseLocation);
  }

  function handleNavigatorPermission(result: PermissionStatus) {
    permissionGranted.value = result.state === "granted";
    permissions.value = result.state;
  }

  function handlePosition(position: Position) {
    geolocation.value = position.coords;
    error.value = null;
  }

  function handleGeolocationError(err: GeolocationPositionError) {
    if (permissions.value === "prompt") {
      const url = "https://www.lifewire.com/turn-on-mobile-location-services-4156232";
      error.value = {
        code: 1,
        message: `Location access was denied. Try enabling location services for your browser in system settings. (This feature might not work on Safari on some iPhones). <a href="${url}" target="_blank" rel="noopener noreferrer">Help</a>`,
      } as GeolocationPositionError;
    } else {
      error.value = err;
    }
  }

  function geolocate(): Promise<Position> {
    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 60 * 1000,  // 1 minute
      maximumAge: 0
    };

    return Geolocation.getCurrentPosition(options)
      .then((position) => {
        handlePosition(position);
        return position;
      })
      .catch((error) => {
        handleGeolocationError(error);
        throw error;
      });
  }

  if (onStartup) {
    onMounted(() => {
      // Check the Permissions API to see if the user has
      // granted the browser permission to access their location

      // Geolocation.requestPermissions is unimplemented on web and just throws, hence this
      const web = Capacitor.getPlatform() === 'web';
      if (web) {
        if (!navigator.permissions) {
          handleNotSupported();
          return;
        }
        navigator.permissions.query({ name: "geolocation" })
          .then((result) => {
            handleNavigatorPermission(result);
            result.onchange = () => {
              handleNavigatorPermission(result);
            };
          });
      } else {
        Geolocation.requestPermissions({ permissions: ['location', 'coarseLocation'] })
          .then(permissions => handleCapacitorPermission(permissions))
          .catch(error => handleGeolocationError(error));
      }
    });
  }

  return {
    geolocation,
    error,
    permissions,
    permissionGranted,
    hasPermissionsAPI,
    handlePosition,
    geolocate,
  };

}
