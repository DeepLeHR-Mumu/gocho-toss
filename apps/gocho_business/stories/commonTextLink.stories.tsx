import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CommonTextLink } from "@/components/common";

export default {
  title: "CommonTextLink",
  component: CommonTextLink,
  argTypes: {
    text: { description: "링크 버튼에 표시되는 텍스트" },
    type: { description: "버튼의 변형형태" },
    url: { description: "externalLink, internalLink 베리에이션의 경우 필요한 연결 링크" },
    onClick: { description: "button variation의 경우 필요한 onClick 함수" },
  },
  parameters: {
    componentSubtitle: "텍스트 링크",
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
  onClickHandler: () => {
    alert("버튼 클릭");
  },
};
