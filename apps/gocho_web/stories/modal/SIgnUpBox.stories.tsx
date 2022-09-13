import { css } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { SignUpBox } from "@component/modal/signUpModal";

export default {
  title: "공용 컴포넌트/modal/SignUpModal",
  component: SignUpBox,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "회원가입이 수행되는 모달 창, createportal 사용",
  },
} as ComponentMeta<typeof SignUpBox>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const Template: ComponentStory<typeof SignUpBox> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <div
          css={css`
            position: relative;
            height: 50rem;
          `}
        >
          <SignUpBox {...args} />
        </div>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const 기본 = Template.bind({});
