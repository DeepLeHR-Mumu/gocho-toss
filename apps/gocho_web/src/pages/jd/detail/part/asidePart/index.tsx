import { FunctionComponent, useState } from "react";
import Image from "next/image";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { useUserInfo } from "shared-api/auth";
import { useCompanyCommentArr } from "shared-api/company";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { LoginCommentBox } from "./component/loginCommentBox";
import { UnLoginCommentBox } from "./component/unLoginCommentBox";

import { AsidePartProps } from "./type";
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

export const AsidePart: FunctionComponent<AsidePartProps> = ({ jobDetailData }) => {
  const { data: userData, isSuccess } = useUserInfo();
  const { data: companyCommentArrData } = useCompanyCommentArr({
    companyId: Number(jobDetailData?.company.companyId),
  });

  const [imageSrc, setImageSrc] = useState(jobDetailData?.company.logoUrl as string);

  if (!jobDetailData) {
    return (
      <div css={wrapperSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  if (!companyCommentArrData || !isSuccess) {
    return (
      <div>
        <aside css={wrapper}>
          <header css={headerCSS}>
            <div css={flexBox}>
              <div css={imageBox}>
                <Image
                  onError={() => {
                    return setImageSrc(defaultCompanyLogo);
                  }}
                  src={imageSrc || jobDetailData?.company.logoUrl}
                  alt={jobDetailData?.company.name}
                  objectFit="contain"
                  layout="fill"
                />
              </div>
              <p css={companyName}>{jobDetailData?.company.name}</p>
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
        </aside>
      </div>
    );
  }

  const { commentArr, company } = companyCommentArrData;

  return (
    <div>
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
      </aside>
    </div>
  );
};
