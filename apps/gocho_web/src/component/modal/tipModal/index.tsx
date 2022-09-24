import { FunctionComponent, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

import { ModalComponent } from "@component/modal/modalBackground";
import { useModal } from "@recoil/hook/modal";
import { tipObjDef } from "@recoil/atom/modal";
import { dateConverter } from "shared-util/date/dateConverter";
import { AiOutlineEye, AiOutlineLike } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
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
} from "./style";
import { setCarouselSetting } from "./util";

export const TipBox: FunctionComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const sliderRef = useRef<Slider>(null);
  const { closeModal, currentModal } = useModal();

  if (currentModal?.modalContentObj === undefined) {
    return <div>error!!</div>;
  }

  const { thumbnailSrc, title, tagArr, description, createdTime, likeCount, viewCount, imgPageCount } =
    currentModal.modalContentObj as tipObjDef;

  const { year, month, date } = dateConverter(createdTime);
  return (
    <div css={modalWrapper}>
      <div css={closeButtonWrapper}>
        <CloseButton size="L" buttonClick={closeModal} />
      </div>
      <article css={contentContainer}>
        <div css={tagListCSS}>
          {tagArr.map((tag: string) => {
            return (
              <p css={tagCSS} key={tag}>
                {tag}
              </p>
            );
          })}
        </div>
        <p css={titleCSS}>{title}</p>
        <div css={sliderContainer}>
          <Slider {...setCarouselSetting(setActiveIndex)} ref={sliderRef}>
            {[...Array(imgPageCount)].map((value, index) => {
              const srcURL = thumbnailSrc.substring(0, thumbnailSrc.length - 5);
              return (
                <div key={`${title + index}`}>
                  <div css={tipImageBox}>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={`${srcURL + (index + 1)}.png`}
                      alt={`${title} 본문`}
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
              {activeIndex} / {imgPageCount}
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

        <p css={bodyCSS}>{description}</p>
        <div css={infoContainer}>
          <p css={info}>{`${year}/${month}/${date}`}</p>
          <AiOutlineLike />
          <p css={numInfo}>{likeCount}</p>
          <AiOutlineEye />
          <p css={numInfo}>{viewCount}</p>
        </div>
      </article>
    </div>
  );
};

export const TipModal: FunctionComponent = () => {
  const { closeModal } = useModal();

  return (
    <ModalComponent closeModal={closeModal} button="close">
      <TipBox />
    </ModalComponent>
  );
};
