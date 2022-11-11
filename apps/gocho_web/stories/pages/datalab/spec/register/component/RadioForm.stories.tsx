import { ComponentStory, ComponentMeta } from "@storybook/react";
import { css } from "@emotion/react";

import { RadioForm } from "@pages/datalab/spec/register/component";

export default {
  title: "데이터랩/스펙등록/component/RadioForm",
  component: RadioForm,
  argTypes: {
    itemArr: {
      description: "radio 선택 할 배열리스트",
    },
    registerObj: {
      description: "react-hook-form register",
    },
    backgroundStyle: {
      description: "버튼 배경 컬러 스타일",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "radio 선택 폼",
  },
} as ComponentMeta<typeof RadioForm>;

const Template: ComponentStory<typeof RadioForm> = (args) => {
  return (
    <div
      css={css`
        width: 300px;
        margin: 5rem auto 0;
      `}
    >
      <RadioForm {...args} />
    </div>
  );
};

export const 일반 = Template.bind({});
일반.args = {
  registerObj: undefined,
  backgroundStyle: "blue01",
  itemArr: ["남", "여"],
};
