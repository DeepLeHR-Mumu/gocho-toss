import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UniversityGradeForm } from "@pages/datalab/spec/register/component";

export default {
  title: "데이터랩/스펙등록/component/UniversityGradeForm",
  component: UniversityGradeForm,
  argTypes: {
    gradeObj: {
      description: "대학학점 react-hook-form register",
    },
    maxGradeObj: {
      description: "대학 max-학점 react-hook-form register",
    },
    selectArr: {
      description: "4.3, 4.5",
    },
    gradeValue: {
      description: "학점점수 값",
    },
    maxGradeValue: {
      description: "학점 max값",
    },
  },
  parameters: {
    componentSubtitle: "스펙등록 carouselCard University04에 사용되는 대학 학점등록 폼",
  },
} as ComponentMeta<typeof UniversityGradeForm>;

const Template: ComponentStory<typeof UniversityGradeForm> = (args) => {
  return <UniversityGradeForm {...args} />;
};

export const 기입전 = Template.bind({});
기입전.args = {
  gradeValue: undefined,
  maxGradeValue: undefined,
  selectArr: [4.3, 4.5],
  gradeObj: undefined,
  maxGradeObj: undefined,
};

export const 기입후 = Template.bind({});
기입후.args = {
  gradeValue: 2.52,
  maxGradeValue: 4.5,
  selectArr: [4.3, 4.5],
  gradeObj: undefined,
  maxGradeObj: undefined,
};
