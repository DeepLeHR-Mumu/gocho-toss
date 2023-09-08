import type { Meta, StoryObj } from "@storybook/react";
import { FiAlertCircle } from "react-icons/fi";
import { Input } from ".";

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

export const WithPrefixAndSuffix: Story = { args: { prefix: <FiAlertCircle />, suffix: <FiAlertCircle /> } };

export const UnderLine: Story = {
  args: { underline: true, label: "label", state: { state: "error" } },
};
