import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BottomButton } from "@pages/datalab/spec/register/component";

export default {
  title: "데이터랩/스펙등록/component/BottomButton",
  component: BottomButton,
  argTypes: {
    movePrevCard: {
      description: "이전 버튼 클릭시 이전 카드로 이동하는 캐로셀 함수",
    },
    prev: {
      control: "boolean",
      description: "boolean값에 따라 이전버튼 존재/미존재",
    },
    next: {
      control: "boolean",
      description: "boolean값에 따라 다음버튼 존재/미존재",
    },
    prevTitle: {
      control: "text",
      description: "이전버튼 텍스트",
    },
    nextTitle: {
      control: "text",
      description: "다음버튼 텍스트",
    },
    postSubmit: {
      description: "클릭시 submit을 위한 함수",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "스펙등록 각 carouselCard에서 이전/다음으로 넘어가는 동작 + 작성된 데이터를 post하기위한 버튼",
  },
} as ComponentMeta<typeof BottomButton>;

const Template: ComponentStory<typeof BottomButton> = (args) => {
  return <BottomButton {...args} />;
};

export const 일반 = Template.bind({});
일반.args = {
  postSubmit: () => {
    return undefined;
  },
  movePrevCard: () => {
    return undefined;
  },
  prevTitle: "이전",
  nextTitle: "다음",
  prev: true,
  next: true,
};
