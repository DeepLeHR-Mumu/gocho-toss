import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { CompanyPreviewPart } from "@pages/search/part/companyPreviewPart";

export default {
  title: "pages/search/part/CompanyPreviewPart",
  component: CompanyPreviewPart,
  argTypes: {},
  parameters: {
    componentSubtitle: "통합검색 기업정보 전체페이지 미리보기 파트",
  },
} as ComponentMeta<typeof CompanyPreviewPart>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof CompanyPreviewPart> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <CompanyPreviewPart {...args} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const 기업정보통합미리보기파트 = Template.bind({});

기업정보통합미리보기파트.parameters = {
  nextRouter: { query: { q: "현대", page: 1 } },
};
