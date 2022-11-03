import { ComponentStory, ComponentMeta } from "@storybook/react";
import { css } from "@emotion/react";

import { RadioForm } from "@pages/datalab/spec/register/component";

export default {
  title: "datalab/spec/register/part/carouselCardPart/common/component/RadioForm",
  component: RadioForm,
  argTypes: {
    itemArr: {
      description: "해당 폼을 위한 데이터 배열",
    },
    backgroundStyle: {
      description: "배경색상, 보더색상 스타일",
    },
    registerObj: {
      description: "react-hook-form register",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "양자택일 radio 선택폼",
  },
} as ComponentMeta<typeof RadioForm>;

const Template: ComponentStory<typeof RadioForm> = (args) => {
  return (
    <div
      css={css`
        width: 300px;
        margin: 5rem auto;
      `}
    >
      <RadioForm {...args} />
    </div>
  );
};

export const 일반 = Template.bind({});
일반.args = {
  itemArr: ["남", "여"],
  registerObj: undefined,
  backgroundStyle: "blue01",
};
