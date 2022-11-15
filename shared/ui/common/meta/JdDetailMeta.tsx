import { FunctionComponent } from "react";
import Head from "next/head";

import { CDN_URL } from "shared-constant/externalURL";
import { defaultKeyword } from "shared-constant/meta";

interface JdDetailMetaProps {
  option: {
    id: number;
    title: string;
    companyName: string;
    rotation: string;
    taskDetail: string;
    pay: number | null;
    possibleEdu: string;
    place: string;
  };
}

export const JdDetailMeta: FunctionComponent<JdDetailMetaProps> = ({ option }) => {
  const title = option.title.replace(/\[|]/g, "");
  const desc = `${option.companyName}, ${title} , (중졸)/(고졸)/(초대졸)/(4년제) 지원가능, ${option.rotation}, 직무 : ${option.taskDetail}, 급여 : ${option.pay}`;

  return (
    <Head>
      <title>{`[${option.companyName}] ${title} - 고초대졸닷컴`}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={defaultKeyword} />
      <meta property="og:title" content="실시간 생산직 채용공고 - 고초대졸닷컴" />
      <meta property="og:description" content="어디에서도 볼 수 없는 빠르고 정확한 생산직 채용공고를 느껴보세요! " />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://고초대졸.com/jd/detail/${option.id}`} />
      <meta property="og:site_name" content="고초대졸닷컴 | 채용공고" />
      <meta property="og:image" content={`${CDN_URL}og_image/jd.png`} />
      <meta property="og:image_secure" content={`${CDN_URL}og_image/jd.png`} />
      <meta property="og:article:author" content="고초대졸닷컴 | 생산직 취업의 새로운 기준" />
    </Head>
  );
};
