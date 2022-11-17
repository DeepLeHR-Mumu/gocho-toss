import { NextPage } from "next";

import { Layout } from "@component/layout";
import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { executionDesc, tosArr } from "shared-constant/TOS";

import { PageHead } from "./component/pageHead";
import { tosTitle, subTitle, container, executionDescCSS, wrapper, listTitle, listArr, desc } from "./style";
import { tosArrDef } from "./type";

const Tos: NextPage = () => {
  return (
    <main css={wrapper}>
      <PageHead />
      <InvisibleH1 title="고초대졸닷컴 | 개인회원 이용약관" />

      <section>
        <Layout>
          <strong css={tosTitle}>개인회원 이용약관</strong>

          {tosArr.map((item: tosArrDef) => {
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

export default Tos;
