import { FunctionComponent } from "react";

import { useJdArr } from "@/apis/jd/useJdArr";

import { JdCard } from "../../component/jdCard";
import { cssObj } from "./style";

export const ListPart: FunctionComponent = () => {
  const { data: jdDataObj, isSuccess } = useJdArr(true, { order: "recent" });

  if (!isSuccess) {
    return null;
  }

  if (jdDataObj.count === 0) {
    return (
      <section css={cssObj.noDataSectionContainer}>
        <p css={cssObj.noDataDesc}>등록된 공고가 없습니다.</p>
      </section>
    );
  }

  return (
    <section>
      {jdDataObj.jdDataArr.map((jd) => (
        <JdCard key={`BusinessJdCard${jd.id}`} jd={jd} />
      ))}
    </section>
  );
};
