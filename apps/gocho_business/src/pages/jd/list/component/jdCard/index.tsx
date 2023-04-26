import { FunctionComponent, useRef } from "react";
import { AiOutlineEye, AiOutlineNumber, AiOutlinePause } from "react-icons/ai";
import { BiBookmark, BiMinus } from "react-icons/bi";
import { FiUser, FiCalendar, FiEdit } from "react-icons/fi";
import { MdAdsClick } from "react-icons/md";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import dayjs from "dayjs";

import { COLORS } from "shared-style/color";
import { SharedButton } from "shared-ui/business/sharedButton";

import { useToast } from "@/globalStates";
import { jdDeleteButtonEvent, jdCloseButtonEvent, jdEditButtonEvent, jdCloseDoneEvent, jdDeleteDoneEvent } from "@/ga";
import { CommonInfoBox, CommonStatusChip } from "@/components";
import { INTERNAL_URL } from "@/constants";
import { useEndJd, useDeleteJd, jdArrKeyObj } from "@/apis";

import { JD_MESSAGE_OBJ } from "./constant";
import { cssObj } from "./style";
import { JdCardProps } from "./type";

export const JdCard: FunctionComponent<JdCardProps> = ({ jd }) => {
  const isDeleteLoading = useRef(false);
  const isEndLoading = useRef(false);

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
    if (isEndLoading.current) return;
    isEndLoading.current = true;

    jdCloseButtonEvent(id);
    if (window.confirm(JD_MESSAGE_OBJ.END)) {
      endJdMutation(
        { jdId: id },
        {
          onSuccess: () => {
            setToast("마감되었습니다");
            jdCloseDoneEvent(id);
            queryClient.invalidateQueries(jdArrKeyObj.all);
          },

          onSettled: () => {
            isEndLoading.current = false;
          },
        }
      );
    }
  };

  const deleteJdHandler = (id: number) => {
    if (isDeleteLoading.current) return;
    isDeleteLoading.current = true;

    jdDeleteButtonEvent(id);
    if (window.confirm(JD_MESSAGE_OBJ.DELETE)) {
      deleteJdMutation(
        { jdId: id },
        {
          onSuccess: () => {
            setToast("삭제되었습니다");
            jdDeleteDoneEvent(id);
            queryClient.invalidateQueries(jdArrKeyObj.all);
          },

          onSettled: () => {
            isDeleteLoading.current = false;
          },
        }
      );
    }
  };

  const isExpired = dayjs(jd.endTime).isBefore(dayjs());

  return (
    <div css={cssObj.cardContainer(isExpired)}>
      <div css={cssObj.topContainer}>
        <div css={cssObj.titleBox}>
          <div>
            <strong css={cssObj.title}>{jd.title}</strong>
            <p css={cssObj.date}>{`${dayjs(jd.startTime).format("YY.MM.DD")}~${dayjs(jd.endTime).format(
              "YY.MM.DD"
            )}`}</p>
            {jd.cut && <p css={cssObj.date}>채용시 마감</p>}
          </div>
          <CommonStatusChip status={jd.status.name} />
        </div>
        <CommonInfoBox Icon={AiOutlineEye} infoData={viewData} infoName="조회수" />
        <CommonInfoBox Icon={BiBookmark} infoData={bookmarkData} infoName="북마크" />
        <CommonInfoBox Icon={MdAdsClick} infoData={clickData} infoName="지원하기 클릭 수" />
        <CommonInfoBox Icon={FiUser} infoData={`${jd.uploader.name} (${jd.uploader.department})`} infoName="등록자" />
      </div>
      <div css={cssObj.bottomContainer}>
        <div css={cssObj.bottomInfoContainer}>
          <div css={cssObj.infoBox}>
            <div css={cssObj.infoIcon}>
              <AiOutlineNumber />
            </div>
            <strong css={cssObj.infoTitle}>식별번호</strong>
            <p css={cssObj.info}>{jd.id}</p>
          </div>
          <div css={cssObj.infoBox}>
            <div css={cssObj.infoIcon}>
              <FiCalendar />
            </div>
            <strong css={cssObj.infoTitle}>공고등록일</strong>
            <p css={cssObj.info}>{dayjs(jd.createdTime).format("YY.MM.DD HH:mm")}</p>
          </div>
          <div css={cssObj.infoBox}>
            <div css={cssObj.infoIcon}>
              <FiCalendar />
            </div>
            <strong css={cssObj.infoTitle}>최종수정일</strong>
            <p css={cssObj.info}>{jd.updatedTime ? dayjs(jd.updatedTime).format("YY.MM.DD HH:mm") : "-"}</p>
          </div>
        </div>
        {jd.uploader.is_mine && !isExpired && (
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
                jdEditButtonEvent(jd.id);
                router.push({
                  pathname: INTERNAL_URL.JD_EDIT(jd.id),
                });
              }}
            />
          </div>
        )}
        {isExpired && <div css={cssObj.inactiveLabel}>마감된 공고입니다</div>}
      </div>
    </div>
  );
};
