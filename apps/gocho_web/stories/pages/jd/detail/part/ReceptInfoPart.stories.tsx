import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { css } from "@emotion/react";

import { ReceptInfoPart } from "@pages/jd/detail/part/receptInfoPart";

export default {
  title: "공고/detail/part/ReceptInfoPart",
  component: ReceptInfoPart,
  argTypes: {
    jobDetailData: {
      description: "공고 접수안내 및 진행절차 사용될 obj",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "디테일 접수안내&진행절차 파트 컴포넌트",
  },
} as ComponentMeta<typeof ReceptInfoPart>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const Template: ComponentStory<typeof ReceptInfoPart> = (args) => {
  return (
    <QueryClientProvider client={mockedQueryClient}>
      <div
        css={css`
          background-color: #fff;
        `}
      >
        <ReceptInfoPart {...args} />
      </div>
    </QueryClientProvider>
  );
};

export const 기본 = Template.bind({});

기본.args = {
  jobDetailData: {
    processArr: ["서류전형", "인성/직무지향성검사", "실무면접", "최종면접", "신체검사"],
    startTime: 1657551599000,
    endTime: 1658329199000,
    applyUrl: "https://naver.com",
    applyRouteArr: [
      "고등학교 생활기록부",
      "대학성적증명서",
      "주민등록등본/초본 (병적사항 기재 포함)",
      "자격증 사본 (소지자에 한함)",
    ],
    etcArr: ["근무일시 : 주 5일 3교대 근무", "임금 : 연봉 3,400만원 이상 (연장수당, 경영성과급 별도)"],
  },
};
