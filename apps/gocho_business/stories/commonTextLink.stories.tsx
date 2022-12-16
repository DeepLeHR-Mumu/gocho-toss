import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CommonTextLink } from "@/components/common";

export default {
  title: "CommonTextLink",
  component: CommonTextLink,
  argTypes: {
    iconObj: {
      description: "아이콘 설정을 위한 객체 - icon:ReactIcon, location: 아이콘 위치",
    },
    text: {
      description: "버튼에 삽입되는 문자열",
    },
    backgroundColor: { description: "버튼 배경색, shared-styles/COLORS 값 " },
    borderColor: { description: "버튼 테두리 색, shared-styles/COLORS 값 " },
    onClickHandler: { description: "버튼 클릭시 실행될 함수" },
  },
  parameters: {
    componentSubtitle: "각종 정보 출력을 위한 박스",
  },
} as ComponentMeta<typeof CommonTextLink>;

const Template: ComponentStory<typeof CommonTextLink> = (args) => <CommonTextLink {...args} />;

export const 내부링크 = Template.bind({});
내부링크.args = {
  text: "내부링크",
  type: "internalLink",
  url: "/23",
};

export const 외부링크 = Template.bind({});
외부링크.args = {
  text: "bmw motorrad 외부링크",
  type: "externalLink",
  url: "https://www.bmw-motorrad.co.kr/ko/home.html",
};

export const 버튼 = Template.bind({});
버튼.args = {
  text: "weoflnkweknlf",
  type: "button",
  onClick: () => {
    alert("버튼 클릭");
  },
};
