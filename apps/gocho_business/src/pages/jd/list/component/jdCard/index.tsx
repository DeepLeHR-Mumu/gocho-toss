import { FunctionComponent, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import dayjs from "dayjs";

import { NEWCOLORS } from "shared-style/color";
import { SharedButton } from "shared-ui/business/sharedButton";

import { useToast } from "@/globalStates";
import { jdDeleteButtonEvent, jdCloseButtonEvent, jdEditButtonEvent, jdCloseDoneEvent, jdDeleteDoneEvent } from "@/ga";
import { CommonStatusChip } from "@/components";
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
    <div css={cssObj.cardContainer}>
      <div css={cssObj.topContainer}>
        <div>
          {/* {jd.status.name} */}
          <CommonStatusChip status={jd.status.name} isExpired={isExpired} />
          <strong css={cssObj.title}>{jd.title}</strong>
          <div>{jd.cut && <p css={cssObj.date}>채용시 마감</p>}</div>
          <div css={cssObj.infoContainer}>
            <div css={cssObj.infoBox}>
              <p css={cssObj.info}>식별번호</p>
              <p css={cssObj.info}>{jd.id}</p>
            </div>
            <div css={cssObj.infoBox}>
              <p css={cssObj.info}>{`${dayjs(jd.startTime).format("YYYY.MM.DD")}~${dayjs(jd.endTime).format(
                "YYYY.MM.DD"
              )}`}</p>
            </div>
            {jd.updatedTime ? (
              <div css={cssObj.infoBox}>
                <p css={cssObj.info}>수정일</p>
                <p css={cssObj.info}>{dayjs(jd.updatedTime).format("YY.MM.DD")}</p>
              </div>
            ) : (
              <div css={cssObj.infoBox}>
                <p css={cssObj.info}>등록일</p>
                <p css={cssObj.info}>{dayjs(jd.createdTime).format("YY.MM.DD")}</p>
              </div>
            )}
          </div>
        </div>
        <div css={cssObj.commonInfoContainer}>
          <div css={cssObj.viewInfoBox}>
            <p css={cssObj.countName}>공고 찜</p>
            <p css={cssObj.count(isExpired)}>{bookmarkData}</p>
          </div>
          <div css={cssObj.viewInfoBox}>
            <p css={cssObj.countName}>지원하기 클릭 수</p>
            <p css={cssObj.count(isExpired)}>{clickData}</p>
          </div>
          <div css={cssObj.viewInfoBox}>
            <p css={cssObj.countName}>공고 조회수</p>
            <p css={cssObj.count(isExpired)}>{viewData}</p>
          </div>
        </div>
      </div>
      <div css={cssObj.bottomContainer}>
        <div css={cssObj.bottomInfoContainer}>
          <p css={cssObj.info}>담당자</p>
          <div>{jd.uploader.name}</div>
        </div>

        <div css={cssObj.buttonContainer}>
          <SharedButton
            radius="round"
            fontColor={NEWCOLORS.BLUEGRAY300}
            backgroundColor={NEWCOLORS.WHITE}
            borderColor={NEWCOLORS.GRAY200}
            size="medium"
            text="공고마감"
            onClickHandler={() => {
              endJdHandler(jd.id);
            }}
          />
          {!isExpired && (
            <SharedButton
              radius="round"
              fontColor={NEWCOLORS.BLUEGRAY300}
              backgroundColor={NEWCOLORS.WHITE}
              borderColor={NEWCOLORS.GRAY200}
              size="medium"
              text="수정"
              onClickHandler={() => {
                jdEditButtonEvent(jd.id);
                router.push({
                  pathname: INTERNAL_URL.JD_EDIT(jd.id),
                });
              }}
            />
          )}
          <SharedButton
            radius="round"
            fontColor={NEWCOLORS.BLUEGRAY300}
            backgroundColor={NEWCOLORS.WHITE}
            borderColor={NEWCOLORS.GRAY200}
            size="medium"
            text="삭제"
            onClickHandler={() => {
              deleteJdHandler(jd.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};
