import { NextPage } from "next";

import { Layout } from "@component/layout";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_TOS } from "shared-constant/meta";
import { executionDesc, tosArr } from "shared-constant/TOS";
import { tosTitle, subTitle, container, executionDescCSS, wrapper, listTitle, listArr, desc } from "./style";

import { tosArrDef } from "./type";

const Tos: NextPage = () => {
  return (
    <main css={wrapper}>
      <MetaHead metaData={META_TOS} />
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
