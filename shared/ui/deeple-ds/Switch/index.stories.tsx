import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from ".";

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "Switch",
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const Checked: Story = { args: { checked: true } };

export const Disable: Story = { args: { disabled: true } };

export const CheckedAndDisabled: Story = { args: { checked: true, disabled: true } };
