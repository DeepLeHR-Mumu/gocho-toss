import { FunctionComponent } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/router";

import { Spinner } from "shared-ui/common/atom/spinner";
import { SharedButton } from "shared-ui/business/sharedButton";
import { COLORS } from "shared-style/color";

import { useJdArr } from "@/apis";
import { INTERNAL_URL } from "@/constants/url";

import { JdCard } from "../../component/jdCard";
import { cssObj } from "./style";

export const ListPart: FunctionComponent = () => {
  const router = useRouter();

  const { data: jdDataObj } = useJdArr(true, { order: "recent", limit: 0 });

  if (!jdDataObj) {
    return (
      <div css={cssObj.spinner}>
        <Spinner />
      </div>
    );
  }

  if (jdDataObj.count === 0) {
    return (
      <section css={cssObj.noDataSectionContainer}>
        <p css={cssObj.noDataDesc}>등록된 공고가 없습니다.</p>
      </section>
    );
  }

  return (
    <section data-testid="jd/list/listPart">
      {jdDataObj.jdDataArr.map((jd) => (
        <JdCard key={`BusinessJdCard${jd.id}`} jd={jd} />
      ))}
      <div css={cssObj.buttonWrapper}>
        <SharedButton
          radius="round"
          size="medium"
          text="공고 등록하러 가기"
          isFullWidth
          iconObj={{ icon: FiArrowRight, location: "right" }}
          backgroundColor={COLORS.BLUE_NEON30}
          fontColor={COLORS.GRAY100}
          onClickHandler={() => {
            router.push({
              pathname: INTERNAL_URL.JD_UPLOAD,
            });
          }}
        />
      </div>
    </section>
  );
};
