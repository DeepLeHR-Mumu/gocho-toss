import { ComponentStory, ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { FactoryCard } from "@component/common/organisms/factoryCard";

export default {
  title: "pages/indexComponent/FactoryCard",
  component: FactoryCard,
} as ComponentMeta<typeof FactoryCard>;

const Template: ComponentStory<typeof FactoryCard> = (args) => {
  const mockedQueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={mockedQueryClient}>
      <FactoryCard {...args} />
    </QueryClientProvider>
  );
};

export const 기본정보 = Template.bind({});
기본정보.args = {
  factoryInfo: {
    factoryName: "희성촉매본공장",
    address: "인천광역시 서구 봉수대로 415 (서인천우체국 사서함 17호)",
    maleNumber: 33,
    femaleNumber: 32,
    product: "생산품 이래옄",
    bus: {
      exists: true,
      desc: "차비 돈으로 준다는데?차비 돈으로 준다는데?차비 돈으로 준다는데?차비 돈으로 준다는데?차비 돈으로 준다는데?차비 돈으로 준다는데?차비 돈으로 준다는데?",
    },
    dormitory: {
      exists: true,
      desc: "기숙사비 돈으로준다 ㅋㅋ기숙사비 돈으로준다 ㅋㅋ기숙사비 돈으로준다 ㅋㅋ기숙사비 돈으로준다 ㅋㅋ기숙사비 돈으로준다 ㅋㅋ기숙사비 돈으로준다 ㅋㅋ기숙사비 돈으로준다 ㅋㅋ",
    },
  },
};
