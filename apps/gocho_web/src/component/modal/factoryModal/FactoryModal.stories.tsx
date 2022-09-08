import { useEffect } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

import { useModal } from "@recoil/hook/modal";
import { FactoryModal } from ".";

export default {
  title: "공용 컴포넌트/modal/FactoryModal",
  component: FactoryModal,
  parameters: {
    backgrounds: {
      default: "dark",
    },
    componentSubtitle: "???",
  },
} as ComponentMeta<typeof FactoryModal>;

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const ModalComponent = () => {
  const { setCurrentModal, currentModal } = useModal();

  useEffect(() => {
    const factoryObj = {
      id: 1,
      companyId: 110,
      place1: "인천광역시",
      place2: "서구",
      address: "인천광역시 서구 백범로 680 (가좌동)",
      maleNumber: 160,
      femaleNumber: 51,
      product: "폴리우레탄,정밀화학제품",
      bus: {
        exists: false,
        desc: "버스는 대구에서 서울까지 매일 운영합니다.",
      },
      dormitory: {
        exists: false,
        desc: "기숙사는 하루숙박비 10만원을 받습니다.",
      },
      companyName: "(주)하이브로텍스트 보광스틸",
      factoryName: "인천광역시 1공장",
    };

    setCurrentModal("factoryModal", factoryObj);
  }, [setCurrentModal]);

  return currentModal?.modalContentObj ? <FactoryModal /> : null;
};

const Template: ComponentStory<typeof FactoryModal> = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={mockedQueryClient}>
        <ModalComponent />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const 기본 = Template.bind({});
