import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { rest } from "msw";

import { HeaderFix } from ".";
import { authorizedResponse } from "./mockData";

export default {
  title: "공고/detail/part/headerPart/component/HeaderFix",
  component: HeaderFix,
  argTypes: {
    jobDetailData: {
      description: "",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "",
  },
} as ComponentMeta<typeof HeaderFix>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof HeaderFix> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <HeaderFix {...args} />
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
  jobDetailData: {
    id: 4,
    endTime: 1658329199000,
    title: "[공무(자동기)] 사원 채용",
    cut: false,
    bookmarkCount: 0,
    applyUrl: "https://naver.com",
    company: {
      name: "농심",
      companyId: 230,
      logoUrl: "https://d2nnzfahmszi6w.cloudfront.net/company_images/230/logo.png",
    },
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
  jobDetailData: {
    id: 4,
    endTime: 1658329199000,
    title: "[공무(자동기)] 사원 채용",
    cut: false,
    bookmarkCount: 0,
    applyUrl: "https://naver.com",
    company: {
      name: "농심",
      companyId: 230,
      logoUrl: "https://d2nnzfahmszi6w.cloudfront.net/company_images/230/logo.png",
    },
  },
};
