import { ComponentStory, ComponentMeta } from "@storybook/react";
import { css } from "@emotion/react";

import { SelectForm } from "@pages/datalab/spec/register/component/selectForm";

export default {
  title: "datalab/spec/register/part/carouselCardPart/Spec7Lang/component/SelectForm",
  component: SelectForm,
  argTypes: {
    value: {
      description: "selectArr에서 선택된 값",
    },
    seleltArr: {
      description: "리스트 데이터 배열값",
    },
    index: {
      description: "react-hook-form useFieldArray 사용시 넘겨줄 index",
    },
    desc: {
      description: "선택된 값이 없을시 안내문구",
    },
    registerObj: {
      description: "react-hook-form register",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "학점을 위한 입력폼 컴포넌트",
  },
} as ComponentMeta<typeof SelectForm>;

const Template: ComponentStory<typeof SelectForm> = (args) => {
  return (
    <div
      css={css`
        width: 200px;
        display: flex;
        justify-content: center;
        margin: 5rem auto 0;
      `}
    >
      <SelectForm {...args} />
    </div>
  );
};

export const 일반 = Template.bind({});

일반.args = {
  value: "영어",
  selectArr: ["영어", "중국어", "일본어"],
  index: 0,
  desc: "선택해주세요.",
  registerObj: undefined,
};
