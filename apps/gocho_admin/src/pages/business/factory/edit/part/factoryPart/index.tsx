import { FunctionComponent } from "react";

import { FactoryPartProps } from "./type";
import { cssObj } from "./style";

export const FactoryPart: FunctionComponent<FactoryPartProps> = ({ factory }) => {
  return (
    <section css={cssObj.sectionContainer}>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>공장 이름</strong>
        <p css={cssObj.dataBox}>{factory.name}</p>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>주소</strong>
        <p css={cssObj.dataBox}>{factory.address}</p>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>제품</strong>
        <p css={cssObj.dataBox}>{factory.product}</p>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>직원 수 </strong>
        <div>
          <p css={cssObj.dataBox}>남자: {factory.maleNumber}</p>
          <p css={cssObj.dataBox}>여자: {factory.femaleNumber}</p>
        </div>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>버스</strong>
        <div>
          <p css={cssObj.dataBox}>{factory.bus.exists ? "O" : "X"}</p>
          {factory.bus.desc && <p css={cssObj.dataBox}>{factory.bus.desc}</p>}
        </div>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>기숙사</strong>
        <div>
          <p css={cssObj.dataBox}>{factory.dormitory.exists ? "O" : "X"}</p>
          {factory.dormitory.desc && <p css={cssObj.dataBox}>{factory.dormitory.desc}</p>}
        </div>
      </div>
    </section>
  );
};
