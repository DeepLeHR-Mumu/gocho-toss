import type { Meta, StoryObj } from "@storybook/react";
import DDayChip from ".";

const meta: Meta<typeof DDayChip> = {
  component: DDayChip,
  title: "DDayChip",
  decorators: [
    (Component, context) => (
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        {Component({ args: { children: "DDayChip", ...context.args } })}
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DDayChip>;

export const Default: Story = { args: { color: "fillBlue", children: "D-3" } };
export const AlmostDeadline: Story = { args: { color: "fillRed", children: "오늘마감" } };
export const AfterDeadline: Story = { args: { color: "fillGray", children: "마감" } };
