import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StarEvaluation } from "@component/common/molecule/starEvaluation";

export default {
  title: "공용 컴포넌트/common/molecule/StarEvaluation",
  component: StarEvaluation,
  parameters: {
    componentSubtitle: "스펙 디테일 페이지에 이용자의 스펙이 출력되는 페이지",
  },
  argTypes: {
    size: { description: "별점의 크기를 나타내는 값" },
    parentSetState: {
      description: "해당 별점 점수를 setState하는 setter, 부모 컴포넌트가 별점의 값을 알아야 하는 경우",
    },
    parentScore: {
      description: "간단하게 점수 표시를 위해 컴포넌트를 사용할 경우 입력되는 props",
      type: { name: "number", required: false },
    },
  },
} as ComponentMeta<typeof StarEvaluation>;

const Template: ComponentStory<typeof StarEvaluation> = (args) => {
  return <StarEvaluation {...args} />;
};

export const 점수표시 = Template.bind({});
점수표시.args = { size: "M", parentScore: 3.5 };

export const 점수메기기 = Template.bind({});
점수메기기.args = { size: "M", parentSetState: undefined };
