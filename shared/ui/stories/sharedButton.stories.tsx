import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FiUser } from "react-icons/fi";

import { SharedButton } from "../business/sharedButton";

export default {
  title: "SharedButton",
  component: SharedButton,
  argTypes: {
    radius: { description: "버튼 radius" },
    fontColor: { description: "버튼 내부 문자열의 색" },
    iconObj: { description: "react-icons에 존재하는 아이콘과 아이콘 위치 지정하는 객체" },
    backgroundColor: { description: "버튼 내부 색" },
    size: { description: "버튼 크기" },
    isFullWidth: { description: "부모 컨테이너 크기에 맞춤 여부" },
    text: { description: "버튼 내부에 출력되는 문자열" },
    onClickHandler: { description: "버튼 클릭 시 실행되는 onClickHandler 또는 submit" },
    borderColor: { description: "버튼 테두리 색" },
  },
  parameters: {
    componentSubtitle: "모든 서비스에서 공통으로 사용하는 액션이 수행되는 버튼",
    docs: {
      description: {
        component:
          "- **모달 열기**에 사용 가능한 버튼  \n- **submit 버튼일 경우** onClickHandler 프로퍼티에 submit 문자열 전달",
      },
    },
  },
} as ComponentMeta<typeof SharedButton>;

const Template: ComponentStory<typeof SharedButton> = (args) => <SharedButton {...args} />;

export const 기본 = Template.bind({});
기본.args = {
  radius: "rect",
  fontColor: "white",
  iconObj: { icon: FiUser, location: "right" },
  backgroundColor: "#f97c91",
  size: "small",
  isFullWidth: true,
  text: "공통 버튼 컴포넌트",
  onClickHandler: () => {
    alert("hi");
  },
};
