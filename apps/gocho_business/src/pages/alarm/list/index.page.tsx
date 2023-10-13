import { useEffect } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import dayjs from "dayjs";

import { Spinner } from "shared-ui/common/spinner";
import { INTERNAL_URL } from "@/constants";
import { EtcSideNav } from "@/components/global/etcSideNav";
import { PageLayout, Pagination } from "@/components";
import { useManagerProfile, useReadAlarm, useAlarmArr } from "@/apis";

import { alarmCategoryToLink } from "./util";
import { cssObj } from "./style";

const AlarmList: NextPage = () => {
  const router = useRouter();

  const { data: userInfoData } = useManagerProfile();
  const { data: alarmArrObj } = useAlarmArr({
    managerId: userInfoData?.id,
    page: Number(router.query.page),
    size: 10,
  });
  const { mutate: readAlarmMutate } = useReadAlarm();

  useEffect(() => {
    if (Object.keys(router.query).length === 0 && router.isReady) {
      router.replace({ pathname: INTERNAL_URL.ALARM_LIST, query: { page: 1 } });
    }
  }, [router]);

  useEffect(() => {
    if (alarmArrObj && userInfoData?.id) {
      readAlarmMutate({ managerId: userInfoData.id, category: "all" });
    }
  }, [alarmArrObj, readAlarmMutate, userInfoData?.id]);

  if (!alarmArrObj) {
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
            <h2 css={cssObj.pageTitle}>알림</h2>
            <p css={cssObj.pageDesc}>받은지 90일이 지난 알림은 사라집니다.</p>
            <div css={cssObj.infoList}>
              {alarmArrObj.alarmDataArr.map((alarm) => (
                <Link key={`alarm${alarm.id}`} href={alarmCategoryToLink(alarm.category)}>
                  <div css={cssObj.infoContainer}>
                    <p css={cssObj.infoType}>{alarm.category}</p>
                    <strong css={cssObj.infoTitle}>{alarm.description}</strong>
                    <p css={cssObj.infoDate}>{dayjs(alarm.createdTime).format("YYYY.MM.DD")}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Pagination url={INTERNAL_URL.ALARM_LIST} totalPage={alarmArrObj.pageResult.totalPages} />
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default AlarmList;
