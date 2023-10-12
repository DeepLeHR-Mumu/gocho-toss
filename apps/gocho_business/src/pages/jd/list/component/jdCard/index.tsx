import { FunctionComponent, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import { FiEdit3, FiTrash2, FiCopy } from "react-icons/fi";
import Link from "next/link";

import { NewSharedButton } from "shared-ui/common/newSharedButton";
import { Button } from "shared-ui/deeple-ds";

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
          <div css={cssObj.verticalBorder} />
          <div css={cssObj.viewInfoBox}>
            <p css={cssObj.countName}>전체 지원자</p>
            {/** TODO click 말고 다른 값으로 변경될 예정 */}
            <p css={cssObj.count(isExpired)}>{numberFormat.format(jd.click)}</p>
          </div>
          <div css={cssObj.verticalBorder} />
          <div css={cssObj.viewInfoBox}>
            <p css={cssObj.countName}>미열람</p>
            {/** TODO view 말고 다른 값으로 변경될 예정 */}
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
          {isEditOn && (
            <>
              <button
                type="button"
                css={cssObj.button}
                onClick={() => {
                  jdEditButtonEvent(jd.id);
                  router.push({
                    pathname: INTERNAL_URL.JD_EDIT(jd.id),
                  });
                }}
              >
                <FiEdit3 css={cssObj.buttonIcon} />
                수정
              </button>
              <div css={cssObj.verticalBorder} />
            </>
          )}
          {isCopyOn && (
            <>
              <button
                type="button"
                css={cssObj.button}
                onClick={() => router.push(`${INTERNAL_URL.JD_UPLOAD}?copy=${jd.id}`)}
              >
                <FiCopy css={cssObj.buttonIcon} />
                복사
              </button>
              <div css={cssObj.verticalBorder} />
            </>
          )}
          {isDeleteOn && (
            <button type="button" css={cssObj.button} onClick={() => deleteJdHandler(jd.id)}>
              <FiTrash2 css={cssObj.buttonIcon} />
              삭제
            </button>
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
          {isViewOn && (
            // TODO Button 의 outline 색상의 color 속성이 BLUE300 으로 변경 시 css 삭제할 것.
            <Link href={`/jd/${jd.id}/detail`}>
              <Button size="small" color="outline" css={cssObj.tmpColor}>
                지원현황보기
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
