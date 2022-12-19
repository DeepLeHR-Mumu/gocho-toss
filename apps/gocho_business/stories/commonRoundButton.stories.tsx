import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FiAirplay } from "react-icons/fi";

import { COLORS } from "shared-style/color";

import { CommonRoundButton } from "@/components/common";

export default {
  title: "CommonRoundButton",
  component: CommonRoundButton,
  argTypes: {
    Icon: {
      description: "버튼에 존재하는 아이콘 종류 - ReactIcons",
    },
    text: {
      description: "버튼에 삽입되는 문자열",
    },
    backgroundColor: { description: "버튼 배경색, shared-styles/COLORS 값 " },
    fontColor: { description: "버튼 테두리 색, shared-styles/COLORS 값 " },
    onClickHandler: { description: "버튼 클릭시 실행될 함수" },
  },
  parameters: {
    componentSubtitle: "둥근 모서리를 가진 버튼",
  },
} as ComponentMeta<typeof CommonRoundButton>;

const Template: ComponentStory<typeof CommonRoundButton> = (args) => <CommonRoundButton {...args} />;

export const 아이콘_존재버튼 = Template.bind({});
아이콘_존재버튼.args = {
  Icon: FiAirplay,
  text: "내용",
  backgoundColor: COLORS.GRAY60,
  fontColor: COLORS.BLUE_FIRST30,
  onClickHandler: () => alert("클릭됨"),
};

export const 아이콘_미존재버튼 = Template.bind({});
아이콘_미존재버튼.args = {
  text: "공고수정",
  backgoundColor: COLORS.GRAY60,
  fontColor: COLORS.BLUE_FIRST30,
  onClickHandler: () => alert("클릭됨"),
};
