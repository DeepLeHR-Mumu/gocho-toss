import { FunctionComponent } from "react";
import Head from "next/head";

import { DOMAIN } from "shared-constant/meta";
import { InvisibleH1 } from "../../invisibleH1";
import { JdDetailMetaHeadProps } from "./type";

export const JdDetailMetaHead: FunctionComponent<JdDetailMetaHeadProps> = ({ metaData, jdDetail }) => {
  const jdTitleText = jdDetail.jdTitle.replace(/\[|]/g, "");

  return (
    <>
      <Head>
        <title>{`[${jdDetail.companyName}]${jdTitleText} ${metaData.title}`}</title>
        <meta
          name="description"
          content={`${jdDetail.companyName}, ${jdTitleText} , ${jdDetail.possibleEdu} 지원가능, ${
            jdDetail.rotation
          }, 직무 : ${jdDetail.taskDetail}${jdDetail.pay ? `, 급여 :${jdDetail.pay.toLocaleString("ko-KR")}원` : ""}`}
        />
        <meta
          name="keywords"
          content={`${jdDetail.companyName}, ${jdDetail.place}, ${jdTitleText}, ${metaData.keyword}`}
        />
        <meta property="og:title" content={`${jdDetail.companyName} ${metaData.ogTitle}`} />
        <meta property="og:description" content={`${jdTitleText} ${metaData.ogDesc}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${DOMAIN}${metaData.path}`} />
        <meta property="og:site_name" content={`고초대졸닷컴 | ${jdDetail.companyName} ${metaData.pageName}`} />
        <meta property="og:image" content={metaData.ogImage} />
        <meta property="og:article:author" content={`[${jdDetail.companyName}]${jdTitleText} ${metaData.title}`} />
      </Head>
      <InvisibleH1 title={`[${jdDetail.companyName}] ${jdTitleText} ${metaData.title}`} />
    </>
  );
};
