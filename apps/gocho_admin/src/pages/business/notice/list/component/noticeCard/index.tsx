import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";

import { NewSharedButton } from "shared-ui/common/newSharedButton";

import { useDeleteNotice } from "@/api";
import { INTERNAL_URL } from "@/constant";

import { NoticeCardProps } from "./type";
import { cssObj } from "./style";

export const NoticeCard: FunctionComponent<NoticeCardProps> = ({ notice }) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: deleteNoticeMutate } = useDeleteNotice();

  const deleteNoticeHandler = (noticeId: number) => {
    deleteNoticeMutate(
      { noticeId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries();
        },
      }
    );
  };

  return (
    <li css={cssObj.wrapper}>
      <ul css={cssObj.container}>
        <li css={cssObj.data}>{notice.id}</li>
        <li css={cssObj.data}>{notice.type}</li>
        <li css={cssObj.data}>{notice.title}</li>
        <li css={cssObj.desc}>{notice.description}</li>
        <li css={cssObj.data}>{dayjs(notice.createdTime).format("YYYY-MM-DD")}</li>
        <li css={cssObj.flexBox}>
          <NewSharedButton
            buttonType="fillBlue"
            onClickHandler={() => {
              router.push(INTERNAL_URL.BUSINESS_NOTICE_DETAIL(notice.id));
            }}
            text="상세보기"
            width={6}
          />
          <NewSharedButton buttonType="outLineBlue" onClickHandler="submit" text="수정" width={6} />
          <NewSharedButton
            buttonType="fillRed"
            onClickHandler={() => deleteNoticeHandler(notice.id)}
            text="삭제"
            width={6}
          />
        </li>
      </ul>
    </li>
  );
};
