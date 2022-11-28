import { ComponentStory, ComponentMeta } from "@storybook/react";

import { EvalPointBox } from "@pages/datalab/spec/detail/part/evaluationPart/component/evalPointBox";

export default {
  title: "데이터랩/스펙디테일/Part/EvaluationPart/EvalPointBox",
  component: EvalPointBox,
  parameters: {
    componentSubtitle: "스펙 평가 시 선택된 강점, 약점이 출력되는 박스",
  },
} as ComponentMeta<typeof EvalPointBox>;

const Template: ComponentStory<typeof EvalPointBox> = (args) => {
  return <EvalPointBox {...args} />;
};

export const 기본 = Template.bind({});
기본.args = { value: "나이" };
