import { useRef } from "react";
import { FiBell, FiCheck, FiFileText, FiClock } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { useQueryClient } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import { DropDown } from "shared-ui/deeple-ds";
import { getCommunityDateFormat } from "shared-util";

import { alarmArrKeyObj } from "@/constants/queryKeyFactory/user/alarmKeyObj";
import { useReadAlarmAll, useReadAlarmOne, useInfiniteAlarmArr } from "@/apis/users";
import { AlarmDef } from "@/apis/users/type/alarm";

import { AlarmProps } from "./type";
import { cssObj } from "./style";

export const Alarm = ({ className, userId }: AlarmProps) => {
  const alarmPage = useRef(1);
  const queryClient = useQueryClient();
  const { data: alarmData, fetchNextPage } = useInfiniteAlarmArr({ userId, size: 5, page: 1 });
  const { mutate: readAlarmAll } = useReadAlarmAll();
  const { mutate: readAlarmOne } = useReadAlarmOne();
  const { ref } = useInView({
    onChange: (inView) => {
      if (inView) {
        alarmPage.current += 1;

        if (alarmData?.pages[0] && alarmData.pages[0].page_result.total_pages >= alarmPage.current) {
          fetchNextPage({ pageParam: alarmPage.current });
        }
      }
    },
  });

  const getIconForType = (type: AlarmDef["type"]) => {
    switch (type) {
      case "information":
        return <FiFileText />;
      case "urgency":
        return <FiClock />;
      case "notification":
      default:
        return <AiOutlineMessage />;
    }
  };

  const flattedAlarmArr = alarmData?.pages.map((page) => page.data).flat();

  return (
    <DropDown
      customTitle={
        <button type="button">
          <FiBell className={className} />
        </button>
      }
      menu={{
        width: 400,
        header: {
          content: (
            <button
              type="button"
              css={cssObj.menuHeader}
              onClick={() => {
                readAlarmAll(
                  { userId, category: "all" },
                  {
                    onSuccess: () => {
                      queryClient.invalidateQueries(alarmArrKeyObj.all);
                    },
                  }
                );
              }}
            >
              <FiCheck />
              <span>모두 읽음 표시</span>
            </button>
          ),
        },
        optionContainer: { css: cssObj.alarmContainer },
        options:
          flattedAlarmArr?.length === 0
            ? [
                {
                  content: (
                    <div css={cssObj.menuNoContent}>
                      <p>알림 내역이 없습니다.</p>
                    </div>
                  ),
                },
              ]
            : flattedAlarmArr?.map((alarm, index) => ({
                content: (
                  <div css={cssObj.menuContent(alarm.is_read)} ref={index === flattedAlarmArr.length - 1 ? ref : null}>
                    <strong>
                      {getIconForType(alarm.type)}
                      <span>{alarm.title}</span>
                    </strong>
                    <p>{alarm.description}</p>
                    <span>{getCommunityDateFormat(alarm.created_time)}</span>
                  </div>
                ),
                onClick: () => {
                  if (!alarm.is_read) {
                    readAlarmOne(
                      { userId, alarmId: alarm.id },
                      {
                        onSuccess: () => {
                          queryClient.invalidateQueries(alarmArrKeyObj.all);
                        },
                      }
                    );
                  }
                },
                additionalButtonCss: cssObj.dropDownMenuWrapper,
              })),
      }}
      menuConfig={{ flexibleHeight: true }}
    />
  );
};
