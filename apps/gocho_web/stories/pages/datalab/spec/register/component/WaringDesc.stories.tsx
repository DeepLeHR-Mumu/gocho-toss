import { ComponentStory, ComponentMeta } from "@storybook/react";
import { css } from "@emotion/react";

import { WarningDesc } from "@pages/datalab/spec/register/component";

export default {
  title: "데이터랩/스펙등록/component/WarningDesc",
  component: WarningDesc,
  argTypes: {
    msg: {
      description: "react-hook-form 에러 메시지",
    },
  },
  parameters: {
    componentSubtitle: "react-hook-form 사용시 에러 텍스트",
  },
} as ComponentMeta<typeof WarningDesc>;

const Template: ComponentStory<typeof WarningDesc> = (args) => {
  return (
    <div
      css={css`
        margin: 5rem auto;
        display: flex;
        justify-content: center;
      `}
    >
      <WarningDesc {...args} />
    </div>
  );
};

export const 에러메세지 = Template.bind({});
에러메세지.args = {
  msg: "에러 내용입니다.",
};
