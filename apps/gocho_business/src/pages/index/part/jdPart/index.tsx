import React, { FunctionComponent } from "react";
import Link from "next/link";

import { useJdArr } from "@/apis";
import { INTERNAL_URL } from "@/constants";
import { JdCard } from "../../component";
import { partCssObj } from "../style";
import { cssObj } from "./style";

export const JdPart: FunctionComponent = () => {
  const { data: jdDataObj } = useJdArr(true, { order: "recent" });

  return (
    <section css={partCssObj.partContainer}>
      <Link href={INTERNAL_URL.JD_LIST} css={cssObj.partTitle} passHref>
        등록된 공고 관리 {">"}
      </Link>
      <p css={cssObj.contour} />
      {jdDataObj?.jdDataArr.map((jd) => (
        <JdCard key={`BusinessJdCard${jd.id}`} jd={jd} />
      ))}
    </section>
  );
};
