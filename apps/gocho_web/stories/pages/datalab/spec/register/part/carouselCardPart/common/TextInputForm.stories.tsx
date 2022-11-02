import { ComponentStory, ComponentMeta } from "@storybook/react";
import { css } from "@emotion/react";

import { TextInputForm } from "@pages/datalab/spec/register/component";

export default {
  title: "datalab/spec/register/part/carouselCardPart/common/component/TextInputForm",
  component: TextInputForm,
  argTypes: {
    placeholder: {
      description: "폼의 placeholder를 위한 글",
    },
    activeBorderStyle: {
      description: "focus시 보더 및 배경색상의 스타일",
    },
    fullWidth: {
      description: "width를 100%를 원한다면 ture, 필요없을시 기본값 false",
    },
    minWidth: {
      description: "min-width를 주기위함, 단위는 rem으로 고정, 필요없을시 기본값 auto",
    },
    registerObj: {
      description: "react-hook-form register",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "일반 텍스트 기입폼",
  },
} as ComponentMeta<typeof TextInputForm>;

const Template: ComponentStory<typeof TextInputForm> = (args) => {
  return (
    <div
      css={css`
        margin: 5rem auto;
        display: flex;
        justify-content: center;
        width: 300px;
      `}
    >
      <TextInputForm {...args} />
    </div>
  );
};

export const 일반 = Template.bind({});
일반.args = {
  placeholder: "입력칸",
  activeBorderStyle: "gray",
  registerObj: undefined,
  fullWidth: true,
  minWidth: "auto",
  maxLength: 10,
};
