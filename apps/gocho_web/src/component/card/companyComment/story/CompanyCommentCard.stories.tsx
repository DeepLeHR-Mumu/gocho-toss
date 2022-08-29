import { ComponentStory, ComponentMeta } from "@storybook/react";
import { css } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { rest } from "msw";

import { CompanyCommentCard } from "..";
import { workingResponse, errorResponse } from "./mockData";

export default {
  title: "공용 컴포넌트/card/CompanyCommentCard",
  component: CompanyCommentCard,
  argTypes: {
    companyId: { control: "number", description: "회사 고유 ID" },
  },
  parameters: {
    layout: "padded",
    componentSubtitle:
      "파라미터로 입력되는 회사에 대한 댓글을 출력하는 컴포넌트",
  },
} as ComponentMeta<typeof CompanyCommentCard>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const Template: ComponentStory<typeof CompanyCommentCard> = (args) => {
  return (
    <QueryClientProvider client={mockedQueryClient}>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <CompanyCommentCard {...args} />
      </div>
    </QueryClientProvider>
  );
};

export const 정상작동 = Template.bind({});
정상작동.args = { companyId: 4 };
정상작동.parameters = {
  msw: {
    handlers: [
      rest.get(
        "https://gocho-back.com/v1/companies/4/comments",
        (req, res, ctx) => {
          return res(ctx.json(workingResponse));
        }
      ),
    ],
  },
};

export const 에러 = Template.bind({});
에러.args = {
  companyId: 50000,
};
에러.parameters = {
  msw: {
    handlers: [
      rest.get(
        "https://gocho-back.com/v1/companies/50000/comments",
        (req, res, ctx) => {
          return res(ctx.json(errorResponse), ctx.status(404));
        }
      ),
    ],
  },
};
