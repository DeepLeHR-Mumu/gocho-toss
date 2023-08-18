import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  decorators: [
    (Component, context) => (
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        {Component({ args: { size: "small", children: "smallButton", ...context.args } })}
        {Component({ args: { size: "large", children: "largeButton", ...context.args } })}
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Active: Story = { args: { children: "Active", color: "active" } };
export const Outline: Story = { args: { children: "Outline", color: "outline" } };
export const Disable: Story = { args: { children: "Disable", color: "disable" } };
export const FillWhite: Story = { args: { children: "FillWhite", color: "fillWhite" } };
export const OutlineGray: Story = { args: { children: "OutlineGray", color: "outlineGray" } };
export const FillSelected: Story = { args: { children: "FillSelected", color: "fillSelected" } };
