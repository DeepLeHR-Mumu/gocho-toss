import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { Spec3Highschool } from "@pages/datalab/spec/register/part/carouselCardPart/spec3Highschool";

export default {
  title: "데이터랩/스펙등록/part/carouselCardPart/Spec3Highschool",
  component: Spec3Highschool,
  argTypes: {
    moveNextCard: {
      description: "slick 다음이동 함수",
    },
    movePrevCard: {
      description: "slick 이전이동 함수",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "스펙등록 고등학교 정보 기입 캐로셀 카드",
  },
} as ComponentMeta<typeof Spec3Highschool>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof Spec3Highschool> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <Spec3Highschool {...args} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const card = Template.bind({});

card.args = {
  movePrevCard: () => {
    return undefined;
  },
  moveNextCard: () => {
    return undefined;
  },
};
