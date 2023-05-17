import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { css } from "@emotion/react";

import { JobCard } from "@/pages/jd/list/component/";

export default {
  title: "공고/list/JobCard",
  component: JobCard,
  argTypes: {
    job: {
      description: "공고카드를 랜더링 하기위한 공고 내용",
    },
  },
  parameters: {
    componentSubtitle: "어드민 공고 리스트 페이지 공고 리스트 카드",
  },
} as ComponentMeta<typeof JobCard>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const Template: ComponentStory<typeof JobCard> = (args) => (
  <QueryClientProvider client={mockedQueryClient}>
    <div
      css={css`
        width: 1216px;
        list-style: none;
      `}
    >
      <JobCard {...args} />
    </div>
  </QueryClientProvider>
);

export const 기본 = Template.bind({});
기본.args = {
  job: {
    id: 13995,
    applyUrl: "https://test.co.kr",
    companyName: "고초대졸닷컴",
    title:
      "테스트 공고에 대한 제목 테스트 공고에 대한 제목 테스트 공고에 대한 제목 테스트 공고에 대한 제목 테스트 공고에 대한 제목",
    startTime: "1679711400000",
    endTime: "1679797800000",
    task: "공무",
  },
};
