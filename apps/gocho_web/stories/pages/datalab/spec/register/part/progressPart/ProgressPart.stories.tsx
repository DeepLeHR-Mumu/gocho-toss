import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { useEffect } from "react";

import { useProgress } from "@recoil/hook/spec";

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

const MockPart = () => {
  const { setCurrentProgress } = useProgress();

  useEffect(() => {
    setCurrentProgress(50);
  }, [setCurrentProgress]);

  return <ProgressPart />;
};

const Template: ComponentStory<typeof ProgressPart> = (arg) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <MockPart {...arg} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const 기본 = Template.bind({});

기본.args = {};
