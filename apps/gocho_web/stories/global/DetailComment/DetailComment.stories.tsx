import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { rest } from "msw";
import { css } from "@emotion/react";

import { DetailComment } from "@component/global/detailComment";
import { authorizedResponse } from "./mockData";

export default {
  title: "공용 컴포넌트/global/detailComment",
  component: DetailComment,
  argTypes: {
    detailData: {
      description: "디테일페이지에서 사용될 채팅 컴포넌트",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "공고, 기업 디테일에서 사용되는 댓글 컴포넌트",
  },
} as ComponentMeta<typeof DetailComment>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof DetailComment> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <div
          css={css`
            width: 100%;
            max-width: 17rem;
          `}
        >
          <DetailComment {...args} />
        </div>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const 데이터가없을때 = Template.bind({});

데이터가없을때.args = {
  detailData: null,
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
  detailData: {
    companyId: 24,
    name: "companyName",
    logoUrl:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fd2nnzfahmszi6w.cloudfront.net%2Fcompany_images%2F213%2Flogo.png&w=1080&q=75",
  },
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
  detailData: {
    companyId: 24,
    name: "companyName",
    logoUrl:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fd2nnzfahmszi6w.cloudfront.net%2Fcompany_images%2F213%2Flogo.png&w=1080&q=75",
  },
};
