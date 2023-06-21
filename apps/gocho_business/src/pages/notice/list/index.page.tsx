import { NextPage } from "next";
import Link from "next/link";
import dayjs from "dayjs";

import { Spinner } from "shared-ui/common/atom/spinner";

import { EtcSideNav } from "@/components/global/etcSideNav";
import { PageLayout } from "@/components";
import { useNoticeArr } from "@/apis";

import { INTERNAL_URL } from "@/constants";
import { cssObj } from "./style";

const NoticeList: NextPage = () => {
  const { data: noticeArrObj } = useNoticeArr({ order: "recent", size: 15 });

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
            <div>
              {noticeArrObj.noticeDataArr.map((notice) => (
                <Link
                  href={INTERNAL_URL.NOTICE_DETAIL(notice.id)}
                  passHref
                  css={cssObj.infoContainer}
                  key={`mainNotice${notice.id}`}
                >
                  <p css={cssObj.infoType}>{notice.type}</p>
                  <strong css={cssObj.infoTitle}>{notice.title}</strong>
                  <p css={cssObj.infoDate}>{dayjs(notice.createdTime).format("YYYY.MM.DD")}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default NoticeList;
