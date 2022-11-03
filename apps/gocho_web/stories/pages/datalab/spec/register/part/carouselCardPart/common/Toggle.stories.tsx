import { ComponentStory, ComponentMeta } from "@storybook/react";
import { css } from "@emotion/react";

import { ToggleForm } from "@pages/datalab/spec/register/component";

export default {
  title: "datalab/spec/register/part/carouselCardPart/common/component/ToggleForm",
  component: ToggleForm,
  argTypes: {
    yesDesc: {
      description: "true인경우 안내글",
    },
    noDesc: {
      description: "false일때 안내글",
    },
    id: {
      description: "label htmlFor를 위한 아이디",
    },
    value: {
      description: "boolean 형식의 선택값",
    },
    registerObj: {
      description: "react-hook-form register",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "마이페이지 캐로셀 예 아니오 토글버튼",
  },
} as ComponentMeta<typeof ToggleForm>;

const Template: ComponentStory<typeof ToggleForm> = (args) => {
  return (
    <div
      css={css`
        margin: 5rem auto;
        display: flex;
        justify-content: center;
      `}
    >
      <ToggleForm {...args} />
    </div>
  );
};

export const 일반 = Template.bind({});
일반.args = {
  value: true,
  registerObj: undefined,
  yesDesc: "네",
  noDesc: "아니오",
  id: "기본아이디",
};
