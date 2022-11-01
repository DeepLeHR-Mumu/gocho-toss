import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { CompanyListPart } from "@pages/search/part/companyListPart";

export default {
  title: "pages/search/part/CompanyListPart",
  component: CompanyListPart,
  argTypes: {},
  parameters: {
    componentSubtitle: "통합검색 기업정보 리스트 파트",
  },
} as ComponentMeta<typeof CompanyListPart>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof CompanyListPart> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <CompanyListPart {...args} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const 기업정보리스트파트 = Template.bind({});

기업정보리스트파트.parameters = {
  nextRouter: { query: { q: "현대", page: 1 } },
};
