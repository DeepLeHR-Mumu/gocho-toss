import { FunctionComponent, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import dayjs from "dayjs";

import { NewSharedButton } from "shared-ui/common/newSharedButton";

import { useToast } from "@/globalStates";
import { jdDeleteButtonEvent, jdDeleteDoneEvent, jdEndButtonEvent, jdEndDoneEvent, jdEditButtonEvent } from "@/ga";
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
  const isExpired = dayjs(jd.endTime).isBefore(dayjs());
  const isViewOn = isExpired || jd.status.name === "진행중";
  const isEditOn = jd.uploader.is_mine && !isExpired;
  const isEndOn = jd.uploader.is_mine && !isExpired && jd.status.name === "진행중";
  const isCopyOn = jd.uploader.is_mine;
  const isDeleteOn = jd.uploader.is_mine;

  const endJdHandler = (id: number) => {
    if (isEndLoading.current) return;
    isEndLoading.current = true;

    jdEndButtonEvent(id);
    if (window.confirm(JD_MESSAGE_OBJ.END)) {
      endJdMutation(
        { jdId: id },
        {
          onSuccess: () => {
            setToast("마감되었습니다");
            jdEndDoneEvent(id);
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

  const jdDateMaker = () => {
    if (jd.cut) return `${dayjs(jd.startTime).format("YYYY.MM.DD")}~채용 시 마감`;
    if (dayjs(jd.endTime).year() === 9999) return `${dayjs(jd.startTime).format("YYYY.MM.DD")}~상시채용`;
    return `${dayjs(jd.startTime).format("YYYY.MM.DD")}~${dayjs(jd.endTime).format("YYYY.MM.DD")}`;
  };

  return (
    <div css={cssObj.cardContainer}>
      <div css={cssObj.topContainer}>
        <div>
          <CommonStatusChip status={jd.status.name} isExpired={isExpired} />
          <strong css={cssObj.title}>{jd.title}</strong>
          <div css={cssObj.infoContainer}>
            <div css={cssObj.infoBox}>
              <p css={cssObj.info}>식별번호</p>
              <p css={cssObj.info}>{jd.id}</p>
            </div>
            <div css={cssObj.infoBox}>
              <p css={cssObj.info}>{jdDateMaker()}</p>
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
            <p css={cssObj.count(isExpired)}>{numberFormat.format(jd.bookmark)}</p>
          </div>
          <div css={cssObj.viewInfoBox}>
            <p css={cssObj.countName}>지원하기 클릭 수</p>
            <p css={cssObj.count(isExpired)}>{numberFormat.format(jd.click)}</p>
          </div>
          <div css={cssObj.viewInfoBox}>
            <p css={cssObj.countName}>공고 조회수</p>
            <p css={cssObj.count(isExpired)}>{numberFormat.format(jd.view)}</p>
          </div>
        </div>
      </div>
      <div css={cssObj.bottomContainer}>
        <div css={cssObj.bottomInfoContainer}>
          <div css={cssObj.infoBox}>
            <p css={cssObj.info}>담당자</p>
            <div>{jd.uploader.name}</div>
          </div>
        </div>

        <div css={cssObj.buttonContainer}>
          {isViewOn && (
            <a
              href={`https://고초대졸.com/jd/detail/${jd.id}`}
              css={cssObj.linkButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              공고보기
            </a>
          )}
          {isEditOn && (
            <NewSharedButton
              buttonType="outLineGray"
              width={5}
              text="수정"
              onClickHandler={() => {
                jdEditButtonEvent(jd.id);
                router.push({
                  pathname: INTERNAL_URL.JD_EDIT(jd.id),
                });
              }}
            />
          )}
          {isCopyOn && (
            <NewSharedButton
              buttonType="outLineGray"
              width={5}
              text="복사"
              onClickHandler={() => router.push(`${INTERNAL_URL.JD_UPLOAD}?copy=${jd.id}`)}
            />
          )}
          {isEndOn && (
            <NewSharedButton
              buttonType="outLineGray"
              width={5}
              text="마감"
              onClickHandler={() => {
                endJdHandler(jd.id);
              }}
            />
          )}
          {isDeleteOn && (
            <NewSharedButton
              buttonType="outLineGray"
              width={5}
              text="삭제"
              onClickHandler={() => {
                deleteJdHandler(jd.id);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
