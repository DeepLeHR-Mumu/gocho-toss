import { css } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { PictureEditBox } from ".";

export default {
  title: "마이페이지/settingPart/PictureEditBox",
  component: PictureEditBox,
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle:
      "마이페이지에서 이용자 프로필 사진을 수정하는 모달 창, createportal 사용",
  },
} as ComponentMeta<typeof PictureEditBox>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const Template: ComponentStory<typeof PictureEditBox> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <PictureEditBox {...args} />
        </div>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const 기본 = Template.bind({});
