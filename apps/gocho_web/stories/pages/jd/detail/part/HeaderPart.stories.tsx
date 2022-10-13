import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { HeaderPart } from "@pages/jd/detail/part/headerPart";

export default {
  title: "공고/detail/part/HeaderPart",
  component: HeaderPart,
  argTypes: {
    isSkeleton: {
      description: "데이터 로딩중 스켈레톤 boolean값",
    },
    jobDetailData: {
      description: "header를 이루는 데이터 obj",
    },
    setCurrentPositionId: {
      description: "선택된 position의 아이디를 변환해주는 setAction",
    },
    setFreshPosition: {
      description: "변경된 currentPositionId값 기준으로 position를 변환해주는 setAction",
    },
    currentPositionId: {
      description: "선택된 최신의 position Id",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "공고 디테일 상단 공고안내 header 컴포넌트",
  },
} as ComponentMeta<typeof HeaderPart>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof HeaderPart> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <HeaderPart {...args} />
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
    applyUrl: "https://naver.com",
    title: "[설비 전담정비] 사원 0명 채용",
    cut: false,
    bookmarkCount: 20,
    viewCount: 322,
    company: {
      companyId: 307,
      name: "포스터 ICT",
      logoUrl: "https://d2nnzfahmszi6w.cloudfront.net/company_images/337/logo.png",
      youtubeUrl: "https://youtube.com",
    },
    positionArr: [
      {
        id: 725,
        requiredExp: {
          type: "무관",
        },
        hireCount: -1,
        rotationArr: ["주간"],
        contractType: {
          type: "연수생",
        },
        placeArr: ["경상북도", "포항시"],
        possibleEdu: {
          summary: "고졸",
        },
        task: {
          mainTask: "설비",
          subTaskArr: null,
        },
      },
    ],
  },
  currentPositionId: 725,
  setCurrentPositionId: () => {
    return undefined;
  },
};

export const 로딩중 = Template.bind({});
로딩중.args = {
  isSkeleton: true,
};
