import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiShare2, FiEye } from "react-icons/fi";

import { Divider } from "shared-ui/deeple-ds";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { Layout, ShareModal, CompanyBookmark, SkeletonBox } from "@/components";
import { useCompanyDetail } from "@/apis/company";
import { isQueryString } from "@/utils";
import { INTERNAL_URL } from "@/pages/constants";
import backgroundImage from "@/public/image/company/background.png";

import { cssObj, skeletonCssObj } from "./style";

export const TitlePart = () => {
  const [shareModal, setShareModal] = useState(false);
  const router = useRouter();
  const companyId = isQueryString(router.query.companyId) ? Number(router.query.companyId) : null;

  const { data: companyData } = useCompanyDetail({ companyId, isStatic: false });

  if (!companyData) {
    return (
      <section css={cssObj.background}>
        <div css={cssObj.imageWrapper}>
          <Image src={backgroundImage} alt="회사 배경" fill priority />
        </div>
        <Layout>
          <div css={cssObj.wrapper}>
            <div css={cssObj.companyLogo}>
              <Image src={defaultCompanyLogo} alt="회사 로고" fill priority />
            </div>
            <div css={skeletonCssObj.emptyDiv1} />
            <div css={skeletonCssObj.skeletonBoxWrapper1}>
              <SkeletonBox />
            </div>
            <div css={cssObj.introWrapper}>
              <div css={skeletonCssObj.skeletonBoxWrapper2}>
                <SkeletonBox />
              </div>
            </div>
          </div>
        </Layout>
        <Divider />
        <Layout>
          <div css={skeletonCssObj.emptyDiv2} />
        </Layout>
      </section>
    );
  }

  return (
    <>
      <section css={cssObj.background}>
        <div css={cssObj.imageWrapper}>
          <Image src={backgroundImage} alt="회사 배경" fill priority />
        </div>
        <Layout>
          <div css={cssObj.wrapper}>
            <div css={cssObj.companyLogo}>
              <Image src={companyData.logo_url || defaultCompanyLogo} alt="회사 로고" fill priority />
            </div>
            <div css={cssObj.followWrapper}>
              <CompanyBookmark companyId={companyId} isBookmark={companyData.is_bookmark} />
              <button
                type="button"
                onClick={() => {
                  setShareModal(true);
                }}
              >
                <FiShare2 css={cssObj.shareIcon} />
              </button>
            </div>
            <div css={cssObj.titleWrapper}>
              <h3 css={cssObj.title}>{companyData.name}</h3>
              <FiEye css={cssObj.eyeIcon} />
              <span css={cssObj.views}>{companyData.view}</span>
            </div>
            <div css={cssObj.introWrapper}>
              <span css={cssObj.intro}>{companyData.intro}</span>
              <span css={cssObj.follower}>
                현재 해당 기업을 <span>{companyData.bookmark}</span>명이 팔로우하고 있어요!
              </span>
            </div>
          </div>
        </Layout>
        <Divider />
        <Layout>
          <nav>
            <ul css={cssObj.listWrapper}>
              <li css={cssObj.menu(router.query.type === "company")}>
                <Link href={`${INTERNAL_URL.COMPANY_DETAIL}/${router.query.companyId}?type=company`}>기업정보</Link>
              </li>
              <li css={cssObj.menu(router.query.type === "jd")}>
                <Link href={`${INTERNAL_URL.COMPANY_DETAIL}/${router.query.companyId}?type=jd`}>채용정보</Link>
              </li>
              <li css={cssObj.menu(router.query.type === "review")}>
                <Link href={`${INTERNAL_URL.COMPANY_DETAIL}/${router.query.companyId}?type=review`}>기업리뷰</Link>
              </li>
            </ul>
          </nav>
        </Layout>
        <Divider />
      </section>
      {shareModal && (
        <ShareModal
          close={() => {
            setShareModal(false);
          }}
        />
      )}
    </>
  );
};
