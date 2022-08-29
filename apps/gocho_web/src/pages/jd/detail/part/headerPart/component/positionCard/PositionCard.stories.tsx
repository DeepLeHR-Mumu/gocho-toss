import { ComponentStory, ComponentMeta } from "@storybook/react";
import { css } from "@emotion/react";

import { PositionCard } from ".";

export default {
  title: "공고/detail/part/headerPart/component/PositionCard",
  component: PositionCard,
  argTypes: {
    isSkeleton: {
      description: "로딩중 상태",
    },
    position: {
      description: "카드에 사용될 position배열의 단일 obj",
    },
    currentPositionId: {
      description: "선택된 최신의 position Id",
    },
    setCurrentPositionId: {
      description: "선택된 position의 Id를 최신으로 변경해주기위한 setAction",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle:
      "공고 디테일 headerPart에서 채용중인 직무 position 카드 컴포넌트",
  },
} as ComponentMeta<typeof PositionCard>;

const Template: ComponentStory<typeof PositionCard> = (args) => {
  return (
    <div
      css={css`
        width: 780px;
        margin: 4rem auto;
      `}
    >
      <PositionCard {...args} />
    </div>
  );
};

export const 기본 = Template.bind({});

기본.args = {
  position: {
    id: 725,
    requiredExp: {
      type: "무관",
    },
    rotationArr: ["주간"],
    placeArr: ["경상북도", "포항시"],
    possibleEdu: {
      summary: "고졸",
    },
    hireCount: -1,
    task: {
      mainTask: "설비",
    },
    contractType: {
      type: "정규직",
    },
  },
  currentPositionId: 375,
  setCurrentPositionId: () => {
    return undefined;
  },
};

export const 로딩중 = Template.bind({});

로딩중.args = {
  isSkeleton: true,
};
