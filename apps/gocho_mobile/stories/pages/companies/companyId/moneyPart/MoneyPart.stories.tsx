import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { rest } from "msw";

import { BACKEND_URL } from "shared-constant/externalURL";

import { MoneyPart } from "@pages/companies/part/moneyPart";
import { PAY_AVG_NULL, PAY_START_NULL, NORMAL, PAY_NULL } from "./monckData";

export default {
  title: "pages/indexComponent/MoneyPart",
  component: MoneyPart,
} as ComponentMeta<typeof MoneyPart>;

const Template: ComponentStory<typeof MoneyPart> = (args) => {
  const mockedQueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={mockedQueryClient}>
      <MoneyPart {...args} />
    </QueryClientProvider>
  );
};
export const 기본 = Template.bind({});
기본.parameters = {
  nextRouter: { query: { companyId: 119 } },
  msw: {
    handlers: [
      rest.get(`${BACKEND_URL}companies/119`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(NORMAL));
      }),
    ],
  },
};

export const 평균연봉_NULL = Template.bind({});
평균연봉_NULL.parameters = {
  nextRouter: { query: { companyId: 119 } },
  msw: {
    handlers: [
      rest.get(`${BACKEND_URL}companies/119`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(PAY_AVG_NULL));
      }),
    ],
  },
};

export const 평균초봉_NULL = Template.bind({});
평균초봉_NULL.parameters = {
  nextRouter: { query: { companyId: 119 } },
  msw: {
    handlers: [
      rest.get(`${BACKEND_URL}companies/119`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(PAY_START_NULL));
      }),
    ],
  },
};

export const 연봉정보_NULL = Template.bind({});
연봉정보_NULL.parameters = {
  nextRouter: { query: { companyId: 119 } },
  msw: {
    handlers: [
      rest.get(`${BACKEND_URL}companies/119`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(PAY_NULL));
      }),
    ],
  },
};
