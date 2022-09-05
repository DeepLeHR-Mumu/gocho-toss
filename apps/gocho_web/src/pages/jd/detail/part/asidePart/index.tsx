import { FunctionComponent, useState } from "react";
import Image from "next/image";

import defaultCompanyLogo from "@public/images/global/common/default_company_logo.svg";

import { useUserInfo } from "@api/auth";
import { useCompanyCommentArr } from "@api/company";

import { SkeletonBox } from "@component/common/atom/skeletonBox";
import { LoginCommentBox } from "./component/loginCommentBox";
import { UnLoginCommentBox } from "./component/unLoginCommentBox";

import { ADComponent } from "./component/adBox";

import { AsidePartProps, AsidePartSkeleton } from "./type";
import {
  commentButton,
  commentButtonContainer,
  companyName,
  flexBox,
  headerCSS,
  imageBox,
  wrapper,
  wrapperSkeleton,
} from "./style";

export const AsidePart: FunctionComponent<AsidePartProps | AsidePartSkeleton> = ({ companyId, isSkeleton }) => {
  const { data: userData, isSuccess } = useUserInfo();
  const { data: companyCommentArrData, isLoading } = useCompanyCommentArr({
    companyId: Number(companyId),
  });

  const [imageSrc, setImageSrc] = useState(companyCommentArrData?.company.logoUrl as string);

  if (isSkeleton || !companyCommentArrData || isLoading) {
    return (
      <div css={wrapperSkeleton}>
        <SkeletonBox />
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
            <h3 css={companyName}>{company.name}</h3>
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
        {isSuccess ? <LoginCommentBox userData={userData} commentArr={commentArr} /> : <UnLoginCommentBox />}
      </aside>
      <ADComponent />
    </div>
  );
};
