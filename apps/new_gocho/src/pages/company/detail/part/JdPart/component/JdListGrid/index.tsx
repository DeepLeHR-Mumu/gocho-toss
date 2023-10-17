import { useState } from "react";
import { useRouter } from "next/router";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { useJdArr } from "@/apis/jd";
import { JdRow } from "@/components";
import { commonCssObj } from "@/pages/company/detail/style";

import { BUNDLE_SIZE } from "../../constant";

import { JdListGridProps } from "./type";
import { cssObj } from "./style";

export const JdListGrid = ({ filter }: JdListGridProps) => {
  const router = useRouter();

  const [jdArrSize, setJdArrSize] = useState(BUNDLE_SIZE);

  const { data: jdDataObj } = useJdArr({
    companyId: Number(router.query.companyId),
    order: "recent",
    page: 1,
    filter,
    size: jdArrSize,
  });
  const totalJdNumber = jdDataObj ? jdDataObj.pageResult.totalElements : 0;
  const isTotalJd = totalJdNumber < jdArrSize;

  const seeMore = () => {
    if (isTotalJd) {
      setJdArrSize(BUNDLE_SIZE);
      return;
    }

    setJdArrSize((prev) => prev + BUNDLE_SIZE);
  };

  if (!jdDataObj) {
    return (
      <section css={commonCssObj.box}>
        <div css={cssObj.titleWrapper(filter === "valid")}>
          <h3 css={commonCssObj}>{filter === "valid" ? "채용중 공고" : "만료된 공고"}</h3>
        </div>
        <div css={cssObj.jdWrapper}>
          <p css={cssObj.noJd} />
        </div>
      </section>
    );
  }

  return (
    <section css={commonCssObj.box}>
      <div css={cssObj.titleWrapper(filter === "valid")}>
        <h3 css={commonCssObj}>{filter === "valid" ? "채용중 공고" : "만료된 공고"}</h3>
        <span css={cssObj.jdNumber}>{totalJdNumber} 건</span>
      </div>
      <div css={cssObj.jdWrapper}>
        {totalJdNumber !== 0 ? (
          <>
            {jdDataObj.jdDataArr.map((jd) => (
              <JdRow
                key={jd.id}
                jd={{
                  jdId: jd.id,
                  companyName: jd.company.name,
                  jdTitle: jd.title,
                  dueDate: jd.endTime,
                  bookmarked: jd.isBookmark,
                  cut: jd.cut,
                }}
              />
            ))}
            {totalJdNumber > 6 && (
              <button
                type="button"
                css={cssObj.seeMoreButton}
                onClick={() => {
                  seeMore();
                }}
              >
                {isTotalJd ? (
                  <>
                    접기
                    <FiChevronUp />
                  </>
                ) : (
                  <>
                    더보기 <FiChevronDown />
                  </>
                )}
              </button>
            )}
          </>
        ) : (
          <p css={cssObj.noJd}>현재 채용중인 공고가 없습니다.</p>
        )}
      </div>
    </section>
  );
};
