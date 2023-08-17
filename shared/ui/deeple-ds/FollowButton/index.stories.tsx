import type { Meta, StoryObj } from "@storybook/react";
import FollowButton from ".";

const meta: Meta<typeof FollowButton> = {
  component: FollowButton,
  title: "FollowButton",
  decorators: [
    (Component, context) => {
      if (context.name !== "Default" && context.name !== "Content Fit") {
        return (
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            {Component({ args: { color: "follow", ...context.args } })}
            {Component({ args: { color: "unfollow", ...context.args } })}
          </div>
        );
      }

      return <Component />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof FollowButton>;

export const Default: Story = { args: { children: "팔로우" } };
