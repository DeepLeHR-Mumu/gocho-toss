import { css } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { LoginBox } from "@component/modal/loginModal";

export default {
  title: "공용 컴포넌트/modal/LoginModal",
  component: LoginBox,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "로그인이 수행되는 모달 창, createportal 사용",
  },
} as ComponentMeta<typeof LoginBox>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const Template: ComponentStory<typeof LoginBox> = (args) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <div
          css={css`
            position: relative;
            height: 50rem;
          `}
        >
          <LoginBox {...args} />
        </div>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const 홈버튼 = Template.bind({});
홈버튼.args = { button: "home" };

export const 닫기버튼 = Template.bind({});
닫기버튼.args = { button: "close" };
