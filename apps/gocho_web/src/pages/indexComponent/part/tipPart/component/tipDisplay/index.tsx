import { FunctionComponent, useState } from "react";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { useTipDetail } from "shared-api/tip";
import { COMMUNITY_TIPS_LIST_URL } from "@constant/internalURL";
import { LinkButton } from "shared-ui/pages/common/atom/button";

import { TipDisplaySkeleton } from "../tipDisplaySkeleton";
import {
  tipDisplayWrapper,
  tipFadeContainer,
  currentTipContainer,
  buttonCSSCreator,
  tipImageBox,
  fadeImageCSS,
  tagArrCSS,
  currentTipTitle,
  currentTipDesc,
} from "./style";
import { TipDisplayProps } from "./type";

export const TipDisplay: FunctionComponent<TipDisplayProps> = ({ id }) => {
  const [currentId, setCurrentId] = useState(id);
  const { data: tipDetailData, isLoading } = useTipDetail({ id: currentId });

  if (!tipDetailData || isLoading) {
    return <TipDisplaySkeleton />;
  }

  const handlePrevTipId = () => {
    // LATER if setCurrentId 하나로 통일 가능함 -> 의미없는 return 제거 가능
    if (currentId >= id) {
      return;
    }
    setCurrentId((prev) => {
      return prev + 1;
    });
  };

  const handleNextTipId = () => {
    // LATER if setCurrentId 하나로 통일 가능함 -> 의미없는 return 제거 가능
    if (currentId <= 1) {
      return;
    }
    setCurrentId((prev) => {
      return prev - 1;
    });
  };

  return (
    <article css={tipDisplayWrapper}>
      <div css={tipFadeContainer}>
        <button
          type="button"
          // LATER - 아래와 같은 주석이 필요한 함수는 잘못된 함수, 방식 지양
          // 파라메타 ("좌우정렬, 최초 게시물의 board_id, 변경될때마다 현재 사용중인 id")
          // LATER 이해가 어려운 CSS 함수 지양
          css={buttonCSSCreator("left", id, currentId)}
          onClick={handlePrevTipId}
          aria-label="이전 꿀팁 확인하기"
        >
          <BsChevronLeft size={20} />
        </button>
        <div css={tipImageBox}>
          <div css={fadeImageCSS}>
            <Image
              src={tipDetailData.thumbnailSrc}
              alt={tipDetailData.title}
              layout="fill"
              objectFit="cover"
              draggable="false"
              loading="eager"
            />
          </div>
        </div>
        <button
          type="button"
          // LATER 이해가 어려운 CSS 함수 지양
          css={buttonCSSCreator("right", 1, currentId)}
          onClick={handleNextTipId}
          aria-label="다음 꿀팁 확인하기"
        >
          <BsChevronRight size={20} />
        </button>
      </div>

      <div css={currentTipContainer}>
        <ul css={tagArrCSS}>
          {tipDetailData.tag.map((keyword) => {
            return <li key={`${tipDetailData.id}${keyword}`}>{keyword}</li>;
          })}
        </ul>
        <p>
          <strong css={currentTipTitle}>
            {tipDetailData.title.split("-").map((line) => {
              return <span key={line}>{line}</span>;
            })}
          </strong>
        </p>
        <p css={currentTipDesc}>{tipDetailData.description}</p>
        <LinkButton linkTo={COMMUNITY_TIPS_LIST_URL} variant="filled" text="취업꿀팁 더보기" />
      </div>
    </article>
  );
};
