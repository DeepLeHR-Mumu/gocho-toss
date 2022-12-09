import { ComponentStory, ComponentMeta } from "@storybook/react";
import { css } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { rest } from "msw";

import { TipDisplay } from "@pages/index/part/tipPart/component/tipDisplay";
import { TipDisplaySkeleton } from "@pages/index/part/tipPart/component/tipDisplaySkeleton";
import { workingResponse } from "./mockData";

export default {
  title: "메인페이지/tipPart/TipDisplay",
  component: TipDisplay,
  argTypes: {
    id: { control: "number", description: "해당 게시글의 id" },
  },
  parameters: {
    componentSubtitle: "메인페이지 - 꿀팁 리스트 상단 최신 꿀팁리스트의 큰 배너형태",
  },
} as ComponentMeta<typeof TipDisplay>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const Template: ComponentStory<typeof TipDisplay> = (args) => {
  return (
    <QueryClientProvider client={mockedQueryClient}>
      <div
        css={css`
          width: 100%;
          max-width: 1060px;
        `}
      >
        <TipDisplay {...args} />
      </div>
    </QueryClientProvider>
  );
};

const TemplateSkeleton: ComponentStory<typeof TipDisplaySkeleton> = (args) => {
  return (
    <QueryClientProvider client={mockedQueryClient}>
      <div
        css={css`
          width: 100%;
          max-width: 1060px;
        `}
      >
        <TipDisplaySkeleton {...args} />
      </div>
    </QueryClientProvider>
  );
};

export const 기본 = Template.bind({});
export const 에러 = TemplateSkeleton.bind({});
export const 로딩 = TemplateSkeleton.bind({});

기본.args = {
  currentTip: {
    id: 1,
    title: "제목입니다.",
    tag: ["태그1", "태그2", "태그3"],
    description: "설명입니다.",
    thumbnailSvgSrc: "https://d2nnzfahmszi6w.cloudfront.net/tips/9/1.svg",
  },
};

기본.parameters = {
  msw: {
    handlers: [
      rest.get("https://gocho-back.com/v1/tips/9", (req, res, ctx) => {
        return res(ctx.json(workingResponse));
      }),
    ],
  },
};
