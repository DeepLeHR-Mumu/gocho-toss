import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { JobListPart } from "@pages/search/part/jobListPart";

export default {
  title: "pages/search/part/JobListPart",
  component: JobListPart,
  argTypes: {},
  parameters: {
    componentSubtitle: "통합검색 공고정보 리스트 파트",
  },
} as ComponentMeta<typeof JobListPart>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof JobListPart> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <JobListPart {...args} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const 공고정보리스트파트 = Template.bind({});

공고정보리스트파트.parameters = {
  nextRouter: { query: { q: "현대", page: 1 } },
};
