import { FunctionComponent, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { AiOutlineEye, AiOutlineLike } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { useAddTipBookmarkArr, useDeleteTipBookmarkArr, useUserTipBookmarkArr } from "shared-api/bookmark";
import { useUserInfo } from "shared-api/auth";
import { dateConverter } from "shared-util/date/dateConverter";

import { ModalComponent } from "@component/modal/modalBackground";
import { useModal } from "@recoil/hook/modal";
import { tipObjDef } from "@recoil/atom/modal";
import { CloseButton } from "@component/common/atom/closeButton";
import {
  modalWrapper,
  contentContainer,
  closeButtonWrapper,
  tagListCSS,
  tagCSS,
  titleCSS,
  sliderContainer,
  tipImageBox,
  controlWrapper,
  controlButton,
  page,
  bodyCSS,
  infoContainer,
  info,
  numInfo,
  likeButtonCSS,
} from "./style";
import { setCarouselSetting } from "./util";

interface TipBox {
  tipData: {
    id: number;
    title: string;
    description: string;
    tagArr: string[];
    createdTime: number;
    likeCount: number;
    viewCount: number;
    thumbnailSrc: string;
    imgPageCount: number;
  };
}

export const TipBox: FunctionComponent<TipBox> = ({ tipData }) => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const sliderRef = useRef<Slider>(null);
  const { closeModal, currentModal } = useModal();
  const { data: userData } = useUserInfo();

  const { mutate: addBookmarkMutate } = useAddTipBookmarkArr({ id: tipData.id });
  const { mutate: deleteBookmarkMutate } = useDeleteTipBookmarkArr({ id: tipData.id });
  const { data: tipBookmarkArr } = useUserTipBookmarkArr({ userId: userData?.id });

  const isBookmarked = Boolean(
    tipBookmarkArr?.some((tipBookmark) => {
      return tipBookmark === tipData.id;
    })
  );

  const likePosting = () => {
    if (isBookmarked) return deleteBookmarkMutate({ userId: userData?.id as number, elemId: tipData.id });
    return addBookmarkMutate({ userId: userData?.id as number, elemId: tipData.id });
  };

  if (currentModal?.modalContentObj === undefined) {
    return <div>error!!</div>;
  }

  const { year, month, date } = dateConverter(tipData.createdTime);
  return (
    <div css={modalWrapper}>
      <div css={closeButtonWrapper}>
        <CloseButton size="L" buttonClick={closeModal} />
      </div>
      <article css={contentContainer}>
        <div css={tagListCSS}>
          {tipData.tagArr.map((tag: string) => {
            return (
              <p css={tagCSS} key={tag}>
                {tag}
              </p>
            );
          })}
        </div>
        <p css={titleCSS}>{tipData.title}</p>
        <div css={sliderContainer}>
          <Slider {...setCarouselSetting(setActiveIndex)} ref={sliderRef}>
            {[...Array(tipData.imgPageCount)].map((value, index) => {
              const srcURL = tipData.thumbnailSrc.substring(0, tipData.thumbnailSrc.length - 5);
              return (
                <div key={`${tipData.title + index}`}>
                  <div css={tipImageBox}>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={`${srcURL + (index + 1)}.png`}
                      alt={`${tipData.title} 본문`}
                      loading="eager"
                      unoptimized
                    />
                  </div>
                </div>
              );
            })}
          </Slider>

          <div css={controlWrapper}>
            <button
              css={controlButton}
              type="button"
              onClick={() => {
                return sliderRef.current?.slickPrev();
              }}
            >
              <BsChevronLeft />
            </button>

            <p css={page}>
              {activeIndex} / {tipData.imgPageCount}
            </p>

            <button
              css={controlButton}
              type="button"
              onClick={() => {
                return sliderRef.current?.slickNext();
              }}
            >
              <BsChevronRight />
            </button>
          </div>
        </div>

        <p css={bodyCSS}>{tipData.description}</p>
        <div css={infoContainer}>
          <p css={info}>{`${year}/${month}/${date}`}</p>
          <button type="button" onClick={likePosting} css={likeButtonCSS(isBookmarked)}>
            <AiOutlineLike />
          </button>
          <p css={numInfo}>{tipData.likeCount}</p>
          <AiOutlineEye />
          <p css={numInfo}>{tipData.viewCount}</p>
        </div>
      </article>
    </div>
  );
};

export const TipModal: FunctionComponent = () => {
  const { closeModal, currentModal } = useModal();

  return (
    <ModalComponent closeModal={closeModal}>
      <TipBox tipData={currentModal?.modalContentObj as tipObjDef} />
    </ModalComponent>
  );
};
