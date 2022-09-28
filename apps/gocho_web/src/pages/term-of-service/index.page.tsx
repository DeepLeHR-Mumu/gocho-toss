import { NextPage } from "next";

import { Layout } from "@component/layout";

import { mainDesc, executionDesc, tosArr } from "./constant";
import { tosTitle, descCSS, subTitle, listCSS, subListCSS, executionDescCSS, wrapper } from "./style";

import { tosItemDef } from "./type";

const Tos: NextPage = () => {
  return (
    <main css={wrapper}>
      <section>
        <Layout>
          <h1 css={tosTitle}>서비스 이용 약관</h1>
          <p css={descCSS}>{mainDesc}</p>

          {tosArr.map((item: tosItemDef) => {
            return (
              <div key={item.title}>
                <h2 css={subTitle}>{item.title}</h2>
                {item.desc && <p css={descCSS}>{item.desc}</p>}
                {item.itemArr && (
                  <ul css={listCSS}>
                    {item.itemArr.map((subItem) => {
                      return (
                        <li key={subItem.desc}>
                          {subItem.desc}
                          {subItem.subItemArr && (
                            <ul css={subListCSS}>
                              {subItem.subItemArr.map((subList) => {
                                return <li key={subList}>{subList}</li>;
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
                {item.centerDesc && <p css={descCSS}>{item.centerDesc}</p>}
                {item.centerList && (
                  <ul css={listCSS}>
                    {item.centerList.map((centerItem) => {
                      return <li key={centerItem.desc}>{centerItem.desc}</li>;
                    })}
                  </ul>
                )}
                {item.lastDesc && <p css={descCSS}>{item.lastDesc}</p>}
              </div>
            );
          })}
          <p css={executionDescCSS}>{executionDesc}</p>
        </Layout>
      </section>
    </main>
  );
};

export default Tos;
