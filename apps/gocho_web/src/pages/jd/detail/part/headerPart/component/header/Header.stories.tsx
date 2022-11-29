import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { Header } from ".";

export default {
  title: "공고/detail/part/HeaderPart/component/Header",
  component: Header,
  argTypes: {
    jobDetailData: {
      description: "header 상단을 이루는 데이터 obj",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "공고 디테일 상단 공고안내 header 컴포넌트",
  },
} as ComponentMeta<typeof Header>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof Header> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <Header {...args} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const 기본 = Template.bind({});
기본.args = {
  jobDetailData: {
    id: 4,
    startTime: 1631026799000,
    endTime: 1631199599000,
    title: "[설비 전담정비] 사원 0명 채용",
    cut: false,
    bookmarkCount: 20,
    applyUrl: "https://naver.com",
    viewCount: 202,
    company: {
      companyId: 337,
      name: "포스코 ICT",
      logoUrl: "https://d2nnzfahmszi6w.cloudfront.net/company_images/337/logo.png",
      youtubeUrl: "https://youtube.com",
    },
  },
};
