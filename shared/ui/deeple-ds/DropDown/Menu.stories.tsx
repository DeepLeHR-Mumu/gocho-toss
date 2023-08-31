import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from ".";

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: "DropDown/Menu",
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = { args: { options: [{ content: "option 1" }, { content: "option 2" }] } };

export const WithFooter: Story = {
  args: { options: [{ content: "option 1" }, { content: "option 2" }], footer: { content: "footer" } },
};

export const WithHeader: Story = {
  args: {
    options: [{ content: "option 1" }, { content: "option 2" }],
    header: { content: <div style={{ display: "flex", justifyContent: "flex-end" }}>header</div> },
  },
};
