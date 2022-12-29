import { FunctionComponent } from "react";
import { BiRocket } from "react-icons/bi";
import { useRouter } from "next/router";

import { COLORS } from "shared-style/color";

import { INTERNAL_URL } from "@/constants/url";
import { CommonSquareButton } from "@/components/common";

import { cssObj } from "./style";

export const HeaderPart: FunctionComponent = () => {
  const router = useRouter();

  return (
    <section css={cssObj.partContainer}>
      <div>
        <h2 css={cssObj.title}>공고 등록</h2>
        <p>등록된 공고는 검수 이후 바로 업로드 됩니다</p>
      </div>
      <CommonSquareButton
        text="공고 등록하기"
        iconObj={{ Icon: BiRocket, location: "left" }}
        backgroundColor={`${COLORS.GRAY10}`}
        fontColor={`${COLORS.GRAY100}`}
        borderColor={`${COLORS.GRAY10}`}
        onClickHandler={() => {
          router.push({
            pathname: INTERNAL_URL.JD_UPLOAD,
          });
        }}
      />
    </section>
  );
};
