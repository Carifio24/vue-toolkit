/* eslint-disable @typescript-eslint/naming-convention */

import { Meta, StoryObj } from "@storybook/vue3";
import { CreditLogos, CreditLogosProps } from "..";

const meta: Meta<typeof CreditLogos> = {
  component: CreditLogos,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CreditLogos>;

export const Primary: Story = {
  render: (args: CreditLogosProps) => ({
    components: { CreditLogos },
    template: `
      <div style="width: fit-content">
        <CreditLogos v-bind="args" />
      </div>
    `,
    setup() {
      return { args };
    }
  }),
  args: {
    logoSize: "5vmin",
    extraLogos: [
      {
        alt: "Smithsonian Logo",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Smithsonian_sun_logo_no_text.svg/1024px-Smithsonian_sun_logo_no_text.svg.png",
        href: "https://www.si.edu/"
      }
    ],
    defaultLogos: ["wwt", "cosmicds", "nasa", "sciact"],
    backgroundColor: "#3A3A3A",
  },
  parameters: {
    docs: {
      description: {
        story: "This component provides a convenient way to display logos of organizations affiliated with your project. \
          Each logo can link to the organization's website. \
          By default, this component displays logos associated with the CosmicDS project: WorldWide Telescope, CosmicDS, NASA, and NASA's Science Activation. \
          However, you can use any subset (or none at all) of these logos logos via the `defaultLogos` prop. \
          Additionally, you can add extra logos - see the example below with the Smithsonian logo for the required syntax."
      }
    }
  }
};
