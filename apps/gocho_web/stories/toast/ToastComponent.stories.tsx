import { ComponentStory, ComponentMeta } from "@storybook/react";
import { css } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { useEffect } from "react";

import { useToast } from "@recoil/hook/toast";

import { ToastComponent } from "@component/toast/toastComponent";

export default {
  title: "공용 컴포넌트/toast/ToastComponent",
  component: ToastComponent,
  parameters: {
    componentSubtitle: "특정 메세지 알림 토스트 컴포넌트 createPortal사용",
  },
} as ComponentMeta<typeof ToastComponent>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const MockedComponent = () => {
  const { setCurrentToast, closeToast, currentToast } = useToast();

  useEffect(() => {
    setTimeout(() => {
      closeToast();
    }, 3500);
  }, [closeToast, setCurrentToast]);

  return (
    <>
      <div
        css={css`
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          width: 100%;
        `}
      >
        <button
          css={css`
            margin: 0 1rem 1rem 0;
          `}
          type="button"
          onClick={() => {
            return setCurrentToast("님 반갑습니다.", "$userNickname");
          }}
        >
          로그인 완료
        </button>
        <button
          css={css`
            margin: 0 1rem 1rem 0;
          `}
          type="button"
          onClick={() => {
            return setCurrentToast("님 환영합니다.", "$userNickname");
          }}
        >
          회원가입 완료
        </button>
        <button
          css={css`
            margin: 0 1rem 1rem 0;
          `}
          type="button"
          onClick={() => {
            return setCurrentToast("비밀번호가 변경되었습니다.");
          }}
        >
          비밀번호 변경
        </button>
        <button
          css={css`
            margin: 0 1rem 1rem 0;
          `}
          type="button"
          onClick={() => {
            return setCurrentToast("계정이 삭제되었습니다.");
          }}
        >
          계정 삭제
        </button>
        <button
          css={css`
            margin: 0 1rem 1rem 0;
          `}
          type="button"
          onClick={() => {
            return setCurrentToast("프로필 사진이 변경되었습니다.");
          }}
        >
          프로필 사진 변경
        </button>
        <button
          css={css`
            margin: 0 1rem 1rem 0;
          `}
          type="button"
          onClick={() => {
            return setCurrentToast("스펙이 등록되었습니다.");
          }}
        >
          스펙등록
        </button>
        <button
          css={css`
            margin: 0 1rem 1rem 0;
          `}
          type="button"
          onClick={() => {
            return setCurrentToast("평가를 완료하였습니다.");
          }}
        >
          평가 완료
        </button>
        <button
          css={css`
            margin: 0 1rem 1rem 0;
          `}
          type="button"
          onClick={() => {
            return setCurrentToast("게시글이 등록되었습니다.");
          }}
        >
          게시글 등록
        </button>
        <button
          css={css`
            margin: 0 1rem 1rem 0;
          `}
          type="button"
          onClick={() => {
            return setCurrentToast("댓글이 등록되었습니다.");
          }}
        >
          댓글 등록
        </button>
        <button
          css={css`
            margin: 0 1rem 1rem 0;
          `}
          type="button"
          onClick={() => {
            return setCurrentToast("My필터가 저장되었습니다");
          }}
        >
          My필터 저장
        </button>
      </div>
      {currentToast && <ToastComponent />}
    </>
  );
};

const Template: ComponentStory<typeof ToastComponent> = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <MockedComponent />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const 기본 = Template.bind({});
