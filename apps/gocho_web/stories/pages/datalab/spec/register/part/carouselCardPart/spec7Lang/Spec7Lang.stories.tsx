import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { Spec7Lang } from "@pages/datalab/spec/register/part/carouselCardPart/spec7Lang";

export default {
  title: "데이터랩/스펙등록/part/carouselCardPart/Spec7Lang",
  component: Spec7Lang,
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
    componentSubtitle: "스펙등록 외국어 기입 캐로셀 카드",
  },
} as ComponentMeta<typeof Spec7Lang>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof Spec7Lang> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <Spec7Lang {...args} />
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
