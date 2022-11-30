import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { EvaluationPart } from "@pages/datalab/spec/detail/part/evaluationPart";

export default {
  title: "데이터랩/스펙디테일/part/EvaluationPart",
  component: EvaluationPart,
  parameters: {
    componentSubtitle: "스펙 디테일 페이지에 이용자의 스펙을 평가하는 aside",
    backgrounds: {
      default: "dark",
    },
  },
} as ComponentMeta<typeof EvaluationPart>;

const Template: ComponentStory<typeof EvaluationPart> = (args) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <EvaluationPart {...args} />;
    </QueryClientProvider>
  );
};

export const 기본 = Template.bind({});
기본.args = { evalCount: 34 };
export const 본인스펙열람 = Template.bind({});
본인스펙열람.args = { isMine: true, evalCount: 2 };

export const 이미평가한스펙 = Template.bind({});
이미평가한스펙.args = { didEval: true, evalCount: 34 };
