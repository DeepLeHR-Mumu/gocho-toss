import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { rest } from "msw";

import { Header } from "@component/global/header";
import { authorizedResponse } from "./mockData";

export default {
  title: "공용 컴포넌트/global/Header",
  component: Header,
  parameters: {
    componentSubtitle: "사이트의 Header 컴포넌트",
  },
} as ComponentMeta<typeof Header>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof Header> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <Header {...args} />
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
