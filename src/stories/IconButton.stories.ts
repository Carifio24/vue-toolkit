/* eslint-disable @typescript-eslint/naming-convention */

import { Meta, StoryObj } from "@storybook/vue3";
import { IconButton, IconButtonProps } from "..";

import { ref } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { notify } from "@kyvg/vue3-notification";

library.add(faBookOpen);

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  tags: ["autodocs"],
  decorators: [
    () => {
      return { template: `<div style="width: 50px"><story /></div>` };
    }
  ],
  args: {
    modelValue: false,
    faIcon: "book-open",
    mdIcon: null,
    color: "dodgerblue",
    focusColor: "red",
    backgroundColor: "#040404",
    boxShadow: true,
    border: true,
    longPressTimeMs: 500,
    tooltipText: "Tooltip",
    tooltipLocation: "start",
    tooltipOnClick: false,
    tooltipOnFocus: false,
    tooltipOnHover: true,
    tooltipOffset: 0,
    showTooltip: true,
    faSize: "lg",
    mdSize: "100px"
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const VModel: Story = {
  render: (args: IconButtonProps) => {
    const model = ref(false);
    return {
      components: { IconButton },
      template: `<IconButton v-bind="args" v-model="model" />`,
      setup() {
        delete args["modelValue"];
        return { args, model };
      }
    };
  },
};


export const Activate: Story = {
  render: (args: IconButtonProps) => {
    const handler = () => {
      notify({
        group: "storybook",
        text: "You pressed the button!",
        type: "success",
      });
    };
    return {
      components: { IconButton },
      template: `
        <IconButton
          v-bind="args"
          @activate="handler"
        />
        <notifications group="storybook" position="center top" />
      `,
      setup() {
        return { args, handler };
      }
    };
  },
  args: {
    ...meta.args,
    modelValue: null
  },
};


