import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { rest } from "msw";

import { BACKEND_URL } from "shared-constant/externalURL";

import { BasicInfoPart } from "@pages/companies/part/basicInfoPart";
import { hynixMockData } from "./mockData";

export default {
  title: "pages/indexComponent/BasicInfoPart",
  component: BasicInfoPart,
} as ComponentMeta<typeof BasicInfoPart>;

const Template: ComponentStory<typeof BasicInfoPart> = (args) => {
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
      <BasicInfoPart {...args} />
    </QueryClientProvider>
  );
};

export const 하이닉스 = Template.bind({});
하이닉스.parameters = {
  nextRouter: { query: { companyId: 119 } },
  msw: {
    handlers: [
      rest.get(`${BACKEND_URL}companies/119`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(hynixMockData));
      }),
    ],
  },
};
