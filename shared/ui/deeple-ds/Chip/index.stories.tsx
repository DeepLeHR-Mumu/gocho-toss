import type { Meta, StoryObj } from "@storybook/react";
import Chip from ".";

const meta: Meta<typeof Chip> = {
  component: Chip,
  title: "Chip",
  decorators: [
    (Component, context) => (
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem", alignItems: "center" }}>
        {Component({ args: { ...context.args, size: "small", children: "smallChip" } })}
        {Component({ args: { ...context.args, size: "large", children: "largeChip" } })}
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const NonSelected: Story = { args: { color: "nonSelected" } };
export const Selected: Story = { args: { color: "selected" } };
export const FillBlue: Story = { args: { color: "fillBlue" } };
export const FillGray: Story = { args: { color: "fillGray" } };
export const OutlineBlue: Story = { args: { color: "outlineBlue" } };
export const FillBlack: Story = { args: { color: "fillBlack" } };
export const Transparent: Story = { args: { color: "transparent" } };
