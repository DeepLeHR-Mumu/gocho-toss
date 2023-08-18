import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from ".";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Checkbox",
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = { args: { checked: true } };

export const Disabled: Story = { args: { disabled: true } };

export const CheckedAndDisabled: Story = { args: { disabled: true, checked: true } };
