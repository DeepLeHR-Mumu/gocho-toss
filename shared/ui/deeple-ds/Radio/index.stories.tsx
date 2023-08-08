import type { Meta, StoryObj } from "@storybook/react";
import Radio from ".";

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "Radio",
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {};

export const Checked: Story = { args: { checked: true } };

export const Disable: Story = { args: { disabled: true } };

export const CheckedAndDisabled: Story = { args: { checked: true, disabled: true } };
