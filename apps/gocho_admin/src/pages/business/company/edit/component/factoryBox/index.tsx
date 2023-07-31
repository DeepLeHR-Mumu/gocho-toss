import { FunctionComponent } from "react";

import { cssObj } from "./style";
import { FactoryBoxProps } from "./type";

export const FactoryBox: FunctionComponent<FactoryBoxProps> = ({ factory }) => (
  <div css={cssObj.factoryBox}>
    <strong css={cssObj.title}>{factory.name}</strong>
    <div css={cssObj.dataContainer}>
      <div css={cssObj.dataBox}>
        <p css={cssObj.dataTitle}>ID</p>
        <p>{factory.id}</p>
      </div>
      <div css={cssObj.dataBox}>
        <p css={cssObj.dataTitle}>주소</p>
        <p>{factory.address}</p>
      </div>
      <div css={cssObj.dataBox}>
        <p css={cssObj.dataTitle}>남자 임직원</p>
        <p>{factory.maleNumber}</p>
      </div>
      <div css={cssObj.dataBox}>
        <p css={cssObj.dataTitle}>여자 임직원</p>
        <p>{factory.femaleNumber}</p>
      </div>
      <div css={cssObj.dataBox}>
        <p css={cssObj.dataTitle}>버스 유무</p>
        <p>{factory.bus.exists ? "O" : "X"}</p>
        <p>{factory.bus.desc}</p>
      </div>
      <div css={cssObj.dataBox}>
        <p css={cssObj.dataTitle}>기숙사 유무</p>
        <p>{factory.dormitory.exists ? "O" : "X"}</p>
        <p>{factory.dormitory.desc}</p>
      </div>
    </div>
  </div>
);
