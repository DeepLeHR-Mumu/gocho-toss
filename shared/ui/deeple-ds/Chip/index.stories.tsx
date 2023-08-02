import type { Meta, StoryObj } from "@storybook/react";
import Chip from ".";

const meta: Meta<typeof Chip> = {
  component: Chip,
  title: "Chip",
  decorators: [
    (Component, context) => (
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        {Component({ args: { ...context.args } })}
        {/* {Component({ args: { ...a.args } })} */}
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = { args: { children: "Chip" } };

export const Small: Story = {
  args: { size: "small", children: "D-1" },
  decorators: [
    (Component, context) => (
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        {Component({ args: { ...context.args, color: "blue100" } })}
        {Component({ args: { ...context.args, color: "redFill" } })}
        {Component({ args: { ...context.args, color: "disable" } })}
      </div>
    ),
  ],
};

export const FillMain: Story = { args: { color: "fillMain" } };

export const Outline: Story = { args: { color: "outline" } };

export const Disable: Story = { args: { color: "disable" } };

export const FillWhite: Story = { args: { color: "fillWhite" } };

export const GrayLine: Story = { args: { color: "grayLine" } };

export const RedFill: Story = { args: { color: "redFill" } };

export const Blue100: Story = { args: { color: "blue100" } };
