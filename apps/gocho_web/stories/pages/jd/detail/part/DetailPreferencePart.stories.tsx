import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { css } from "@emotion/react";

import { DetailPreferencePart } from "@pages/jd/detail/[jobId]/part/detailPreferencePart";

export default {
  title: "공고/detail/part/DetailPreferencePart",
  component: DetailPreferencePart,
  argTypes: {
    freshPosition: {
      description: "공고 디테일 우대사항에 사용될 position obj",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "디테일 우대사항 파트 컴포넌트",
  },
} as ComponentMeta<typeof DetailPreferencePart>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof DetailPreferencePart> = (args) => {
  return (
    <QueryClientProvider client={mockedQueryClient}>
      <div
        css={css`
          background-color: #fff;
        `}
      >
        <DetailPreferencePart {...args} />
      </div>
    </QueryClientProvider>
  );
};

export const 기본 = Template.bind({});

기본.args = {
  freshPosition: {
    preferredCertiArr: ["전산자격증", "재택근무 가능"],
    preferredEtcArr: ["정규직 전환 연계 채용(계약기간 1년 종료 후 평가 우수자는 정규직 전환 검토)"],
  },
};
