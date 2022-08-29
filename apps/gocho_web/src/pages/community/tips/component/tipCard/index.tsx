import { FunctionComponent } from "react";
import { AiOutlineEye, AiOutlineLike } from "react-icons/ai";
import Image from "next/image";

import { dateConverter } from "@util/date/dateConverter";
import { useModal } from "@recoil/hook/modal";
import { SkeletonBox } from "@component/common/atom/skeletonBox";
import {
  cardContainer,
  tagListCSS,
  tagCSS,
  thumbnailBox,
  contentContainer,
  titleCSS,
  bodyCSS,
  infoContainer,
  infoBox,
  info,
  numInfo,
  tipCardSkeleton,
} from "./style";
import { TipCardProps, TipCardSkeleton } from "./type";

export const TipCard: FunctionComponent<TipCardProps | TipCardSkeleton> = ({
  tipData,
  isSkeleton,
}) => {
  const { setCurrentModal } = useModal();

  if (isSkeleton || typeof tipData === "undefined") {
    return (
      <div css={tipCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const openTipModal = () => {
    setCurrentModal("tipModal", tipData);
  };

  const { year, month, date } = dateConverter(tipData.createdTime);
  return (
    <button type="button" onClick={openTipModal}>
      <article css={cardContainer}>
        <div css={thumbnailBox}>
          <Image
            src={tipData.thumbnailSrc}
            alt={tipData.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div css={contentContainer}>
          <div>
            <div css={tagListCSS}>
              {tipData.tagArr.map((tag: string) => {
                return (
                  <p css={tagCSS} key={tag}>
                    {tag}
                  </p>
                );
              })}
            </div>
            <h2 css={titleCSS}>{tipData.title}</h2>
            <p css={bodyCSS}>{tipData.description}</p>
          </div>
          <div css={infoContainer}>
            <div css={infoBox}>
              <p css={info}>{`${year}/${month}/${date}`}</p>
              <AiOutlineLike />
              <p css={numInfo}>{tipData.likeCount}</p>
              <AiOutlineEye />
              <p css={numInfo}>{tipData.viewCount}</p>
            </div>
          </div>
        </div>
      </article>
    </button>
  );
};
