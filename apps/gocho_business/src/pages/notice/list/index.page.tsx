import { useEffect } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import dayjs from "dayjs";

import { Spinner } from "shared-ui/common/atom/spinner";

import { INTERNAL_URL } from "@/constants";
import { EtcSideNav } from "@/components/global/etcSideNav";
import { PageLayout, Pagination } from "@/components";
import { useNoticeArr } from "@/apis";

import { cssObj } from "./style";

const NoticeList: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(router.query).length === 0 && router.isReady) {
      router.replace({ pathname: INTERNAL_URL.NOTICE_LIST, query: { page: 1 } });
    }
  }, [router]);

  const { data: noticeArrObj } = useNoticeArr({ order: "notice", page: Number(router.query.page), size: 15 });

  if (!noticeArrObj) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <PageLayout>
        <div css={cssObj.contentWrapper}>
          <EtcSideNav />
          <div css={cssObj.partContainer}>
            <h2 css={cssObj.pageTitle}>공지사항</h2>
            <p css={cssObj.pageDesc}>
              총
              <span css={cssObj.noticeCount}>
                {Intl.NumberFormat("kr").format(noticeArrObj.pageResult.totalElements)}
              </span>
              건
            </p>
            <div css={cssObj.infoList}>
              {noticeArrObj.noticeDataArr.map((notice) => {
                const isAnnounce = notice.type === "공지";
                return (
                  <Link
                    href={INTERNAL_URL.NOTICE_DETAIL(notice.id)}
                    passHref
                    css={cssObj.infoContainer}
                    key={`notice${notice.id}`}
                  >
                    <p css={cssObj.infoType(isAnnounce)}>{notice.type}</p>
                    <strong css={cssObj.infoTitle(isAnnounce)}>{notice.title}</strong>
                    <p css={cssObj.infoDate}>{dayjs(notice.createdTime).format("YYYY.MM.DD")}</p>
                  </Link>
                );
              })}
            </div>
            <Pagination url={INTERNAL_URL.NOTICE_LIST} totalPage={noticeArrObj.pageResult.totalPages} />
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default NoticeList;
