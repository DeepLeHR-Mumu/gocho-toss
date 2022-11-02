import { ComponentStory, ComponentMeta } from "@storybook/react";
import { css } from "@emotion/react";

import { WarningText } from "@pages/datalab/spec/register/component";

export default {
  title: "datalab/spec/register/part/carouselCardPart/common/component/WarningText",
  component: WarningText,
  argTypes: {
    msg: {
      description: "react-hook-form 에러 메시지",
    },
  },
  parameters: {
    componentSubtitle: "react-hook-form 사용시 에러 텍스트",
  },
} as ComponentMeta<typeof WarningText>;

const Template: ComponentStory<typeof WarningText> = (args) => {
  return (
    <div
      css={css`
        margin: 5rem auto;
        display: flex;
        justify-content: center;
      `}
    >
      <WarningText {...args} />
    </div>
  );
};

export const 일반 = Template.bind({});
일반.args = {
  msg: "에러 내용입니다.",
};
