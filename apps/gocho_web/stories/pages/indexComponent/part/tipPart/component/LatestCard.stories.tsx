import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LatestCard } from "@pages/indexComponent/part/tipPart/component/latestCard";

export default {
  title: "메인페이지/tipPart/LatestCard",
  component: LatestCard,
  argTypes: {
    id: { control: "number", description: "해당 게시글의 id" },
    title: { control: "text", description: "게시글의 제목" },
    desc: { control: "text", description: "게시글의 설명글" },
    imageSrc: {
      control: "text",
      description: "해당 게시글의 썸네일이미지 주소",
    },
  },
  parameters: {
    componentSubtitle: "메인페이지 - 꿀팁 리스트 하단 최신 꿀팁리스트의 카드형태",
  },
} as ComponentMeta<typeof LatestCard>;

const Template: ComponentStory<typeof LatestCard> = (args) => {
  return <LatestCard {...args} />;
};

// 출력할 Variables 지정
export const 기본 = Template.bind({});

기본.args = {
  tipData: {
    id: 1,
    title: "제목입니다.",
    description: "설명입니다.",
    thumbnailSrc: "https://d2nnzfahmszi6w.cloudfront.net/tips/9/1.png",
  },
};
