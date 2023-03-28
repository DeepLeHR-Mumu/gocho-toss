import { FunctionComponent, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { AiOutlineEye, AiOutlineLike } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import gochoLogoMono from "shared-image/global/deepLeLogo/smallMono.svg";
import { useAddTipBookmarkArr, useDeleteTipBookmarkArr, useUserTipBookmarkArr } from "shared-api/bookmark";
import { useUserInfo } from "shared-api/auth";
import { dateConverter } from "shared-util";
import { useAddTipViewCount } from "shared-api/viewCount";
import { useViewCount } from "shared-user";

import { ModalComponent } from "@component/modal/modalBackground";
import { CloseButton } from "@component/common/atom/closeButton";
import { useToast, useModal, tipObjDef } from "@/globalStates";
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
  uploader,
} from "./style";
import { TipBoxProps } from "./type";
import { setCarouselSetting } from "./util";

export const TipBox: FunctionComponent<TipBoxProps> = ({ tipData }) => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const sliderRef = useRef<Slider>(null);
  const { closeModal, contentObj } = useModal();
  const { setToastMessage } = useToast();
  const { data: userInfoData } = useUserInfo();

  const { mutate: addViewCount } = useAddTipViewCount();
  const { mutate: addBookmarkMutate } = useAddTipBookmarkArr({ id: tipData.id });
  const { mutate: deleteBookmarkMutate } = useDeleteTipBookmarkArr({ id: tipData.id });
  const { data: tipBookmarkArr } = useUserTipBookmarkArr({ userId: userInfoData?.id });

  const isBookmarked = Boolean(
    tipBookmarkArr?.some((tipBookmark: number) => {
      return tipBookmark === tipData.id;
    })
  );

  const likePosting = () => {
    if (!userInfoData) {
      return setToastMessage("로그인이 필요한 서비스입니다.");
    }
    if (isBookmarked) return deleteBookmarkMutate({ userId: userInfoData?.id as number, id: tipData.id });
    return addBookmarkMutate({ userId: userInfoData?.id as number, id: tipData.id });
  };

  useViewCount({
    id: tipData.id,
    target: "tip",
    viewMutation: () => {
      addViewCount({ elemId: tipData.id });
    },
  });

  if (contentObj === undefined) {
    return (
      <div>
        <p>의도치 않은 에러가 발생했습니다.</p>
      </div>
    );
  }

  const { year, month, date } = dateConverter(tipData.createdTime);
  return (
    <div css={modalWrapper}>
      <div css={closeButtonWrapper}>
        <CloseButton size="L" buttonClick={closeModal} />
      </div>

      <article css={contentContainer}>
        <div css={logoBox}>
          <Image src={gochoLogoMono} alt="고초대졸닷컴" fill />
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
                      fill
                      src={`${srcURL + (index + 1)}.png`}
                      alt={`${tipData.title} 본문`}
                      loading="eager"
                      unoptimized
                      sizes="1"
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
          <AiOutlineEye />
          <p css={numInfo}>{tipData.viewCount.toLocaleString("Ko-KR")}</p>
          <p css={uploader}>작성자: {tipData.uploaderName}</p>
        </div>
      </article>
    </div>
  );
};

export const TipModal: FunctionComponent = () => {
  const { contentObj } = useModal();

  return (
    <ModalComponent>
      <TipBox tipData={contentObj as tipObjDef} />
    </ModalComponent>
  );
};
