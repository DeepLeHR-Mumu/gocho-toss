import { ComponentStory, ComponentMeta } from "@storybook/react";
import { css } from "@emotion/react";

import { NumberInputForm } from "@pages/datalab/spec/register/component";

export default {
  title: "데이터랩/스펙등록/component/NumberInputForm",
  component: NumberInputForm,
  argTypes: {
    firstDesc: {
      description: "폼안의 첫 설명글",
    },
    lastDesc: {
      description: "폼안의 마지막 설명글",
    },
    id: {
      description: "label htmlFor 사용을 위한 id",
    },
    registerObj: {
      description: "react-hook-form register",
    },
    placeholder: {
      description: "input placeholder",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "숫자값을 넣는 input 폼",
  },
} as ComponentMeta<typeof NumberInputForm>;

const Template: ComponentStory<typeof NumberInputForm> = (args) => {
  return (
    <div
      css={css`
        width: 300px;
        margin: 5rem auto 0;
      `}
    >
      <NumberInputForm {...args} />
    </div>
  );
};

export const 일반 = Template.bind({});
일반.args = {
  firstDesc: "무단일수",
  lastDesc: "/일",
  id: "id",
  registerObj: undefined,
  placeholder: "?",
};
