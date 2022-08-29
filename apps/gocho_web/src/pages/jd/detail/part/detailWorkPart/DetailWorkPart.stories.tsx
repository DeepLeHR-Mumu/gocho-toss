import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { css } from "@emotion/react";

import { DetailWorkPart } from ".";

export default {
  title: "공고/detail/part/DetailWorkPart",
  component: DetailWorkPart,
  argTypes: {
    freshPosition: {
      description: "공고 디테일 근무조건에 사용될 position obj",
    },
    companyName: {
      description: "농심",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "디테일 근무조건 파트 컴포넌트",
  },
} as ComponentMeta<typeof DetailWorkPart>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof DetailWorkPart> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <div
          css={css`
            background-color: #fff;
          `}
        >
          <DetailWorkPart {...args} />
        </div>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const 기본 = Template.bind({});

기본.args = {
  freshPosition: {
    contractType: {
      type: "계약직",
      conversionRate: null,
    },
    taskDetailArr: ["공무기술직 : 자동기동"],
    rotationArr: ["3교대"],
    factoryArr: [
      {
        id: 1,
        place1: "인천광역시",
        place2: "서구",
        address: "인천광역시 서구 백범로 680 (가좌동)",
        maleNumber: 16,
        femaleNumber: 1,
        product: "폴리우레탄,정밀화학제품",
        bus: {
          exists: false,
          desc: null,
        },
        dormitory: {
          exists: false,
          desc: null,
        },
        factoryName: "factoryName",
      },
    ],
    placeArr: ["부산광역시", "사상구"],
    hireCount: -2,
    payArr: null,
    task: {
      mainTask: "설비",
      subTaskArr: ["동력", "에너지"],
    },
  },
};
