import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { JobCardList } from "@pages/search/component/jobCardList";
import { mockData } from "./mockData";

export default {
  title: "pages/search/component/JobCardList",
  component: JobCardList,
  argTypes: {
    jobDataArr: {
      controls: "object",
      description: "공고데이터 배열정보",
    },
    isLoading: {
      controls: "boolean",
      description: "배열값이 없을시 스켈레톤을 주기위한 로딩값",
    },
  },
  parameters: {
    componentSubtitle: "통합검색 공고페이지 -> 공고카드 리스트",
  },
} as ComponentMeta<typeof JobCardList>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof JobCardList> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <JobCardList {...args} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const 공고리스트 = Template.bind({});
export const 로딩중 = Template.bind({});

공고리스트.args = {
  jobDataArr: mockData,
  isLoading: false,
};

로딩중.args = {
  jobDataArr: undefined,
  isLoading: true,
};
