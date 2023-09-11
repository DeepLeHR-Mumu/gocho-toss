import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiShare2, FiEye } from "react-icons/fi";
import { Profile, Divider } from "shared-ui/deeple-ds";

import { Layout, LoginModal, ShareModal, CompanyBookmark } from "@/components";
import { useCompanyDetail } from "@/apis/company";
import { useUserProfile } from "@/apis/auth";
import { isQueryString } from "@/utils";
import { URL } from "@/pages/constants";

import { cssObj } from "./style";

export const TitlePart = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const router = useRouter();
  const companyId = isQueryString(router.query.companyId) ? Number(router.query.companyId) : undefined;

  const { data: companyData } = useCompanyDetail({ companyId, isStatic: false });
  const { data: userData } = useUserProfile();

  if (!companyData) {
    return <> </>;
  }

  return (
    <>
      <section css={cssObj.background}>
        {/** TODO 사진 추가? */}
        <Layout>
          <div css={cssObj.wrapper}>
            <Profile src={companyData.logo_url || ""} size={100} css={cssObj.companyLogo} />
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
                현재 해당 기업을 <span>{companyData.bookmark}</span>명이 팔로우하고 있어요
              </span>
            </div>
          </div>
        </Layout>
        <Divider />
        <Layout>
          <nav>
            <ul css={cssObj.listWrapper}>
              <li css={router.query.type === "company" && cssObj.selected}>
                <Link href={`${URL.COMPANY_DETAIL}/${router.query.companyId}?type=company`}>기업정보</Link>
              </li>
              <li css={router.query.type === "jd" && cssObj.selected}>
                <Link href={`${URL.COMPANY_DETAIL}/${router.query.companyId}?type=jd`}>채용정보</Link>
              </li>
              {userData && (
                <li css={router.query.type === "review" && cssObj.selected}>
                  <Link href={`${URL.COMPANY_DETAIL}/${router.query.companyId}?type=review`}>기업리뷰</Link>
                </li>
              )}
            </ul>
          </nav>
        </Layout>
        <Divider />
      </section>
      {loginModal && (
        <LoginModal
          close={() => {
            setLoginModal(false);
          }}
        />
      )}
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
