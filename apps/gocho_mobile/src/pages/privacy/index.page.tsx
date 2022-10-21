import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_PRIVACY } from "shared-constant/meta";
import { executionDesc, privacyArr, CTOINFO } from "shared-constant/privacy";
import { GOCHO_DESKTOP_URL } from "shared-constant/internalURL";

import { Layout } from "@component/layout";
import {
  tosTitle,
  subTitle,
  container,
  executionDescCSS,
  wrapper,
  listTitle,
  listArr,
  desc,
  CTOInfoCSS,
} from "./style";

import { PrivacyDef } from "./type";

const Privacy: NextPage = () => {
  const router = useRouter();
  return (
    <main css={wrapper}>
      <Head>
        <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.asPath.split("?")[0]}`} />
      </Head>
      <section>
        <MetaHead metaData={META_PRIVACY} />
        <Layout>
          <strong css={tosTitle}>개인정보 처리방침</strong>

          {privacyArr.map((item: PrivacyDef) => {
            return (
              <div key={item.title} css={container}>
                <h2 css={subTitle}>{item.title}</h2>
                {item.subItem.map((data) => {
                  return (
                    <>
                      <strong css={listTitle}>{data.title}</strong>
                      <ul css={listArr}>
                        {data.infoArr.map((list) => {
                          return (
                            <li css={desc} key={list}>
                              {list}
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  );
                })}
              </div>
            );
          })}

          <ul css={CTOInfoCSS}>
            <li>가. 개인정보 보호 책임자</li>
            <li>성명 : {CTOINFO.name}</li>
            <li>전화번호 : {CTOINFO.tel}</li>
            <li>이메일 : {CTOINFO.eMail}</li>
          </ul>

          <p css={executionDescCSS}>
            <span>
              {"<"} 부칙 {">"}
            </span>
            {executionDesc}
          </p>
        </Layout>
      </section>
    </main>
  );
};

export default Privacy;
