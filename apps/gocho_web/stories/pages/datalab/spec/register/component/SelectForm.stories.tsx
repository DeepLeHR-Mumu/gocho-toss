import { ComponentStory, ComponentMeta } from "@storybook/react";
import { css } from "@emotion/react";

import { SelectForm } from "@pages/datalab/spec/register/component";

export default {
  title: "데이터랩/스펙등록/component/SelectForm",
  component: SelectForm,
  argTypes: {
    value: {
      description: "클릭 후 출력된 selectArr에서 선택된 value값",
    },
    selectArr: {
      description: "선택될 select 배열값 리스트",
    },
    index: {
      description: "map n번째 표기를 위한 index",
    },
    desc: {
      description: "버튼 설명글",
    },
    registerObj: {
      description: "react-hook-form register",
    },
    showActiveObj: {
      description: "버튼 선택시 selectBox를 활성화 하기 위한 state",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "스펙등록 carouselCard spec7Lang에 사용되는 언어 select 폼",
  },
} as ComponentMeta<typeof SelectForm>;

const Template: ComponentStory<typeof SelectForm> = (args) => {
  return (
    <div
      css={css`
        width: 300px;
        margin: 5rem auto;
      `}
    >
      <SelectForm {...args} />
    </div>
  );
};

export const 클릭전 = Template.bind({});
클릭전.args = {
  value: undefined,
  selectArr: ["영어", "중국어", "일본어"],
  index: 0,
  desc: "언어",
  registerObj: undefined,
  showActiveObj: {
    active: null,
    setActive: () => {
      return null;
    },
    setIsShowSelectForm: () => {
      return true;
    },
  },
};

export const 클릭후 = Template.bind({});
클릭후.args = {
  value: undefined,
  selectArr: ["영어", "중국어", "일본어"],
  index: 0,
  desc: "언어",
  registerObj: undefined,
  showActiveObj: {
    active: "언어_0",
    setActive: () => {
      return null;
    },
    setIsShowSelectForm: () => {
      return true;
    },
  },
};
