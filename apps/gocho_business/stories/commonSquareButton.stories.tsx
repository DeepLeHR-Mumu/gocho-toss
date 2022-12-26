import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FiAirplay } from "react-icons/fi";
import { COLORS } from "shared-style/color";

import { CommonSquareButton } from "@/components/common";

export default {
  title: "CommonSquareButton",
  component: CommonSquareButton,
  argTypes: {
    iconObj: {
      description: "아이콘 설정을 위한 객체 - icon:ReactIcon, location: 아이콘 위치",
    },
    text: {
      description: "버튼에 삽입되는 문자열",
    },
    backgroundColor: { description: "버튼 배경색, shared-styles/COLORS 값 " },
    borderColor: { description: "버튼 테두리 색, shared-styles/COLORS 값 " },
    fontColor: { description: "버튼 테두리 색, shared-styles/COLORS 값 " },
    onClickHandler: { description: "버튼 클릭시 실행될 함수" },
  },
  parameters: {
    componentSubtitle: "모서리가 네모난 버튼",
  },
} as ComponentMeta<typeof CommonSquareButton>;

const Template: ComponentStory<typeof CommonSquareButton> = (args) => <CommonSquareButton {...args} />;

export const 왼쪽_아이콘_버튼 = Template.bind({});
왼쪽_아이콘_버튼.args = {
  iconObj: { Icon: FiAirplay, location: "left" },
  text: "내용",
  backgroundColor: COLORS.GRAY100,
  borderColor: COLORS.GRAY20,
  fontColor: COLORS.BLUE_FIRST30,
};

export const 오른쪽_아이콘_버튼 = Template.bind({});
오른쪽_아이콘_버튼.args = {
  iconObj: { Icon: FiAirplay, location: "right" },
  backgroundColor: COLORS.BLUE_SECOND30,
  borderColor: COLORS.GRAY20,
  fontColor: COLORS.BLUE_FIRST50,
  text: "내용",
};
