/* eslint-disable @typescript-eslint/naming-convention */

import { Meta, StoryObj } from "@storybook/vue3-vite";
import { DraggableItems } from "..";

import "./stories.css";

const meta: Meta<typeof DraggableItems> = {
  component: DraggableItems,
  tags: ["autodocs"],
  title: "Vue Toolkit/Components/Draggable Items",
};

export default meta;
type Story = StoryObj<typeof DraggableItems>;

interface DraggableItem {
  name: string;
  info: string;
}

export const Primary: Story = {
  render: (args: unknown) => {
    const items: DraggableItem[] = [
      { name: "Item 1", info: "This was originally the first item" },
      { name: "Item 2", info: "This was originally the second item" },
      { name: "Item 3", info: "This was originally the third item" },
    ];
    const key = (item: DraggableItem) => item.name;
    return {
      components: { DraggableItems },
      template: `
        <DraggableItems
          v-bind="args"
          :key="key"
          :items="items"
        >
          <template #item="{ item }">
            <div>
              <h3>{{ item.name }}</h3>
              <p>{{ item.info }}</p>
            </div>
          </template>
        </DraggableItems>
      `,
      setup() {
        return { args, items, key };
      },
    };
  },
  args: { },
};
