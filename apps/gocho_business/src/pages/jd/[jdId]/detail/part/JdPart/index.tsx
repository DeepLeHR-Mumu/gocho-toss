import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { FiEdit3, FiTrash2, FiCopy } from "react-icons/fi";

import { Button } from "shared-ui/deeple-ds";

import { useJdDetail, useManagerProfile, useEndJd, jdArrKeyObj, useDeleteJd } from "@/apis";
import { useToast } from "@/globalStates";
import { jdDeleteButtonEvent, jdDeleteDoneEvent, jdEndButtonEvent, jdEndDoneEvent, jdEditButtonEvent } from "@/ga";
import { JD_MESSAGE_OBJ } from "@/pages/jd/list/component/jdCard/constant";
import { INTERNAL_URL } from "@/constants";

import { containerStyle } from "../../style";

import { cssObj } from "./style";

export const JdPart = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setToast } = useToast();

  const { data: userInfoData } = useManagerProfile();

  const { data: jdData } = useJdDetail(Boolean(userInfoData), { id: Number(router.query.jdId) });

  const { mutate: deleteJd, isLoading: isDeleteJdLoading } = useDeleteJd();
  const { mutate: endJd, isLoading: isEndJdLoading } = useEndJd();

  const isExpired = dayjs(jdData?.apply.endTime).isBefore(dayjs());

  const dateFormat = (date: string) => dayjs(date).format("YYYY.MM.DD");

  const editJdHandler = (id: number) => {
    jdEditButtonEvent(id);
    router.push({
      pathname: INTERNAL_URL.JD_EDIT(id),
    });
  };

  const copyJdHandler = (id: number) => router.push(`${INTERNAL_URL.JD_UPLOAD}?copy=${id}`);

  const deleteJdHandler = (id: number) => {
    if (isDeleteJdLoading) return;

    jdDeleteButtonEvent(id);
    if (window.confirm(JD_MESSAGE_OBJ.DELETE)) {
      deleteJd(
        { jdId: id },
        {
          onSuccess: () => {
            setToast("삭제되었습니다");
            jdDeleteDoneEvent(id);
            queryClient.invalidateQueries(jdArrKeyObj.all);
          },
        }
      );
    }
  };

  const endJdHandler = (id: number) => {
    if (isEndJdLoading) {
      return;
    }

    jdEndButtonEvent(id);
    if (window.confirm(JD_MESSAGE_OBJ.END)) {
      endJd(
        { jdId: id },
        {
          onSuccess: () => {
            setToast("마감되었습니다");
            jdEndDoneEvent(id);
            queryClient.invalidateQueries(jdArrKeyObj.all);
          },
        }
      );
    }
  };

  if (!jdData) {
    return <> </>;
  }

  const getApplyRoute = () => {
    if (jdData.apply.route.email) {
      return "이메일";
    }

    if (jdData.apply.route.link) {
      return "외부 링크";
    }

    return jdData.apply.route.isDirect ? "고초대졸닷컴" : "없음";
  };

  return (
    <section css={containerStyle}>
      <div css={cssObj.top}>
        <span css={isExpired ? cssObj.expired : cssObj.onProgress}>{jdData.status.name}</span>
        <span css={cssObj.jdIdLabel}>공고번호</span>
        <span css={cssObj.jdId}>{jdData.id}</span>
      </div>
      <h3 css={cssObj.title}>{jdData.title}</h3>
      <div css={cssObj.jdInfoWrapper}>
        <div css={cssObj.eachInfoWrapper}>
          <span>공고기간</span>
          <span>
            {dateFormat(jdData.apply.startTime)} ~ {jdData.apply.cut ? "상시채용" : dateFormat(jdData.apply.endTime)}
          </span>
        </div>
        <div css={cssObj.verticalDivider} />
        <div css={cssObj.eachInfoWrapper}>
          <span>등록일</span>
          <span>{dateFormat(jdData.createdTime)}</span>
        </div>
        <div css={cssObj.verticalDivider} />
        <div css={cssObj.eachInfoWrapper}>
          <span>지원방법</span>
          <span>{getApplyRoute()}</span>
        </div>
        <div css={cssObj.verticalDivider} />
        <div css={cssObj.eachInfoWrapper}>
          <span>담당자</span>
          <span>{jdData.uploader.name}</span>
        </div>
      </div>
      <div css={cssObj.jdControlContainer}>
        <div css={cssObj.controlWrapper}>
          <button type="button" onClick={() => editJdHandler(jdData.id)}>
            <FiEdit3 />
            수정
          </button>
          <div css={cssObj.verticalDivider} />
          <button type="button" onClick={() => copyJdHandler(jdData.id)}>
            <FiCopy />
            복사
          </button>
          <div css={cssObj.verticalDivider} />
          <button type="button" onClick={() => deleteJdHandler(jdData.id)}>
            <FiTrash2 />
            삭제
          </button>
        </div>
        <Button size="small" color="outlineGray" css={cssObj.customButton} onClick={() => endJdHandler(jdData.id)}>
          마감
        </Button>
        <a href={`https://고초대졸.com/jd/detail/${jdData.id}`} target="_blank" rel="noopener noreferrer">
          <Button size="small" color="outlineGray" css={cssObj.customButton}>
            공고보기
          </Button>
        </a>
      </div>
    </section>
  );
};
