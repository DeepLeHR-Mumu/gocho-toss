import type { Meta, StoryObj } from "@storybook/react";

import Popup from ".";

const meta: Meta<typeof Popup> = {
  component: Popup,
  title: "Modal/Popup",
};

export default meta;

type Story = StoryObj<typeof Popup>;

export const Default: Story = {
  args: {
    title: "타이틀",
    description:
      "테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트",
  },
};

export const LineBreak: Story = {
  args: {
    title: "타이틀",
    description: ["테스트1", "테스트2", "테스트3"],
  },
};

export const Alert: Story = {
  args: {
    title: "타이틀",
    description: ["테스트테스트테스트"],
    closeHandler: () => undefined,
    confirm: {
      text: "확인",
    },
  },
};

export const Confirm: Story = {
  args: {
    title: "타이틀",
    description: ["테스트테스트테스트"],
    closeHandler: () => undefined,
    cancel: {
      text: "취소",
    },
    confirm: {
      text: "확인",
    },
  },
};
