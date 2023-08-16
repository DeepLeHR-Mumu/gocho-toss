import type { Meta, StoryObj } from "@storybook/react";
import { AiOutlineHeart } from "react-icons/ai";
import Button from ".";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  decorators: [
    (Component, context) => {
      if (context.name !== "Default" && context.name !== "Content Fit") {
        return (
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            {Component({ args: { size: "140", ...context.args } })}
            {Component({ args: { size: "392", ...context.args } })}
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

export const FollowButton: Story = { args: { size: "followButton", children: "팔로우" } };

export const BlackChip: Story = { args: { size: "blackChip", children: "Black Chip", color: "noneBlackWhite" } };

export const IconButton: Story = {
  args: { size: "icon", children: <AiOutlineHeart />, color: "gray100TransparentGray100" },
};

export const FilterButton: Story = {
  args: { size: "filterButton", children: "120,000개 공고보기" },
};

export const FillMain: Story = { args: { children: "Fill Main", color: "fillMain" } };

export const Outline: Story = { args: { children: "Outline", color: "outline" } };

export const Disable: Story = { args: { children: "Disable", color: "disable" } };

export const FillWhite: Story = { args: { children: "Fill White", color: "fillWhite" } };

export const GrayLine: Story = { args: { children: "Gray Line", color: "grayLine" } };

export const FillSelected: Story = { args: { children: "Fill Selected", color: "fillSelected" } };

export const RedFill: Story = { args: { children: "Red Fill", color: "redFill" } };

export const Blue100: Story = { args: { children: "Blue 100", color: "blue100" } };
