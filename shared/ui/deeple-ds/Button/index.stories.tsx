import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  decorators: [
    (Component, context) => {
      if (context.name !== "Default" && context.name !== "Content Fit") {
        return (
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            {Component({ args: { size: "short", ...context.args } })}
            {Component({ args: { size: "long", ...context.args } })}
          </div>
        );
      }

      return <Component />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const ContentFit: Story = { args: { size: "contentFit", children: "팔로우" } };

export const FillMain: Story = { args: { children: "Fill Main", color: "fillMain" } };

export const Outline: Story = { args: { children: "Outline", color: "outline" } };

export const Disable: Story = { args: { children: "Disable", color: "disable" } };

export const FillWhite: Story = { args: { children: "Fill White", color: "fillWhite" } };

export const GrayLine: Story = { args: { children: "Gray Line", color: "grayLine" } };

export const RedFill: Story = { args: { children: "Red Fill", color: "redFill" } };

export const Blue100: Story = { args: { children: "Blue 100", color: "blue100" } };
