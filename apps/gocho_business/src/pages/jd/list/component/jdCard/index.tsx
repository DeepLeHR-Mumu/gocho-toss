import { FunctionComponent } from "react";
import { AiOutlineEye, AiOutlineNumber, AiOutlinePause } from "react-icons/ai";
import { BiBookmark, BiMinus } from "react-icons/bi";
import { FiUser, FiCalendar, FiEdit } from "react-icons/fi";
import { MdAdsClick } from "react-icons/md";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import dayjs from "dayjs";

import { COLORS } from "shared-style/color";
import { SharedButton } from "shared-ui/business/sharedButton";

import { useToast } from "@/globalStates/useToast";
import { CommonInfoBox, CommonStatusChip } from "@/components/common";
import { INTERNAL_URL } from "@/constants/url";
import { useEndJd } from "@/apis/jd/useEndJd";
import { useDeleteJd } from "@/apis/jd/useDeleteJd";
import { jdArrKeyObj } from "@/apis/jd/useJdArr/type";

import { JD_MESSAGE_OBJ } from "./constant";
import { cssObj } from "./style";
import { JdCardProps } from "./type";

export const JdCard: FunctionComponent<JdCardProps> = ({ jd }) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setToast } = useToast();

  const { mutate: deleteJdMutation } = useDeleteJd();
  const { mutate: endJdMutation } = useEndJd();

  const numberFormat = Intl.NumberFormat("ko-KR", { notation: "compact" });
  const viewData = numberFormat.format(jd.view);
  const bookmarkData = numberFormat.format(jd.bookmark);
  const clickData = numberFormat.format(jd.click);

  const endJdHandler = (id: number) => {
    if (window.confirm(JD_MESSAGE_OBJ.END)) {
      endJdMutation(
        { jdId: id },
        {
          onSuccess: () => {
            setToast("마감되었습니다");
            queryClient.invalidateQueries(jdArrKeyObj.all);
          },
        }
      );
    }
  };

  const deleteJdHandler = (id: number) => {
    if (window.confirm(JD_MESSAGE_OBJ.DELETE)) {
      deleteJdMutation(
        { jdId: id },
        {
          onSuccess: () => {
            setToast("삭제되었습니다");
            queryClient.invalidateQueries(jdArrKeyObj.all);
          },
        }
      );
    }
  };

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
            <SharedButton
              radius="circle"
              fontColor={COLORS.GRAY10}
              backgroundColor={COLORS.GRAY80}
              size="medium"
              iconObj={{ icon: AiOutlinePause, location: "left" }}
              text="공고마감"
              onClickHandler={() => {
                endJdHandler(jd.id);
              }}
            />
            <SharedButton
              radius="circle"
              fontColor={COLORS.GRAY10}
              backgroundColor={COLORS.GRAY80}
              size="medium"
              iconObj={{ icon: BiMinus, location: "left" }}
              text="공고삭제"
              onClickHandler={() => {
                deleteJdHandler(jd.id);
              }}
            />
            <SharedButton
              radius="circle"
              fontColor={COLORS.GRAY10}
              backgroundColor={COLORS.GRAY80}
              size="medium"
              iconObj={{ icon: FiEdit, location: "left" }}
              text="공고수정"
              onClickHandler={() => {
                router.push({
                  pathname: INTERNAL_URL.JD_EDIT(jd.id),
                });
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
