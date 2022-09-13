import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DetailInfoPart } from "@pages/datalab/spec/detail/[specId]/part/detailInfoPart";

export default {
  title: "데이터랩/스펙디테일/Part/DetailInfoPart/index",
  component: DetailInfoPart,
  parameters: {
    componentSubtitle: "스펙 디테일 페이지에 이용자의 스펙이 출력되는 페이지",
  },
} as ComponentMeta<typeof DetailInfoPart>;

const Template: ComponentStory<typeof DetailInfoPart> = (args) => {
  return <DetailInfoPart {...args} />;
};

export const 기본 = Template.bind({});
기본.args = {
  detailData: {
    language: [{ language: "타투인어", score: "392점", test: "연간 테스트" }],
    award: "아이스아메리카노 대회 최고상",
    career: "싸이버원 모의해킹팀 2년 4개월",
    etc: "저는 해커입니다. 슈퍼 킹왕짱 해커입니다. 국방부? 백악관?ㅋ 다덤벼ㅋ",
  },
};

export const 없음 = Template.bind({});
없음.args = {
  detailData: {
    language: null,
    award: null,
    career: null,
    etc: null,
  },
};
