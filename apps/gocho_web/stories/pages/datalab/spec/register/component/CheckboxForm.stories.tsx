import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { CheckboxForm } from "@pages/datalab/spec/register/component";

export default {
  title: "데이터랩/스펙등록/component/CheckboxForm",
  component: CheckboxForm,
  argTypes: {
    itemArr: {
      description: "아이템 리스트 배열",
    },
    backgroundStyle: {
      description: "버튼 배경 컬러 스타일",
    },
    maxCount: {
      description: "최종 선택 가능한 클릭 카운트",
    },
    moreActive: {
      description: "itemArr 배열이 많을 시 10개만 보일지 전체 보일지에 대한 선택",
    },
    registerObj: {
      description: "react-hook-form register",
    },
  },
  parameters: {
    componentSubtitle: "스펙등록 carouselCard basic01에 사용되는 체크박스 리스트",
    backgrounds: {
      default: "dark",
    },
  },
} as ComponentMeta<typeof CheckboxForm>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof CheckboxForm> = (args) => {
  return (
    <QueryClientProvider client={mockedQueryClient}>
      <CheckboxForm {...args} />
    </QueryClientProvider>
  );
};

export const 기본단축형 = Template.bind({});

const desiredIndustryArr = [
  "제약",
  "바이오",
  "반도체",
  "전자재료",
  "산업가스/특수가스",
  "디스플레이",
  "식품/식품원료",
  "음료/주류",
  "싸이로/사료",
  "탱크터미널",
  "정유석화",
  "철강",
  "비철/금속",
  "완성차",
  "자동차부품",
  "시설관리전문",
  "화학",
  "섬유",
  "발전소",
  "도시가스",
  "산업기계",
  "방산",
  "LPG",
  "제지",
  "2차전지",
  "조선",
  "화장품/헬스케어",
];

기본단축형.args = {
  itemArr: desiredIndustryArr,
  backgroundStyle: "blue01",
  maxCount: 3,
  moreActive: true,
  registerObj: undefined,
};

export const 기본전체형 = Template.bind({});

기본전체형.args = {
  itemArr: desiredIndustryArr,
  backgroundStyle: "blue01",
  maxCount: 3,
  moreActive: false,
  registerObj: undefined,
};
