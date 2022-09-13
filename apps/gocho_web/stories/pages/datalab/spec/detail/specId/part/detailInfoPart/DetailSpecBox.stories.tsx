import { css } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DetailSpecBox } from "@pages/datalab/spec/detail/[specId]/part/detailInfoPart/component/detailSpecBox";

export default {
  title: "데이터랩/스펙디테일/part/DetailInfoPart/DetailSpecBox",
  component: DetailSpecBox,
  parameters: {
    componentSubtitle: "스펙 디테일 페이지에 이용자의 스펙이 출력되는 페이지",
  },
} as ComponentMeta<typeof DetailSpecBox>;

const Template: ComponentStory<typeof DetailSpecBox> = (args) => {
  return (
    <div
      css={css`
        width: 50%;
      `}
    >
      <DetailSpecBox {...args} />
    </div>
  );
};

export const 기본 = Template.bind({});
기본.args = { specStr: "테스트 용 스펙" };
