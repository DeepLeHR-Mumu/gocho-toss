import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from ".";

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: "DropDown/Menu",
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = { args: { options: [{ text: "option 1" }, { text: "option 2" }] } };

export const WithFooter: Story = {
  args: { options: [{ text: "option 1" }, { text: "option 2" }], footer: { text: "footer" } },
};
