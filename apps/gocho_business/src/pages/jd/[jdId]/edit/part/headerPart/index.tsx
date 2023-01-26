import { FunctionComponent } from "react";
import { BiRocket } from "react-icons/bi";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { COLORS } from "shared-style/color";
import { SharedButton } from "shared-ui/business/sharedButton";

import { useDeleteJd } from "@/apis/jd/useDeleteJd";
import { useEndJd } from "@/apis/jd/useEndJd";
import { jdArrKeyObj } from "@/apis/jd/useJdArr/type";

import { cssObj } from "./style";
import { HeaderPartProps } from "./type";

export const HeaderPart: FunctionComponent<HeaderPartProps> = ({ jdData }) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: deleteJdMutation } = useDeleteJd();
  const { mutate: endJdMutation } = useEndJd();

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
      <div css={cssObj.headerContainer}>
        <div>
          <h2 css={cssObj.title}>공고 수정</h2>
          <p css={cssObj.desc}>검수중인 공고를 수정하면 승인기간이 늘어날 수 있습니다</p>
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
      {jdData.status.name.includes("반려") && (
        <div css={cssObj.rejectWrapper}>
          <h2 css={cssObj.rejectTitle}>반려 사유</h2>
          <p css={cssObj.rejectReason}>{jdData.status.reason}</p>
        </div>
      )}
    </section>
  );
};
