import { FunctionComponent } from "react";
import Head from "next/head";

import { CDN_URL } from "shared-constant/externalURL";
import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";
import { defaultKeyword } from "shared-constant/meta";

import { JdDetailMetaProps } from "./type";

export const JdDetailMeta: FunctionComponent<JdDetailMetaProps> = ({ option, isMobile = false }) => {
  const title = option.title.replace(/\[|]/g, "");
  const desc = `${option.companyName}, ${title} , (중졸)/(고졸)/(초대졸)/(4년제) 지원가능, ${option.rotation}, 직무 : ${
    option.taskDetail
  }${option.pay !== null && `, 급여 : ${option.pay}`}`;

  return (
    <Head>
      <title>{`[${option.companyName}] ${title} - 고초대졸닷컴`}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={`${option.companyName}, ${option.place}, ${title}, ${defaultKeyword}`} />
      <meta property="og:title" content={`${option.companyName} 생산직 채용공고 - 고초대졸닷컴`} />
      <meta property="og:description" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${isMobile ? GOCHO_MOBILE_URL : GOCHO_DESKTOP_URL}/jd/detail/${option.id}`} />
      <meta property="og:site_name" content="고초대졸닷컴 | 채용공고" />
      <meta property="og:image" content={`${CDN_URL}og_image/jd.png`} />
      <meta property="og:image_secure" content={`${CDN_URL}og_image/jd.png`} />
      <meta property="og:article:author" content="고초대졸닷컴 | 생산직 취업의 새로운 기준" />
      <link rel="canonical" href={`${GOCHO_DESKTOP_URL}/jd/detail/${option.id}`} />

      {!isMobile && (
        <link
          rel="alternate"
          media="only screen and (max-width: 640px)"
          href={`${GOCHO_MOBILE_URL}/jd/detail/${option.id}`}
        />
      )}
    </Head>
  );
};
