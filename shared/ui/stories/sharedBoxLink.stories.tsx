import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SharedBoxLink } from "../business/sharedBoxLink";

export default {
  title: "SharedBoxLink",
  component: SharedBoxLink,
  argTypes: {
    colorVariation: { description: "색상 변형 형태" },
    text: { description: "링크 내부에 출력되는 문자열" },
    internalUrl: { description: "서비스 내부로 이동하는 링크 문자열, 해당 프로퍼티 입력 시 externalUrl은 입력 불가" },
    iconLocation: {
      description:
        "서비스 내부에서 이동하는 internalUrl 형태의 버튼 사용 시 화살표 위치 선택, externalUrl 형태의 버튼은 아이콘 위치 고정이므로 사용필요 없음",
    },
    externalUrl: { description: "서비스 외부로 이동하는 링크 문자열, 해당 프로퍼티 입력 시 internalUrl은 입력 불가" },
    isFullWidth: { description: "부모 컨테이너의 사이즈에 맞춰서 길이를 정하는 boolean" },
  },
  parameters: {
    componentSubtitle: "모든 서비스에서 공통으로 사용하는 박스 형태의 링크 버튼",
    docs: {
      description: {
        component:
          "- **모달**은 해당 버튼 사용불가, 모달 오픈 버튼은 SharedButton으로 사용 가능  \n- **프로퍼티 internalUrl, externalUrl** 둘 중 하나만 컴포넌트에 전달가능, 해당 프로퍼티들을 기준으로 외부링크, 내부링크를 구분함  \n<hr/>  \n- **외부 링크**는 항상 외부페이지로만 이동되며 아이콘 위치는 오른쪽 고정\n- **외부 링크**는 항상 새로운 브라우저 윈도우에 열림\n  <hr/>\n- **내부 링크**의 아이콘은 화살표 모양 고정으로 좌, 우 위치만 iconLocation 프로퍼티로 변경할 수 있음",
      },
    },
  },
} as ComponentMeta<typeof SharedBoxLink>;

const Template: ComponentStory<typeof SharedBoxLink> = (args) => <SharedBoxLink {...args} />;

export const 내부링크 = Template.bind({});
내부링크.args = {
  text: "링크 텍스트",
  colorVariation: "blue",
  internalUrl: "/33",
  iconLocation: "left",
  isFullWidth: false,
};

export const 외부링크 = Template.bind({});
외부링크.args = { text: "링크 텍스트", colorVariation: "blue", externalUrl: "/33", isFullWidth: false };
