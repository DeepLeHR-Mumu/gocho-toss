import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { useCompanyDetail } from "shared-api/company";
import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL, COMPANY_RECRUIT_META } from "shared-constant";

export const PageHead: FunctionComponent = () => {
  const router = useRouter();
  const { data: companyDetailData } = useCompanyDetail({
    companyId: Number(router.query.companyId),
    isStatic: true,
  });

  return (
    <Head>
      <title>{`${companyDetailData?.name} > 생산직 채용공고 - 고초대졸닷컴`}</title>
      <meta
        name="description"
        content={`${companyDetailData?.name} 생산직 채용공고를 한눈에 확인해보세요! 생산직 취업의 새로운 기준, 고초대졸닷컴.`}
      />
      <meta name="keywords" content={`${companyDetailData?.name} ${COMPANY_RECRUIT_META.keywords}`} />
      <meta property="og:title" content={`[${companyDetailData?.name}] ${COMPANY_RECRUIT_META.ogTitle}`} />
      <meta property="og:description" content={`${companyDetailData?.name} ${COMPANY_RECRUIT_META.ogDesc}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${GOCHO_DESKTOP_URL}/company/${companyDetailData?.id}/jd`} />
      <meta property="og:site_name" content={COMPANY_RECRUIT_META.ogSiteName} />
      <meta property="og:image" content={COMPANY_RECRUIT_META.ogImage} />
      <meta property="og:image_secure" content={COMPANY_RECRUIT_META.ogImage} />
      <meta property="og:article:author" content={COMPANY_RECRUIT_META.ogAuthor} />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/company/${companyDetailData?.id}/jd`} />
      <link
        rel="alternate"
        media="only screen and (max-width: 640px)"
        href={`${GOCHO_MOBILE_URL}/company/${companyDetailData?.id}/jd`}
      />
    </Head>
  );
};
