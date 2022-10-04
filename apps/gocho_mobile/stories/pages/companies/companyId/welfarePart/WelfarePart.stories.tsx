import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { rest } from "msw";

import { BACKEND_URL } from "shared-constant/externalURL";

import { WelfarePart } from "@pages/companies/part/welfarePart";
import { ALL } from "./mockData";
// import { MockingMother } from "../mockingMother";

export default {
  title: "pages/indexComponent/WelfarePart",
  component: WelfarePart,
} as ComponentMeta<typeof WelfarePart>;

const Template: ComponentStory<typeof WelfarePart> = (args) => {
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
      <WelfarePart {...args} />
    </QueryClientProvider>
  );
};

export const 하이닉스 = Template.bind({});
하이닉스.parameters = {
  nextRouter: { query: { companyId: 119 } },
  msw: {
    handlers: [
      rest.get(`${BACKEND_URL}companies/119`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(ALL));
      }),
    ],
  },
};
