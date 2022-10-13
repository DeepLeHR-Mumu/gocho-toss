import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Ref } from "react-hook-form";

import { AccountInput } from "shared-ui/common/atom/accountInput";

export default {
  title: "공용 컴포넌트/common/atom/AccountInput",
  component: AccountInput,
  argTypes: {
    placeholder: {
      description: "아무것도 입력안했을 시 placeholder에 존재하는 문구",
    },
    label: {
      description: "레이블에 표시되는 문구",
    },
  },
  parameters: {
    componentSubtitle: "메인페이지에서 전체적으로 사용되는 닫기 버튼",
  },
} as ComponentMeta<typeof AccountInput>;

const Template: ComponentStory<typeof AccountInput> = (args) => {
  return <AccountInput {...args} />;
};

export const 기본 = Template.bind({});
기본.args = { placeholder: "기본값", label: "레이블" };

export const 에러 = Template.bind({});
에러.args = {
  placeholder: "에러 입력 창",
  label: "에러",
  errorObj: {
    message: "올바른 이메일 형식을 입력해주세요",
    ref: HTMLInputElement as Ref,
    type: "minLength",
  },
};

export const 정상및성공 = Template.bind({});
정상및성공.args = {
  placeholder: "정상 입력 창",
  label: "정상",
  isDirty: true,
};
