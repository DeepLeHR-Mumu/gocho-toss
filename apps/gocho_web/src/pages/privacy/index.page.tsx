import { NextPage } from "next";

import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { privacyExecutionDesc, privacyArr, CTOINFO } from "shared-constant";

import { Layout } from "@component/layout";

import { PageHead } from "./pageHead";

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
  return (
    <main css={wrapper}>
      <PageHead />
      <InvisibleH1 title="고초대졸닷컴 | 개인정보 처리방침" />
      <section>
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
            {privacyExecutionDesc}
          </p>
        </Layout>
      </section>
    </main>
  );
};

export default Privacy;
