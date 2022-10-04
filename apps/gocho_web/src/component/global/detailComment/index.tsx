import { FunctionComponent, useState } from "react";
import Image from "next/image";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { useUserInfo } from "shared-api/auth";
import { useCompanyCommentArr } from "shared-api/company";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { LoginCommentBox } from "./component/loginCommentBox";
import { UnLoginCommentBox } from "./component/unLoginCommentBox";

import { DetailCommentProps } from "./type";
import {
  commentButton,
  commentButtonContainer,
  wrapperSkeleton,
  companyName,
  flexBox,
  headerCSS,
  imageBox,
  wrapper,
} from "./style";

export const DetailComment: FunctionComponent<DetailCommentProps> = ({ jdId, detailData }) => {
  const { data: userData, isSuccess } = useUserInfo();
  const { data: companyCommentArrData } = useCompanyCommentArr({
    companyId: Number(detailData?.companyId),
  });

  const [imageSrc, setImageSrc] = useState(detailData?.logoUrl as string);
  const [isTotalComment, setIsTotalComment] = useState(true);

  if (!detailData) {
    return (
      <div css={wrapperSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  if (!companyCommentArrData || !isSuccess) {
    return (
      <aside css={wrapper}>
        <header css={headerCSS}>
          <div css={flexBox}>
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
                <button css={commentButton(isTotalComment)} type="button">
                  전체 댓글
                </button>
              </li>
              <li>
                <button css={commentButton(!isTotalComment)} type="button">
                  현재 공고 댓글
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <UnLoginCommentBox />
      </aside>
    );
  }

  const { commentArr, company } = companyCommentArrData;

  const currentJdCommentArr = commentArr.filter((comment) => {
    return comment.jdId === jdId;
  });

  return (
    <aside css={wrapper}>
      <header css={headerCSS}>
        <div css={flexBox}>
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
              <button
                css={commentButton(isTotalComment)}
                type="button"
                onClick={() => {
                  setIsTotalComment(true);
                }}
              >
                전체 댓글 <span>{commentArr.length}</span>
              </button>
            </li>
            <li>
              <button
                css={commentButton(!isTotalComment)}
                type="button"
                onClick={() => {
                  setIsTotalComment(false);
                }}
              >
                현재 공고 댓글 <span>{currentJdCommentArr.length}</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <LoginCommentBox
        jdId={jdId}
        userData={userData}
        commentArr={isTotalComment ? commentArr : currentJdCommentArr}
        companyData={company}
      />
    </aside>
  );
};
