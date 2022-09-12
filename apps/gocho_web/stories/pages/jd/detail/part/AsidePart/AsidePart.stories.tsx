import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { rest } from "msw";
import { css } from "@emotion/react";

import { AsidePart } from "@pages/jd/detail/part/asidePart";
import { authorizedResponse } from "./mockData";

export default {
  title: "공고/detail/part/AsidePart",
  component: AsidePart,
  argTypes: {
    isSkeleton: {
      description: "데이터 로딩중 스켈레톤 boolean값",
    },
    companyId: {
      description: "detail 메인에서 전달되어 해당 컴포넌트에 사용될 company id",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "공고 디테일에서 사이드 기업, 공고 댓글 컴포넌트",
  },
} as ComponentMeta<typeof AsidePart>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof AsidePart> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <div
          css={css`
            width: 100%;
            max-width: 17rem;
          `}
        >
          <AsidePart {...args} />
        </div>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const 비로그인상태 = Template.bind({});
비로그인상태.parameters = {
  msw: {
    handlers: [
      rest.post("https://gocho-back.com/v1/auth/check", (req, res, ctx) => {
        return res(ctx.status(404));
      }),
    ],
  },
};

비로그인상태.args = {
  companyId: 307,
};

export const 로그인상태 = Template.bind({});
로그인상태.parameters = {
  msw: {
    handlers: [
      rest.post("https://gocho-back.com/v1/auth/check", (req, res, ctx) => {
        return res(ctx.json(authorizedResponse));
      }),
    ],
  },
};

로그인상태.args = {
  companyId: 307,
};

export const 로딩중 = Template.bind({});

로딩중.args = {
  isSkeleton: true,
};
