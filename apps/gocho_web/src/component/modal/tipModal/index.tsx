import { FunctionComponent, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { AiOutlineEye, AiOutlineLike } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import gochoLogoMono from "shared-image/global/deepLeLogo/smallMono.svg";
import { useAddTipBookmarkArr, useDeleteTipBookmarkArr, useUserTipBookmarkArr } from "shared-api/bookmark";
import { useUserInfo } from "shared-api/auth";
import { dateConverter } from "shared-util/date/dateConverter";
import { useAddTipViewCount } from "shared-api/viewCount";

import { ModalComponent } from "@component/modal/modalBackground";
import { useModal } from "@recoil/hook/modal";
import { tipObjDef } from "@recoil/atom/modal";
import { CloseButton } from "@component/common/atom/closeButton";
import {
  modalWrapper,
  contentContainer,
  closeButtonWrapper,
  tagListCSS,
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
  logoBox,
} from "./style";
import { TipBoxProps } from "./type";
import { setCarouselSetting } from "./util";

export const TipBox: FunctionComponent<TipBoxProps> = ({ tipData }) => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const sliderRef = useRef<Slider>(null);
  const { closeModal, currentModal } = useModal();
  const { data: userData } = useUserInfo();

  const { mutate: addViewCount } = useAddTipViewCount();
  const { mutate: addBookmarkMutate } = useAddTipBookmarkArr({ id: tipData.id });
  const { mutate: deleteBookmarkMutate } = useDeleteTipBookmarkArr({ id: tipData.id });
  const { data: tipBookmarkArr } = useUserTipBookmarkArr({ userId: userData?.id });

  const isBookmarked = Boolean(
    tipBookmarkArr?.some((tipBookmark: number) => {
      return tipBookmark === tipData.id;
    })
  );

  const likePosting = () => {
    if (isBookmarked) return deleteBookmarkMutate({ userId: userData?.id as number, elemId: tipData.id });
    return addBookmarkMutate({ userId: userData?.id as number, elemId: tipData.id });
  };

  useEffect(() => {
    const tipViewStr = sessionStorage.getItem("tipViewArr");

    const isViewed = tipViewStr?.includes(String(tipData.id));
    if (isViewed) return;

    if (tipViewStr) {
      const tipViewArr: number[] = JSON.parse(tipViewStr);
      tipViewArr.push(tipData.id);
      sessionStorage.setItem("tipViewArr", JSON.stringify(tipViewArr));
      addViewCount({ elemId: tipData.id });
      return;
    }
    if (!isViewed) {
      sessionStorage.setItem("tipViewArr", JSON.stringify([tipData.id]));
      addViewCount({ elemId: tipData.id });
    }
  }, [tipData, addViewCount]);

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
        <div css={logoBox}>
          <Image src={gochoLogoMono} alt="고초대졸닷컴" objectFit="contain" layout="fill" />
        </div>
        <strong css={titleCSS}>{tipData.title}</strong>
        <ul css={tagListCSS}>
          {tipData.tagArr.map((tag: string) => {
            return <li key={tag}>{tag}</li>;
          })}
        </ul>

        <div css={sliderContainer}>
          <Slider {...setCarouselSetting(setActiveIndex)} ref={sliderRef}>
            {[...Array(tipData.imgPageCount)].map((value, index) => {
              const srcURL = tipData.thumbnailSrc.substring(0, tipData.thumbnailSrc.length - 5);
              return (
                <div key={`${tipData.title + index}`}>
                  <div css={tipImageBox}>
                    <Image
                      layout="fill"
                      objectFit="contain"
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
              aria-label="이전 꿀팁보기"
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
              aria-label="다음 꿀팁보기"
            >
              <BsChevronRight />
            </button>
          </div>
        </div>

        <p css={bodyCSS}>{tipData.description}</p>
        <div css={infoContainer}>
          <p css={info}>{`${year}.${month}.${date}`}</p>

          <button type="button" onClick={likePosting} css={likeButtonCSS(isBookmarked)} aria-label="꿀팁 좋아요">
            <AiOutlineLike />
            {tipData.likeCount}
          </button>

          <p css={numInfo}>
            <AiOutlineEye /> {tipData.viewCount.toLocaleString("Ko-KR")}
          </p>
        </div>
      </article>
    </div>
  );
};

export const TipModal: FunctionComponent = () => {
  const { closeModal, currentModal } = useModal();

  return (
    <ModalComponent closeModal={closeModal} button="close">
      <TipBox tipData={currentModal?.modalContentObj as tipObjDef} />
    </ModalComponent>
  );
};
