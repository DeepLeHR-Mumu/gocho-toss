import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CloseButton } from "@component/common/atom/closeButton";

export default {
  title: "공용 컴포넌트/common/atom/CloseButton",
  component: CloseButton,
  argTypes: {
    size: {
      description: "버튼 크기에 대한 인자",
      control: { type: "select", options: ["S", "M", "L", "XL"] },
    },
    buttonClick: {
      description: "해당 버튼 클릭 시 실행될 함수",
      action: "clicked",
    },
    isHome: { description: "홈버튼 유무에 대한 설정" },
  },
  parameters: {
    componentSubtitle: "메인페이지에서 전체적으로 사용되는 닫기 버튼",
    backgrounds: {
      default: "dark",
    },
  },
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = (args) => {
  return <CloseButton {...args} />;
};

export const 기본닫기 = Template.bind({});
기본닫기.args = {
  size: "S",
  buttonClick: () => {
    // 테스팅을 위해 추가한 console.log
    // eslint-disable-next-line no-console
    return console.log("이동");
  },
};

export const 홈으로이동 = Template.bind({});
홈으로이동.args = {
  size: "S",
  isHome: true,
};
