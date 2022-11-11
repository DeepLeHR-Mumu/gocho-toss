import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ProgressPart } from "@pages/datalab/spec/register/part/progressPart";

export default {
  title: "데이터랩/스펙등록/part/ProgressPart",
  component: ProgressPart,
  argTypes: {},
  parameters: {
    componentSubtitle: "스펙등록 상단 프로그래스 라인",
  },
} as ComponentMeta<typeof ProgressPart>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof ProgressPart> = (arg) => {
  return (
    <QueryClientProvider client={mockedQueryClient}>
      <ProgressPart {...arg} />
    </QueryClientProvider>
  );
};

export const 기본 = Template.bind({});

기본.args = {};
기본.parameters = {
  nextRouter: { hash: "1" },
};
