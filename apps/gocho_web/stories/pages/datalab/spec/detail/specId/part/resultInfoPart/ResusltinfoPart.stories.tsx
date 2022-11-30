import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ResultInfoPart } from "@pages/datalab/spec/detail/part/resultInfoPart";

export default {
  title: "데이터랩/스펙디테일/Part/ResultInfoPart/index",
  component: ResultInfoPart,
  parameters: {
    componentSubtitle: "스펙 디테일 페이지에 이용자의 스펙에 대한 평가가 출력되는 part",
  },
} as ComponentMeta<typeof ResultInfoPart>;

const Template: ComponentStory<typeof ResultInfoPart> = (args) => {
  return <ResultInfoPart {...args} />;
};

export const 본인확인불가스펙 = Template.bind({});
본인확인불가스펙.args = {
  resultData: {
    score: 3.6,
    scoreCount: 2932,
    evals: {
      strongPointArr: [["자격증", 3]],
      weakPointArr: [["자격증", 3]],
      feedbackArr: ["나쁘지 않네"],
    },
    isMine: true,
    evalCount: 4,
  },
};
export const 기본 = Template.bind({});
기본.args = {
  resultData: {
    score: 3.6,
    scoreCount: 2932,
    evals: {
      strongPointArr: [["자격증", 3]],
      weakPointArr: [["자격증", 3]],
      feedbackArr: ["나쁘지 않네"],
    },
    isMine: true,
    evalCount: 4,
  },
};
export const 평가없음 = Template.bind({});
평가없음.args = {
  resultData: {
    score: null,
    scoreCount: 2932,
    evals: null,
    isMine: true,
    evalCount: 0,
  },
};
