import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Footer } from "./index";

export default {
  title: "공용 컴포넌트/global/Footer",
  component: Footer,
  parameters: {
    layout: "padded",
    componentSubtitle: "사이트의 Footer 컴포넌트",
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => {
  return <Footer />;
};

export const 기본 = Template.bind({});
