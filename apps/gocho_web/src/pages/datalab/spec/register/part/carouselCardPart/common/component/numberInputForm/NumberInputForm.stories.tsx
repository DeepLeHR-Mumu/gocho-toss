import { ComponentStory, ComponentMeta } from "@storybook/react";
import { css } from "@emotion/react";

import { NumberInputForm } from ".";

export default {
  title:
    "datalab/spec/register/part/carouselCardPart/common/component/NumberInputForm",
  component: NumberInputForm,
  argTypes: {
    firstDesc: {
      description: "기본 정보 내용",
    },
    lastDesc: {
      description: "값에 의한 단위 텍스트",
    },
    id: {
      description: "label + 체크를 위한 id",
    },
    registerObj: {
      description: "react-hook-form register",
    },
    placeholder: {
      description: "기입 폼의 placeholder",
    },
    width: {
      description: "폼의 넗이 기본값은 auto, 숫자입력시 rem단위로 넗이 지정",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "넘버형식의 일수를 위한 폼",
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
  placeholder: "입력칸",
  width: "auto",
};
