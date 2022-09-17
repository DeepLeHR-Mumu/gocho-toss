import { css } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FiCheck } from "react-icons/fi";

import { COLORS } from "shared-style/color";

import { LinkButton } from "shared-ui/pages/common/atom/button/linkButton";

export default {
  title: "공용 컴포넌트/common/atom/LinkButton",
  component: LinkButton,
  argTypes: {
    text: { description: "버튼에 표시되는 글자" },
    variant: { description: "버튼의 변형 형태 지정" },
    iconObj: {
      description:
        "버튼 icon 설정을 위한 객체 - size는 rem단위, icon은 추가하고자 하는 아이콘 컴포넌트, color는 COLROS 상수로만 가능",
    },
    linkTo: { description: "버튼 클릭 시 이동되는 href" },
  },
  parameters: {
    componentSubtitle: "메인페이지에서 전체적으로 사용되는 다른페이지로 이동하는 버튼",
  },
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => {
  return (
    <div
      css={css`
        width: 40%;
      `}
    >
      <LinkButton {...args} />
    </div>
  );
};

export const filled_링크아이콘 = Template.bind({});
filled_링크아이콘.args = {
  text: "filled button",
  variant: "filled",
  iconObj: { size: 1, color: COLORS.GRAY100, icon: FiCheck, position: "right" },
};
filled_링크아이콘.parameters = {
  componentSubtitle: "BaseButton의 wrapping 컴포넌트 - 링크에 사용되는 버튼 variant",
};
