import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { Spec2lastEducation } from ".";

export default {
  title: "datalab/spec/register/part/carouselCardPart/Spec2lastEducation",
  component: Spec2lastEducation,
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
    componentSubtitle: "스펙등록 최종학력 기입 캐로셀 카드",
  },
} as ComponentMeta<typeof Spec2lastEducation>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof Spec2lastEducation> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <Spec2lastEducation {...args} />
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
};
