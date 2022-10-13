import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { AccountSettingBox } from "@component/modal/accountSettingModal";

export default {
  title: "마이페이지/settingPart/AccountSettingBox",
  component: AccountSettingBox,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "마이페이지에서 이용자 정보를 수정하는 모달 창, createportal 사용",
  },
} as ComponentMeta<typeof AccountSettingBox>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const Template: ComponentStory<typeof AccountSettingBox> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <AccountSettingBox {...args} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const 기본 = Template.bind({});
