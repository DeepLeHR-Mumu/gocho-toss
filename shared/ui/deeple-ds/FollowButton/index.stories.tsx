import type { Meta, StoryObj } from "@storybook/react";
import { FollowButton } from ".";

const meta: Meta<typeof FollowButton> = {
  component: FollowButton,
  title: "FollowButton",
  decorators: [
    (Component, context) => (
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        {Component({ args: { color: "follow", children: "팔로우", ...context.args } })}
        {Component({ args: { color: "unfollow", children: "팔로잉", ...context.args } })}
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FollowButton>;

export const Default: Story = { args: { children: "팔로우" } };
