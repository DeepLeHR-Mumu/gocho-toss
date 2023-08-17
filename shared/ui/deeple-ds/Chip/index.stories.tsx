import type { Meta, StoryObj } from "@storybook/react";
import Chip from ".";

const meta: Meta<typeof Chip> = {
  component: Chip,
  title: "Chip",
  decorators: [
    (Component, context) => (
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        {Component({ args: { children: "Chip", ...context.args } })}
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = { args: { children: "Chip" } };
export const FillMain: Story = { args: { color: "nonSelected" } };
export const Outline: Story = { args: { color: "selected" } };
export const Disable: Story = { args: { color: "fillBlue" } };
export const FillWhite: Story = { args: { color: "fillGray" } };
export const GrayLine: Story = { args: { color: "outlineBlue" } };
