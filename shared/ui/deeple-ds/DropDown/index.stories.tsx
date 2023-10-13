import type { Meta, StoryObj } from "@storybook/react";
import { Profile } from "deeple-ds/Profile";

import testSmallImage1 from "shared-image/global/deeple/logoIconColor.svg";

import { DropDown } from ".";

const meta: Meta<typeof DropDown> = {
  component: DropDown,
  title: "DropDown",
  decorators: [
    (Component) => (
      <div style={{ position: "relative", left: "15rem", top: "15rem" }}>
        <Component />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DropDown>;

export const Default: Story = {};

export const WithMenu: Story = {
  args: {
    title: "Title",
    menu: { options: [{ content: "option 1", focused: true }, { content: "option 2" }], footer: { content: "footer" } },
  },
};

export const CustomTitle: Story = {
  args: {
    customTitle: <Profile src={testSmallImage1} altText="test profile alt" />,
    menu: { options: [{ content: "option 1", focused: true }, { content: "option 2" }], footer: { content: "footer" } },
  },
};

export const FlexibleHeight: Story = {
  args: {
    customTitle: <Profile src={testSmallImage1} altText="test profile alt 2" />,
    menu: {
      options: [{ content: <div style={{ height: "23rem" }}>option 1</div>, focused: true }, { content: "option 2" }],
      footer: { content: "footer" },
    },
    menuConfig: { flexibleHeight: true },
  },
};
