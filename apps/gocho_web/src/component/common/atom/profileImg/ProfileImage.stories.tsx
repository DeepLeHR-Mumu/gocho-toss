import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProfileImg } from ".";

export default {
  title: "공용 컴포넌트/common/atom/ProfileImg",
  component: ProfileImg,
  argTypes: {
    imageStr: { description: "프로필 사진 설정" },
    size: {
      description: "프로필 사진 사이즈 지정",
    },
  },
  parameters: {
    componentSubtitle: "메인페이지에서 전체적으로 사용되는 닫기 버튼",
  },
} as ComponentMeta<typeof ProfileImg>;

const Template: ComponentStory<typeof ProfileImg> = (args) => {
  return <ProfileImg {...args} />;
};

export const Small = Template.bind({});
Small.args = { imageStr: "jobi", size: "S" };
export const Medium = Template.bind({});
Medium.args = { imageStr: "jobi_safety", size: "M" };
export const Big = Template.bind({});
Big.args = { imageStr: "jobi_play", size: "L" };
