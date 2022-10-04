import { FunctionComponent, useState } from "react";
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
} from "./style";

export const DetailComment: FunctionComponent<DetailCommentProps> = ({ detailData, setOpenComment }) => {
  const { data: userData, isSuccess } = useUserInfo();
  const { data: companyCommentArrData } = useCompanyCommentArr({
    companyId: Number(detailData?.companyId),
  });

  const [imageSrc, setImageSrc] = useState(detailData?.logoUrl as string);

  if (!detailData) {
    return (
      <div css={wrapperSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  if (!companyCommentArrData || !isSuccess) {
    return (
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
                <button css={commentButton} type="button">
                  전체 댓글
                </button>
              </li>
              <li>
                <button css={commentButton} type="button">
                  현재 공고 댓글
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <UnLoginCommentBox />
      </section>
    );
  }

  const { commentArr, company } = companyCommentArrData;

  return (
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
              src={imageSrc || company.logoUrl}
              alt={company.name}
              objectFit="contain"
              layout="fill"
            />
          </div>
          <p css={companyName}>{company.name}</p>
        </div>
        <nav css={commentButtonContainer}>
          <ul>
            <li>
              <button css={commentButton} type="button">
                전체 댓글 <span>{commentArr.length}</span>
              </button>
            </li>
            <li>
              <button css={commentButton} type="button">
                현재 공고 댓글
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <LoginCommentBox userData={userData} commentArr={commentArr} />
    </section>
  );
};
