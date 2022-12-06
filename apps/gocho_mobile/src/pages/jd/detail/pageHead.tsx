import { FunctionComponent } from "react";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";
import { JD_DETAIL_META } from "shared-constant/meta";

import { PageHeadProps } from "./type";

export const PageHead: FunctionComponent<PageHeadProps> = ({ option }) => {
  const title = option.title.replace(/\[|]/g, "");
  const desc = `${option.companyName}, ${title} , (중졸)/(고졸)/(초대졸)/(4년제) 지원가능, ${option.rotation}, 직무 : ${
    option.taskDetail
  }${option.pay !== null && `, 급여 : ${option.pay}`}`;

  return (
    <Head>
      <title>{`[${option.companyName}] ${title} - 고초대졸닷컴`}</title>
      <meta name="description" content={desc} />
      <meta
        name="keywords"
        content={`${option.companyName}, ${option.place && option.place}, ${title}, ${JD_DETAIL_META.keywords}`}
      />
      <meta property="og:title" content={`${option.companyName} ${JD_DETAIL_META.ogTitle}`} />
      <meta property="og:description" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${GOCHO_MOBILE_URL}/jd/detail/${option.id}`} />
      <meta property="og:site_name" content={JD_DETAIL_META.ogSiteName} />
      <meta property="og:image" content={JD_DETAIL_META.ogImage} />
      <meta property="og:image_secure" content={JD_DETAIL_META.ogImage} />
      <meta property="og:article:author" content={JD_DETAIL_META.ogAuthor} />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/jd/detail/${option.id}`} />
    </Head>
  );
};
