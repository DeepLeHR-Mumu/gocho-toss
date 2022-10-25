import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { css } from "@emotion/react";

import { DetailSupportPart } from "@pages/jd/detail/[jobId]/part/detailSupportPart";

export default {
  title: "공고/detail/part/DetailSupportPart",
  component: DetailSupportPart,
  argTypes: {
    freshPosition: {
      description: "공고 디테일 지원조건에 사용될 position obj",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "디테일 상단 + 지원조건 파트 컴포넌트",
  },
} as ComponentMeta<typeof DetailSupportPart>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof DetailSupportPart> = (args) => {
  return (
    <QueryClientProvider client={mockedQueryClient}>
      <div
        css={css`
          background-color: #fff;
        `}
      >
        <DetailSupportPart {...args} />
      </div>
    </QueryClientProvider>
  );
};

export const 기본 = Template.bind({});

기본.args = {
  freshPosition: {
    requiredExp: {
      type: "경력",
      minYear: 2,
      maxYear: 0,
    },
    requiredEtcArr: ["신입 또는 경력 1년 이상", "나이/성별 : 무관"],
    contractType: {
      type: "정규직",
    },
    hireCount: -1,
    possibleEdu: {
      middle: false,
      high: true,
      college: false,
      four: false,
    },
    task: {
      mainTask: "설비",
    },
  },
};
