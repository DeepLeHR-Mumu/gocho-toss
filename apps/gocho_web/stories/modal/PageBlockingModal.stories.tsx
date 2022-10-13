import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RecoilRoot } from "recoil";

import { PageBlockingModal } from "@component/modal/pageBlockingModal";

export default {
  title: "공용 컴포넌트/modal/PageBlockingModal",
  component: PageBlockingModal,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "스펙등록 페이지를 벗어날 시 나타나는 모달팝업",
  },
} as ComponentMeta<typeof PageBlockingModal>;

const Template: ComponentStory<typeof PageBlockingModal> = (args) => {
  return (
    <RecoilRoot>
      <PageBlockingModal {...args} />
    </RecoilRoot>
  );
};

export const 기본 = Template.bind({});
