import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RecoilRoot } from "recoil";

import { Spec9Success } from "@pages/datalab/spec/register/part/carouselCardPart/spec9Success";

export default {
  title: "데이터랩/스펙등록/part/carouselCardPart/Spec9Success",
  component: Spec9Success,
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "스펙등록 입력 완료시 완료 캐로셀 카드",
  },
} as ComponentMeta<typeof Spec9Success>;

const Template: ComponentStory<typeof Spec9Success> = (args) => {
  return (
    <RecoilRoot>
      <Spec9Success {...args} />
    </RecoilRoot>
  );
};

export const card = Template.bind({});

card.args = {};
