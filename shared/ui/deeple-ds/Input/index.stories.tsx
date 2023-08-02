import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Input",
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Inactive: Story = { args: { label: "label", placeholder: "placeholder" } };

export const Disabled: Story = { args: { label: "label", state: { state: "disabled" } } };

export const Error: Story = { args: { label: "label", state: { state: "error", message: "error" } } };

export const Success: Story = { args: { label: "label", state: { state: "success", message: "success" } } };
