import { FunctionComponent } from "react";
import { BiBookmark, BiRocket } from "react-icons/bi";
import { AiOutlineEye, AiOutlineNumber } from "react-icons/ai";
import { FiCalendar } from "react-icons/fi";
import { MdAdsClick } from "react-icons/md";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import dayjs from "dayjs";

import { COLORS } from "shared-style/color";
import { SharedButton } from "shared-ui/business/sharedButton";

import { useDeleteJd } from "@/apis/jd/useDeleteJd";
import { useEndJd } from "@/apis/jd/useEndJd";
import { jdArrKeyObj } from "@/apis/jd/useJdArr/type";
import { CommonInfoBox } from "@/components/common";

import { cssObj } from "./style";
import { HeaderPartProps } from "./type";

export const HeaderPart: FunctionComponent<HeaderPartProps> = ({ jdData }) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: deleteJdMutation } = useDeleteJd();
  const { mutate: endJdMutation } = useEndJd();

  const numberFormat = Intl.NumberFormat("ko-KR", { notation: "compact" });
  const viewData = numberFormat.format(jdData.view);
  const bookmarkData = numberFormat.format(jdData.bookmark);
  const clickData = numberFormat.format(jdData.click);

  const endJdHandler = (id: number) => {
    endJdMutation(
      { jdId: id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(jdArrKeyObj.all);
        },
      }
    );
  };

  return (
    <section css={cssObj.partContainer}>
      <strong css={cssObj.jdTitle}>{jdData.title}</strong>
      <div css={cssObj.jdInfoContainer}>
        <div css={cssObj.infoBox}>
          <AiOutlineNumber />
          <strong css={cssObj.infoTitle}>식별번호</strong>
          <p>{Number(router.query.jdId)}</p>
        </div>
        <div css={cssObj.infoBox}>
          <FiCalendar />
          <strong css={cssObj.infoTitle}>공고등록일</strong>
          <p>{dayjs(jdData.startTime).format("YY.MM.DD HH:mm")}</p>
        </div>
        <div css={cssObj.infoBox}>
          <FiCalendar />
          <strong css={cssObj.infoTitle}>최종수정일</strong>
          <p>{dayjs(jdData.endTime).format("YY.MM.DD HH:mm")}</p>
        </div>
        <CommonInfoBox Icon={AiOutlineEye} infoData={viewData} infoName="조회수" />
        <CommonInfoBox Icon={BiBookmark} infoData={bookmarkData} infoName="북마크" />
        <CommonInfoBox Icon={MdAdsClick} infoData={clickData} infoName="지원 현황" />
      </div>

      <div css={cssObj.headerContainer}>
        <div>
          <h2 css={cssObj.title}>공고 수정</h2>
          <p>검수중인 공고를 수정하면 승인기간이 늘어날 수 있습니다</p>
        </div>
        <div css={cssObj.buttonContainer}>
          <SharedButton
            radius="round"
            fontColor={`${COLORS.BLUE_FIRST40}`}
            borderColor={`${COLORS.BLUE_FIRST40}`}
            backgroundColor={`${COLORS.GRAY100}`}
            size="xLarge"
            text="공고 마감"
            onClickHandler={() => {
              endJdHandler(Number(router.query.jdId));
            }}
            iconObj={{ icon: BiRocket, location: "left" }}
          />
          <SharedButton
            radius="round"
            fontColor={`${COLORS.BLUE_FIRST40}`}
            borderColor={`${COLORS.BLUE_FIRST40}`}
            backgroundColor={`${COLORS.GRAY100}`}
            size="xLarge"
            text="공고 삭제"
            onClickHandler={() => {
              deleteJdMutation({ jdId: Number(router.query.jdId) });
            }}
            iconObj={{ icon: BiRocket, location: "left" }}
          />
          <SharedButton
            radius="round"
            fontColor={`${COLORS.GRAY100}`}
            backgroundColor={`${COLORS.BLUE_FIRST40}`}
            size="xLarge"
            text="수정 완료"
            onClickHandler="submit"
            iconObj={{ icon: BiRocket, location: "left" }}
          />
        </div>
      </div>
    </section>
  );
};
