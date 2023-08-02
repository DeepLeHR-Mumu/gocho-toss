import { ReactElement } from "react";

import { NextPageWithLayout } from "@/types";
import { useNoticeArr } from "@/api";

import { LoadingScreen, ErrorScreen, GlobalLayout, Pagination, PageLayout } from "@/component";
import { INTERNAL_URL } from "@/constant";
import { NoticeCard } from "@/pages/business/notice/list/component/noticeCard";
import { cssObj } from "./style";

const BusinessNoticeList: NextPageWithLayout = () => {
  const { data: noticeDataObj, isLoading, isError } = useNoticeArr({});

  if (!noticeDataObj || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main>
      <PageLayout>
        <h2 css={cssObj.title}>공고 목록</h2>
        <section css={cssObj.container}>
          <ul css={cssObj.thead}>
            <li>ID</li>
            <li>종류</li>
            <li>제목</li>
            <li>내용</li>
            <li>작성날짜</li>
          </ul>
          <ul css={cssObj.tbody}>
            {noticeDataObj.noticeDataArr.map((notice) => (
              <NoticeCard key={`noticeCard${notice.id}`} notice={notice} />
            ))}
          </ul>
        </section>
        <Pagination totalPage={noticeDataObj.pageResult.totalPages} url={INTERNAL_URL.BUSINESS_NOTICE_LIST} />
      </PageLayout>
    </main>
  );
};

BusinessNoticeList.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default BusinessNoticeList;
