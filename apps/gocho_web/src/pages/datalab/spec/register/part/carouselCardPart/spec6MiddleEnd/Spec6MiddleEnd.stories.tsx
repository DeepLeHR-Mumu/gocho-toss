import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { Spec6MiddleEnd } from ".";

export default {
  title: "datalab/spec/register/part/carouselCardPart/Spec6MiddleEnd",
  component: Spec6MiddleEnd,
  argTypes: {
    moveNextCard: {
      description: "slick 다음이동 함수",
    },
    movePrevCard: {
      description: "slick 이전이동 함수",
    },
    handleKeepWriteSpec: {
      description: "스펙등록 하지않고 다음 추가 작성 함수",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "스펙등록 1차 기본등록완료 안내 및 post 캐로셀 카드",
  },
} as ComponentMeta<typeof Spec6MiddleEnd>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof Spec6MiddleEnd> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <Spec6MiddleEnd {...args} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const 기본 = Template.bind({});

기본.args = {
  movePrevCard: () => {
    return undefined;
  },
  moveNextCard: () => {
    return undefined;
  },
  handleKeepWriteSpec: () => {
    return undefined;
  },
};
