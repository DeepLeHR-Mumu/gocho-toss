import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { css } from "@emotion/react";
import { rest } from "msw";

import { CalendarPart } from ".";
import { authorizedResponse, normalResponse } from "./mockData";

export default {
  title: "마이페이지/CalendarPart",
  component: CalendarPart,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "white",
    },
    componentSubtitle: "마이페이지 캘린더",
  },
} as ComponentMeta<typeof CalendarPart>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof CalendarPart> = (args) => {
  return (
    <QueryClientProvider client={mockedQueryClient}>
      <div
        css={css`
          width: 100%;
          max-width: 940px;
          margin: auto;
        `}
      >
        <CalendarPart {...args} />
      </div>
    </QueryClientProvider>
  );
};

export const 로그인상태 = Template.bind({});
로그인상태.parameters = {
  msw: {
    handlers: {
      login: rest.post(
        "https://gocho-back.com/v1/auth/check",
        (req, res, ctx) => {
          return res(ctx.json(authorizedResponse));
        }
      ),
      bookmark: rest.get(
        "https://gocho-back.com/v1/users/12765/job-bookmarks",
        (req, res, ctx) => {
          return res(ctx.json(normalResponse));
        }
      ),
    },
  },
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

// LATER : 로그인 후 북마크가 없는 상태 추가
