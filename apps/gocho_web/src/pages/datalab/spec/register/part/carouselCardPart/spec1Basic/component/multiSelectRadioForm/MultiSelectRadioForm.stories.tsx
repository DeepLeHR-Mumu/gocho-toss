import { ComponentStory, ComponentMeta } from "@storybook/react";

import { desiredIndustryArr } from "./mockData";
import { MultiSelectRadioForm } from ".";

export default {
  title: "datalab/spec/register/part/carouselCardPart/Spec1Basic/component/MultiSelectRadioForm",
  component: MultiSelectRadioForm,
  argTypes: {
    itemArr: {
      description: "선택될 데이터 리스트",
    },
    backgroundStyle: {
      description: "선택된 배경색상,보더 스타일",
    },
    maxCount: {
      description: "선택될 카운트 최대 갯수",
    },
    moreActive: {
      description: "데이터가 너무 많을 시 더보기 유무 존재",
    },
    registerObj: {
      description: "react-hook-form register",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "복수개의 radio선택 리스트 컴포넌트",
  },
} as ComponentMeta<typeof MultiSelectRadioForm>;

const Template: ComponentStory<typeof MultiSelectRadioForm> = (args) => {
  return <MultiSelectRadioForm {...args} />;
};

export const 일반 = Template.bind({});
일반.args = {
  itemArr: desiredIndustryArr,
  backgroundStyle: "blue01",
  maxCount: 3,
  moreActive: true,
  registerObj: undefined,
};
