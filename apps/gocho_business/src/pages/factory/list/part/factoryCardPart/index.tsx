import { FunctionComponent } from "react";

import { useFactoryArr } from "@/api/factory/useFactoryArr";

import { nameCSS, wrapper } from "./style";

interface FactoryCardPartProps {
  index: number;
}

export const FactoryCardPart: FunctionComponent<FactoryCardPartProps> = ({ index }) => {
  const { data: factoryDataArr } = useFactoryArr(true);

  return (
    <div css={wrapper}>
      <p css={nameCSS}>{factoryDataArr?.[index].name}</p>
    </div>
  );
};
