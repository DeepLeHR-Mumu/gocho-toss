import { css } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FiCheck } from "react-icons/fi";

import { COLORS } from "shared-style/color";

import { BaseButton } from "shared-ui/common/atom/button/baseButton";

export default {
  title: "공용 컴포넌트/common/atom/BaseButton",
  component: BaseButton,
  argTypes: {
    text: { description: "버튼에 표시되는 글자" },
    variant: { description: "버튼의 변형 형태 지정" },
    buttonClick: { description: "버튼이 클릭될 떄 실행되는 함수" },
    wide: {
      description: "버튼이 부모 객체의 사이즈에 꽉찬 크기로 변경되어야 할 경우 사용하는 값",
    },
    isSubmit: { description: "submit 여부를 지정해주는 값" },
    iconObj: {
      description:
        "버튼 icon 설정을 위한 객체 - size는 rem단위, icon은 추가하고자 하는 아이콘 컴포넌트, color는 COLROS 상수로만 가능",
    },
  },
  parameters: {
    componentSubtitle: "메인페이지에서 전체적으로 사용되는 닫기 버튼",
  },
} as ComponentMeta<typeof BaseButton>;

const Template: ComponentStory<typeof BaseButton> = (args) => {
  return (
    <div
      css={css`
        width: 40%;
      `}
    >
      <BaseButton {...args} />
    </div>
  );
};

export const filled_아이콘오른쪽 = Template.bind({});
filled_아이콘오른쪽.args = {
  text: "filled button",
  variant: "filled",
  iconObj: { size: 1, color: COLORS.GRAY100, icon: FiCheck, position: "right" },
};
filled_아이콘오른쪽.parameters = {
  componentSubtitle: "아이콘이 추가된 filled 버튼",
};

export const filled_아이콘왼쪽 = Template.bind({});
filled_아이콘왼쪽.args = {
  text: "filled button",
  variant: "filled",
  iconObj: { size: 1, color: COLORS.GRAY100, icon: FiCheck, position: "left" },
};
filled_아이콘왼쪽.parameters = {
  componentSubtitle: "아이콘이 추가된 filled 버튼",
};

export const outlined = Template.bind({});
outlined.args = { text: "outlined button", variant: "outlined" };
outlined.parameters = {
  componentSubtitle: "아이콘 없는 outlined 버튼",
};

export const text = Template.bind({});
text.args = { text: "text button", variant: "text" };
text.parameters = {
  componentSubtitle: "아이콘 없는 text 버튼",
};

export const link = Template.bind({});
link.args = { text: "link button", variant: "filled", linkTo: "woeif" };
link.parameters = {
  componentSubtitle: "아이콘 없는 outlined 버튼",
};
