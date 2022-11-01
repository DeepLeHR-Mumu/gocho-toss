import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { CompanyCardList } from "@pages/search/component/companyCardList";
import { mockData } from "./mockData";

export default {
  title: "pages/search/component/CompanyCardList",
  component: CompanyCardList,
  argTypes: {
    companyDataArr: {
      description: "기업데이터 배열정보",
    },
    isLoading: {
      description: "배열값이 없을시 스켈레톤을 주기위한 로딩값",
    },
  },
  parameters: {
    componentSubtitle: "통합검색 기업페이지 -> 기업카드 리스트",
  },
} as ComponentMeta<typeof CompanyCardList>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof CompanyCardList> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <CompanyCardList {...args} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const 기업리스트 = Template.bind({});
export const 로딩중 = Template.bind({});

기업리스트.args = {
  companyDataArr: mockData,
  isLoading: false,
};

로딩중.args = {
  companyDataArr: undefined,
  isLoading: true,
};
