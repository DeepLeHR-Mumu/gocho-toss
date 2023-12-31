import React, { FunctionComponent } from "react";
import Link from "next/link";

import { useJdArr, useManagerProfile } from "@/apis";
import { INTERNAL_URL } from "@/constants";
import { homeJdListEvent } from "@/ga";
import { JdCard } from "../../component";
import { partCssObj } from "../style";
import { cssObj } from "./style";

export const JdPart: FunctionComponent = () => {
  const { data: userInfoData } = useManagerProfile();
  const { data: jdDataObj } = useJdArr(Boolean(userInfoData), { order: "recent", size: 3 });

  const isAuth = userInfoData?.status.name === "인증완료";

  return (
    <section css={partCssObj.partContainer}>
      <div css={cssObj.titleWrapper}>
        <h3 css={cssObj.partTitle(isAuth)}>등록된 공고 관리</h3>
        <Link
          href={INTERNAL_URL.JD_LIST}
          passHref
          css={cssObj.moreButton}
          onClick={() => {
            homeJdListEvent();
          }}
        >
          더보기 {">"}
        </Link>
      </div>
      <p css={cssObj.contour} />
      <div css={cssObj.cardContainer}>
        {isAuth ? (
          jdDataObj?.jdDataArr.map((jd) => <JdCard key={`BusinessJdCard${jd.id}`} jd={jd} />)
        ) : (
          <p css={cssObj.noAuthJdCard}>기업 인증 후 공고 조희 및 등록이 가능합니다.</p>
        )}
      </div>
    </section>
  );
};
