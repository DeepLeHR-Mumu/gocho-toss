import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { MenuListPart } from "@pages/search/part/menuListPart";

export default {
  title: "pages/search/part/MenuListPart",
  component: MenuListPart,
  argTypes: {},
  parameters: {
    componentSubtitle: "통합검색 상단 전체, 공고, 기업 메뉴파트",
  },
} as ComponentMeta<typeof MenuListPart>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof MenuListPart> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <MenuListPart {...args} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const 통합검색상단메뉴파트 = Template.bind({});

통합검색상단메뉴파트.parameters = {
  nextRouter: { query: { q: "현대", page: 1 } },
};
