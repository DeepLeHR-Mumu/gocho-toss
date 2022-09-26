import { css } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";

export default {
  title: "공용 컴포넌트/common/atom/SkeletonBox",
  component: SkeletonBox,
  parameters: {
    componentSubtitle:
      "전체 사이트에서 API 요청 로딩, 에러 시 표시되는 컴포넌트 - 부모 div에 씌워서 사용(사이즈는 부모를 따라감)",
  },
} as ComponentMeta<typeof SkeletonBox>;

const Template: ComponentStory<typeof SkeletonBox> = (args) => {
  return (
    <div
      css={css`
        width: 20rem;
        height: 5rem;
      `}
    >
      <SkeletonBox {...args} />
    </div>
  );
};

export const 기본 = Template.bind({});
