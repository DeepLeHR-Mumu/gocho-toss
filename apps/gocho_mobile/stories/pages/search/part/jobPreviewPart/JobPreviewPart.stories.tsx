import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { JobPreviewPart } from "@pages/search/part/jobPreviewPart";

export default {
  title: "pages/search/part/JobPreviewPart",
  component: JobPreviewPart,
  argTypes: {},
  parameters: {
    componentSubtitle: "통합검색 공고정보 전체페이지 미리보기 파트",
  },
} as ComponentMeta<typeof JobPreviewPart>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof JobPreviewPart> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <JobPreviewPart {...args} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const 공고정보통합미리보기파트 = Template.bind({});

공고정보통합미리보기파트.parameters = {
  nextRouter: { query: { q: "현대", page: 1 } },
};
