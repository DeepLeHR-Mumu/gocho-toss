import { ComponentStory, ComponentMeta } from "@storybook/react";
import { css } from "@emotion/react";

import { BestUserList } from "@pages/index/part/specBestPart/component/bestUserList";

export default {
  title: "메인페이지/specBestPart/BestUserList",
  component: BestUserList,
  argTypes: {
    BestUserList: {
      control: "object",
      description: "props로 전달받은 데이터 배열",
    },
  },
  parameters: {
    componentSubtitle: "메인페이지 - 스펙평가 베스트 9인 유저 리스트 형태",
  },
} as ComponentMeta<typeof BestUserList>;

const Template: ComponentStory<typeof BestUserList> = (args) => {
  return (
    <div css={css``}>
      <BestUserList {...args} />
    </div>
  );
};

export const 기본 = Template.bind({});

기본.args = {};
