import { css } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NotExistingBox } from "@pages/datalab/spec/detail/[specId]/part/component/notExistingBox";

export default {
  title: "데이터랩/스펙디테일/part/component/NotExistingBox",
  component: NotExistingBox,
  parameters: {
    componentSubtitle: "스펙 디테일 페이지에 이용자의 스펙이 출력되는 페이지",
  },
} as ComponentMeta<typeof NotExistingBox>;

const Template: ComponentStory<typeof NotExistingBox> = (args) => {
  return (
    <div
      css={css`
        width: 50%;
      `}
    >
      <NotExistingBox {...args} />
    </div>
  );
};

export const 없음 = Template.bind({});
