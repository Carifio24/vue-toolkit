/* eslint-disable @typescript-eslint/naming-convention */

import { Meta, StoryObj } from "@storybook/vue3";
import { PeekOut } from "..";
import { ref } from "vue";

const meta: Meta<typeof PeekOut> = {
  component: PeekOut,
  tags: ["autodocs"],
  title: "Vue Toolkit/Components/Peek Out",
};

export default meta;
type Story = StoryObj<typeof PeekOut>;

export const Primary: Story = {
  render: (args: any) => {

    const peekOutRef = ref(null);
    return {
      components: { PeekOut },
      template: `
        <div>
          <v-btn @click="peekOutRef.show()">Show</v-btn>
          <PeekOut ref="peekOutRef" v-bind="args">
            <div>Content!</div>
          </PeekOut>
        </div>
      `,
      setup() {
        return { args, peekOutRef };
      }
    };
  },
  args: {
    position: "top left",
  }
};
