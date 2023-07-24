import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";

import { INTERNAL_URL } from "@/constants";
import homeJdUpload from "@/public/image/home_jdUpload_button.svg";

import { cssObj } from "./style";

export const ButtonPart: FunctionComponent = () => (
  <section css={cssObj.partContainer}>
    <Link css={cssObj.linkButton("blue")} passHref href={INTERNAL_URL.JD_UPLOAD}>
      <h3 css={cssObj.uploadTitle("white")}>공고 등록하기</h3>
      <p css={cssObj.helpSubtitle("white")}>
        새로운 공고를 등록하여
        <br />
        뛰어난 인재를 채용해 보세요!
      </p>
      <div css={cssObj.jdUploadImageBox}>
        <Image src={homeJdUpload} alt="공고 등록하기 버튼" fill />
      </div>
    </Link>
    <Link css={cssObj.linkButton("white")} passHref href={INTERNAL_URL.HELP}>
      <h3 css={cssObj.uploadTitle("blue")}>고객센터</h3>
      <p css={cssObj.helpSubtitle("blue")}>고초대졸닷컴 내 광고 및 기타사항 문의</p>
      <p css={cssObj.helpDesc}>운영시간 평일 10:00-15:00시 (주말 및 공휴일 휴무)</p>
    </Link>
  </section>
);
