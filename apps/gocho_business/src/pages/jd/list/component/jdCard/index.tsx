import { FunctionComponent } from "react";
import { AiOutlineEye, AiOutlineNumber, AiOutlinePause } from "react-icons/ai";
import { BiBookmark, BiMinus } from "react-icons/bi";
import { FiUser, FiCalendar, FiEdit } from "react-icons/fi";
import { MdAdsClick } from "react-icons/md";
import { useRouter } from "next/router";

import { COLORS } from "shared-style/color";

import { CommonInfoBox, CommonRoundButton, CommonStatusChip } from "@/components/common";
import { INTERNAL_URL } from "@/constants";
import { cssObj } from "./style";

export const JdCard: FunctionComponent = () => {
  const router = useRouter();

  return (
    <div css={cssObj.cardContainer}>
      <div css={cssObj.topContainer}>
        <div css={cssObj.titleBox}>
          <div>
            <CommonInfoBox Icon={FiCalendar} infoData="21.11.25 ~ 23.01.30" infoName="제품검수/재고관리 사원 채용" />
            <p>채용시 마감</p>
          </div>
          <CommonStatusChip status="검수중" />
        </div>
        <CommonInfoBox Icon={AiOutlineEye} infoData="1000" infoName="조회수" />
        <CommonInfoBox Icon={BiBookmark} infoData="1000" infoName="북마크" />
        <CommonInfoBox Icon={MdAdsClick} infoData="1000" infoName="지원 현황" />
        <CommonInfoBox Icon={FiUser} infoData="박아무개 (경남 박팀장)" infoName="등록자" />
      </div>
      <div css={cssObj.bottomContainer}>
        <div css={cssObj.bottomInfoContainer}>
          <div css={cssObj.infoBox}>
            <AiOutlineNumber />
            <strong css={cssObj.infoTitle}>식별번호</strong>
            <p>9724</p>
          </div>
          <div css={cssObj.infoBox}>
            <FiCalendar />
            <strong css={cssObj.infoTitle}>공고등록일</strong>
            <p>21.11.13 13:20 </p>
          </div>
          <div css={cssObj.infoBox}>
            <FiCalendar />
            <strong css={cssObj.infoTitle}>최종수정일</strong>
            <p>21.11.29 21:34 </p>
          </div>
        </div>
        <div css={cssObj.buttonContainer}>
          <CommonRoundButton
            text="공고마감"
            Icon={AiOutlinePause}
            backgoundColor={COLORS.GRAY80}
            onClickHandler={() => {
              router.push({
                pathname: INTERNAL_URL.JD_UPLOAD,
              });
            }}
          />
          <CommonRoundButton
            text="공고삭제"
            Icon={BiMinus}
            backgoundColor={COLORS.GRAY80}
            onClickHandler={() => {
              router.push({
                pathname: INTERNAL_URL.JD_UPLOAD,
              });
            }}
          />
          <CommonRoundButton
            text="공고수정"
            Icon={FiEdit}
            backgoundColor={COLORS.GRAY80}
            onClickHandler={() => {
              router.push({
                pathname: INTERNAL_URL.JD_UPLOAD,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
