import { FunctionComponent, useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";

import { INTERNAL_URL } from "@/constants";
import { useAlarmArr, useManagerProfile, useNoticeArr } from "@/apis";
import { alarmCategoryToLink } from "@/pages/alarm/list/util";

import { partCssObj } from "../style";
import { cssObj } from "./style";
import { InfoTypeDef } from "./type";
import { setInfoTypeButton } from "./constant";

export const InfoPart: FunctionComponent = () => {
  const [infoType, setInfoType] = useState<InfoTypeDef>("alarm");
  const isInfoTypeAlarm = infoType === "alarm";

  const { data: userInfoData } = useManagerProfile();
  const { data: noticeArrObj } = useNoticeArr({ order: "recent", size: 3 });
  const { data: alarmArrObj } = useAlarmArr({ managerId: userInfoData?.id, size: 3 });

  return (
    <section css={partCssObj.partContainer}>
      <div css={cssObj.topBar}>
        <div css={cssObj.buttonContainer}>
          {setInfoTypeButton.map((button) => (
            <button
              key={`setInfoType${button.type}`}
              type="button"
              onClick={() => setInfoType(button.type)}
              css={cssObj.infoTypeButton(button.type === infoType)}
            >
              {button.text}
            </button>
          ))}
        </div>
        <Link
          href={isInfoTypeAlarm ? INTERNAL_URL.ALARM_LIST : INTERNAL_URL.NOTICE_LIST}
          passHref
          css={cssObj.moreButton}
        >
          더보기 {">"}
        </Link>
      </div>
      <div css={cssObj.infoList}>
        {infoType === "notice" ? (
          <div>
            {noticeArrObj?.noticeDataArr.map((notice) => (
              <Link
                href={INTERNAL_URL.NOTICE_DETAIL(notice.id)}
                css={cssObj.infoContainer}
                key={`mainNotice${notice.id}`}
              >
                <p css={cssObj.infoType}>{notice.type}</p>
                <strong css={cssObj.infoTitle}>{notice.title}</strong>
                <p css={cssObj.infoDate}>{dayjs(notice.createdTime).format("YYYY.MM.DD")}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div>
            {alarmArrObj?.alarmDataArr.map((alarm) => (
              <div css={cssObj.infoContainer} key={`mainAlarm${alarm.id}`}>
                <p css={cssObj.infoType}>{alarm.category}</p>
                <strong css={cssObj.infoTitle}>
                  <Link href={alarmCategoryToLink(alarm.category)}>{alarm.description}</Link>
                </strong>
                <p css={cssObj.infoDate}>{dayjs(alarm.createdTime).format("YYYY.MM.DD")}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
