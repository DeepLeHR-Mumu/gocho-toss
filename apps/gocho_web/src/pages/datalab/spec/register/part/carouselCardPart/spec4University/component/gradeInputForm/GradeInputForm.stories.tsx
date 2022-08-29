import { ComponentStory, ComponentMeta } from "@storybook/react";
import { css } from "@emotion/react";

import { GradeInputForm } from ".";

export default {
  title:
    "datalab/spec/register/part/carouselCardPart/Spec4University/component/GradeInputForm",
  component: GradeInputForm,
  argTypes: {
    gradeObj: {
      description: "react-hook-form grade(학점 점수) register",
    },
    maxGradeObj: {
      description: "react-hook-form maxGrade(학점만점 점수) register",
    },
    gradeValue: {
      description: "react-hook-form watch의 학점 결과값",
    },
    maxGradeValue: {
      description: "react-hook-form watch의 학점만점기준 결과값",
    },
    selectArr: {
      description: "최대 학점 배열",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "학점을 위한 입력폼 컴포넌트",
  },
} as ComponentMeta<typeof GradeInputForm>;

const Template: ComponentStory<typeof GradeInputForm> = (args) => {
  return (
    <div
      css={css`
        width: 200px;
        display: flex;
        justify-content: center;
        margin: 5rem auto 0;
      `}
    >
      <GradeInputForm {...args} />
    </div>
  );
};

export const 일반 = Template.bind({});

일반.args = {
  gradeValue: 2.5,
  maxGradeValue: undefined,
  selectArr: [4.3, 4.5],
  gradeObj: undefined,
  maxGradeObj: undefined,
};
