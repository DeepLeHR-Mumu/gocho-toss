import { FunctionComponent, useState, useEffect } from "react";
import Image from "next/image";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { useUserInfo } from "shared-api/auth";
import { useCompanyCommentArr } from "shared-api/company";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { FiChevronLeft } from "react-icons/fi";
import { LoginCommentBox } from "./component/loginCommentBox";
import { UnLoginCommentBox } from "./component/unLoginCommentBox";

import { DetailCommentProps } from "./type";
import {
  sectionWrapper,
  headerWrapper,
  flexBox,
  closeCommentButton,
  commentButton,
  commentButtonContainer,
  wrapperSkeleton,
  companyName,
  imageBox,
  dimmed,
} from "./style";

export const DetailComment: FunctionComponent<DetailCommentProps> = ({ jdId, detailData, setOpenComment }) => {
  const { data: userData, isSuccess } = useUserInfo();
  const { data: companyCommentArrData } = useCompanyCommentArr({
    companyId: Number(detailData?.companyId),
  });

  const [imageSrc, setImageSrc] = useState(detailData?.logoUrl as string);
  const [isTotalComment, setIsTotalComment] = useState<boolean>(true);

  useEffect(() => {
    // TODO: body css로 옮기기
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  if (!detailData) {
    return (
      <div css={wrapperSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  if (!companyCommentArrData || !isSuccess || companyCommentArrData.commentArr === null) {
    return (
      <>
        <section css={sectionWrapper}>
          <header css={headerWrapper}>
            <div css={flexBox}>
              <button
                css={closeCommentButton}
                type="button"
                onClick={() => {
                  setOpenComment(false);
                }}
              >
                <FiChevronLeft />
              </button>
              <div css={imageBox}>
                <Image
                  onError={() => {
                    return setImageSrc(defaultCompanyLogo);
                  }}
                  src={imageSrc || detailData?.logoUrl}
                  alt={detailData?.name}
                  objectFit="contain"
                  layout="fill"
                />
              </div>
              <p css={companyName}>{detailData?.name}</p>
            </div>
            <nav css={commentButtonContainer}>
              <ul>
                <li>
                  <button
                    css={commentButton(isTotalComment)}
                    type="button"
                    onClick={() => {
                      setIsTotalComment(true);
                    }}
                  >
                    전체 댓글 <span>{companyCommentArrData?.commentArr?.length}</span>
                  </button>
                </li>
                {jdId !== null && (
                  <li>
                    <button
                      css={commentButton(!isTotalComment)}
                      type="button"
                      onClick={() => {
                        setIsTotalComment(false);
                      }}
                    >
                      현재 공고 댓글
                    </button>
                  </li>
                )}
              </ul>
            </nav>
          </header>
          <UnLoginCommentBox setOpenComment={setOpenComment} />
        </section>
        <div css={dimmed} />
      </>
    );
  }

  const filterComment = companyCommentArrData.commentArr.filter((comment) => {
    if (jdId === null) return comment.title === null;
    return comment.jdId === jdId;
  });

  return (
    <>
      <section css={sectionWrapper}>
        <header css={headerWrapper}>
          <div css={flexBox}>
            <button
              css={closeCommentButton}
              type="button"
              onClick={() => {
                setOpenComment(false);
              }}
              aria-label="댓글창 닫기"
            >
              <FiChevronLeft />
            </button>
            <div css={imageBox}>
              <Image
                onError={() => {
                  return setImageSrc(defaultCompanyLogo);
                }}
                src={imageSrc || companyCommentArrData.company.logoUrl}
                alt={companyCommentArrData.company.name}
                objectFit="contain"
                layout="fill"
              />
            </div>
            <p css={companyName}>{companyCommentArrData.company.name}</p>
          </div>
          <nav css={commentButtonContainer}>
            <ul>
              <li>
                <button
                  css={commentButton(isTotalComment)}
                  type="button"
                  onClick={() => {
                    setIsTotalComment(true);
                  }}
                >
                  전체 댓글 <span>{companyCommentArrData.commentArr.length}</span>
                </button>
              </li>
              {jdId !== null && (
                <li>
                  <button
                    css={commentButton(!isTotalComment)}
                    type="button"
                    onClick={() => {
                      setIsTotalComment(false);
                    }}
                  >
                    {jdId === null ? "기업 정보" : "현재 공고"} 댓글
                    <span>{filterComment.length}</span>
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </header>
        <LoginCommentBox
          jdId={jdId}
          userData={userData}
          companyId={companyCommentArrData.company.id}
          commentArr={isTotalComment ? companyCommentArrData.commentArr : filterComment}
        />
      </section>
      <div css={dimmed} />
    </>
  );
};
