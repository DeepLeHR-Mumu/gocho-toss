import { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import dayjs from "dayjs";

import { Spinner } from "shared-ui/common/atom/spinner";

import { EtcSideNav } from "@/components/global/etcSideNav";
import { PageLayout } from "@/components";
import { useNoticeDetail, useAddNoticeView } from "@/apis";

import { INTERNAL_URL } from "@/constants";
import { cssObj } from "./style";

const NoticeDetail: NextPage = () => {
  const router = useRouter();
  const { noticeId } = router.query;

  const { data: noticeDataObj } = useNoticeDetail({ noticeId: Number(noticeId) });
  const { mutate: addViewCount } = useAddNoticeView();

  useEffect(() => {
    if (noticeId) {
      addViewCount({ noticeId: Number(noticeId) });
    }
  }, [addViewCount, noticeId]);

  if (!noticeDataObj) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  const { noticeData } = noticeDataObj;
  const nextNotice = noticeDataObj.pageResult.next;
  const prevNotice = noticeDataObj.pageResult.prev;

  return (
    <div>
      <PageLayout>
        <div css={cssObj.contentWrapper}>
          <EtcSideNav />
          <div css={cssObj.partContainer}>
            <p css={cssObj.label}>공지사항</p>
            <h2 css={cssObj.title}>{noticeData.title}</h2>
            <div css={cssObj.infoContainer}>
              <p>등록일 {dayjs(noticeData.createdTime).format("YYYY.MM.DD")}</p>
              <p>조회수 {noticeData.view}</p>
            </div>
            <p css={cssObj.body}>{noticeData.description}</p>
            {nextNotice && (
              <Link css={cssObj.relatedNotice} href={INTERNAL_URL.NOTICE_DETAIL(nextNotice.id)}>
                <p css={cssObj.relatedLabel}>다음글</p>
                <strong css={cssObj.relatedTitle}>{nextNotice.title}</strong>
                <p css={cssObj.relatedDate}>{dayjs(nextNotice.createdTime).format("YYYY.MM.DD")}</p>
              </Link>
            )}
            {prevNotice && (
              <Link css={cssObj.relatedNotice} href={INTERNAL_URL.NOTICE_DETAIL(prevNotice.id)}>
                <p css={cssObj.relatedLabel}>이전글</p>
                <strong css={cssObj.relatedTitle}>{prevNotice.title}</strong>
                <p css={cssObj.relatedDate}>{dayjs(prevNotice.createdTime).format("YYYY.MM.DD")}</p>
              </Link>
            )}
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default NoticeDetail;
