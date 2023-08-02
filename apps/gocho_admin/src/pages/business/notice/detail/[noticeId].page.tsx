import { ReactElement } from "react";
import { useRouter } from "next/router";
import dayjs from "dayjs";

import { NextPageWithLayout } from "@/types";
import { useNoticeDetail } from "@/api";
import { ErrorScreen, GlobalLayout, LoadingScreen } from "@/component";
import { mainContainer, pageTitle } from "@/style";

import { cssObj } from "./style";

const BusinessNoticeDetail: NextPageWithLayout = () => {
  const router = useRouter();
  const noticeId = Number(router.query.noticeId);

  const { data: noticeData, isLoading, isError } = useNoticeDetail({ noticeId });

  if (!noticeData || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>공지사항 상세 내용</h2>
      <div css={cssObj.flexBox}>
        <div css={cssObj.dataWrapper}>
          <p css={cssObj.dataTitle}>ID</p>
          <p css={cssObj.data}>{noticeData.id}</p>
        </div>
        <div css={cssObj.dataWrapper}>
          <p css={cssObj.dataTitle}>종류</p>
          <p css={cssObj.data}>{noticeData.type}</p>
        </div>
        <div css={cssObj.dataWrapper}>
          <p css={cssObj.dataTitle}>제목</p>
          <p css={cssObj.data}>{noticeData.title}</p>
        </div>
      </div>
      <p css={cssObj.body}>{noticeData.description}</p>

      <div css={cssObj.flexBox}>
        <div css={cssObj.dataWrapper}>
          <p css={cssObj.dataTitle}>작성시간</p>
          <p css={cssObj.data}>{dayjs(noticeData.createdTime).format("YYYY-MM-DD HH:mm")}</p>
        </div>
        <div css={cssObj.dataWrapper}>
          <p css={cssObj.dataTitle}>조회수</p>
          <p css={cssObj.data}>{noticeData.view}</p>
        </div>
      </div>
    </main>
  );
};

BusinessNoticeDetail.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default BusinessNoticeDetail;
