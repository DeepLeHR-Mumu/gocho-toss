import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { Spec8AwardCareerEtc } from "@pages/datalab/spec/register/part/carouselCardPart/spec8AwardCareerEtc";

export default {
  title: "데이터랩/스펙등록/part/carouselCardPart/Spec8AwardCareerEtc",
  component: Spec8AwardCareerEtc,
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
    componentSubtitle: "스펙등록 상장, 경력, 기타 텍스트 기입 캐로셀 카드",
  },
} as ComponentMeta<typeof Spec8AwardCareerEtc>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof Spec8AwardCareerEtc> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <Spec8AwardCareerEtc {...args} />
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
