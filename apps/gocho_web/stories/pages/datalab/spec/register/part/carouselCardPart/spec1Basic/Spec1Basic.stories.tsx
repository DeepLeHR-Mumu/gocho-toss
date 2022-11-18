import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { rest } from "msw";

import { Spec1Basic } from "@pages/datalab/spec/register/part/carouselCardPart/spec1Basic";
import { BACKEND_URL } from "shared-constant/externalURL";
import { authorizedResponse } from "./partMockData";

export default {
  title: "데이터랩/스펙등록/part/carouselCardPart/Spec1Basic",
  component: Spec1Basic,
  argTypes: {
    moveNextCard: {
      description: "slick 다음이동 함수",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "스펙등록 기본정보 기입 캐로셀 카드",
  },
} as ComponentMeta<typeof Spec1Basic>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof Spec1Basic> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <Spec1Basic {...args} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const card = Template.bind({});

card.parameters = {
  msw: {
    handlers: {
      login: rest.post(`${BACKEND_URL}/auth/check`, (req, res, ctx) => {
        return res(ctx.json(authorizedResponse));
      }),
    },
  },
};

card.args = {
  moveNextCard: () => {
    return undefined;
  },
};
