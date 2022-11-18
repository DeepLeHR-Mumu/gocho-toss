import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { Spec4University } from "@pages/datalab/spec/register/part/carouselCardPart/spec4University";

export default {
  title: "데이터랩/스펙등록/part/carouselCardPart/Spec4University",
  component: Spec4University,
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
    componentSubtitle: "스펙등록 고등학교 + 대학교 정보 기입 캐로셀 카드",
  },
} as ComponentMeta<typeof Spec4University>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof Spec4University> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <Spec4University {...args} />
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
