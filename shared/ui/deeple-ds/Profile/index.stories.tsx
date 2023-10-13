import type { Meta, StoryObj } from "@storybook/react";

import testSmallImage1 from "shared-image/global/deeple/logoIconColor.svg";
import testLargeImage1 from "shared-image/global/deeple/largeMono.svg";

import { Profile } from ".";

const meta: Meta<typeof Profile> = {
  component: Profile,
  title: "Profile",
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Default: Story = { args: { src: testSmallImage1 } };

export const Size52: Story = { args: { src: testSmallImage1, size: 52 } };

export const Size100: Story = { args: { src: testSmallImage1 } };

export const Size120: Story = { args: { src: testLargeImage1, size: 120 } };
