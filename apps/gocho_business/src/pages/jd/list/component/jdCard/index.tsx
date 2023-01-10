import { FunctionComponent } from "react";
import { AiOutlineEye, AiOutlineNumber, AiOutlinePause } from "react-icons/ai";
import { BiBookmark, BiMinus } from "react-icons/bi";
import { FiUser, FiCalendar, FiEdit } from "react-icons/fi";
import { MdAdsClick } from "react-icons/md";
import { useRouter } from "next/router";
import dayjs from "dayjs";

import { COLORS } from "shared-style/color";

import { CommonInfoBox, CommonRoundButton, CommonStatusChip } from "@/components/common";
import { INTERNAL_URL } from "@/constants/url";

import { cssObj } from "./style";
import { JdCardProps } from "./type";

export const JdCard: FunctionComponent<JdCardProps> = ({ jd }) => {
  const router = useRouter();

  const numberFormat = Intl.NumberFormat("ko-KR", { notation: "compact" });
  const viewData = numberFormat.format(jd.view);
  const bookmarkData = numberFormat.format(jd.bookmark);
  const clickData = numberFormat.format(jd.click);

  return (
    <div css={cssObj.cardContainer}>
      <div css={cssObj.topContainer}>
        <div css={cssObj.titleBox}>
          <div>
            <CommonInfoBox
              Icon={FiCalendar}
              infoData={`${dayjs(jd.startTime).format("YY.MM.DD")}~${dayjs(jd.endTime).format("YY.MM.DD")}`}
              infoName={jd.title}
            />
            {jd.cut && <p>채용시 마감</p>}
          </div>
          <CommonStatusChip status={jd.status.name} />
        </div>
        <CommonInfoBox Icon={AiOutlineEye} infoData={viewData} infoName="조회수" />
        <CommonInfoBox Icon={BiBookmark} infoData={bookmarkData} infoName="북마크" />
        <CommonInfoBox Icon={MdAdsClick} infoData={clickData} infoName="지원 현황" />
        <CommonInfoBox Icon={FiUser} infoData={`${jd.uploader.name} (${jd.uploader.department})`} infoName="등록자" />
      </div>
      <div css={cssObj.bottomContainer}>
        <div css={cssObj.bottomInfoContainer}>
          <div css={cssObj.infoBox}>
            <AiOutlineNumber />
            <strong css={cssObj.infoTitle}>식별번호</strong>
            <p>{jd.id}</p>
          </div>
          <div css={cssObj.infoBox}>
            <FiCalendar />
            <strong css={cssObj.infoTitle}>공고등록일</strong>
            <p>{dayjs(jd.startTime).format("YY.MM.DD HH:mm")}</p>
          </div>
          <div css={cssObj.infoBox}>
            <FiCalendar />
            <strong css={cssObj.infoTitle}>최종수정일</strong>
            <p>{dayjs(jd.endTime).format("YY.MM.DD HH:mm")}</p>
          </div>
        </div>
        {jd.uploader.is_mine && (
          <div css={cssObj.buttonContainer}>
            <CommonRoundButton
              text="공고마감"
              Icon={AiOutlinePause}
              backgroundColor={COLORS.GRAY80}
              onClickHandler={() => {
                router.push({
                  pathname: INTERNAL_URL.JD_UPLOAD,
                });
              }}
            />
            <CommonRoundButton
              text="공고삭제"
              Icon={BiMinus}
              backgroundColor={COLORS.GRAY80}
              onClickHandler={() => {
                router.push({
                  pathname: INTERNAL_URL.JD_UPLOAD,
                });
              }}
            />
            <CommonRoundButton
              text="공고수정"
              Icon={FiEdit}
              backgroundColor={COLORS.GRAY80}
              onClickHandler={() => {
                router.push({
                  pathname: INTERNAL_URL.JD_EDIT(123),
                });
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
