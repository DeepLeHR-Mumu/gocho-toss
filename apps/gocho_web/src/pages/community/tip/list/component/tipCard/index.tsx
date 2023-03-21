import { FunctionComponent } from "react";
import { AiOutlineEye, AiOutlineLike } from "react-icons/ai";
import Image from "next/image";

import { dateConverter } from "shared-util";
import { useModal } from "@recoil/hook/modal";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
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

export const TipCard: FunctionComponent<TipCardProps | TipCardSkeleton> = ({ tipData, isSkeleton }) => {
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
    <button type="button" onClick={openTipModal} aria-label={`${tipData.title} 자세히보기`}>
      <article css={cardContainer}>
        <div css={thumbnailBox}>
          <Image src={tipData.thumbnailSrc} alt="" fill sizes="1" quality={50} />
        </div>
        <div css={contentContainer}>
          <div>
            <ul css={tagListCSS}>
              {tipData.tagArr.map((tag: string) => {
                return (
                  <li css={tagCSS} key={tag}>
                    {tag}
                  </li>
                );
              })}
            </ul>
            <strong css={titleCSS}>{tipData.title}</strong>
            <p css={bodyCSS}>{tipData.description}</p>
          </div>

          <div css={infoContainer}>
            <ul css={infoBox}>
              <li css={info}>{tipData.uploaderName}</li>
              <li css={info}>{`${year}.${month}.${date}`}</li>

              <li css={numInfo}>
                <AiOutlineLike />
                {tipData.likeCount}
              </li>

              <li css={numInfo}>
                <AiOutlineEye /> {tipData.viewCount.toLocaleString("Ko-KR")}
              </li>
            </ul>
          </div>
        </div>
      </article>
    </button>
  );
};
