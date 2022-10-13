import { NextPage } from "next";
import { useRouter } from "next/router";
import { FiChevronLeft } from "react-icons/fi";

import { Layout } from "@component/layout";

import { mainDesc, executionDesc, tosArr } from "shared-constant/privacy";
import {
  tosTitle,
  descCSS,
  subTitle,
  listCSS,
  subListCSS,
  executionDescCSS,
  wrapper,
  headerCSS,
  backButton,
  sectionBox,
} from "./style";

import { tosItemDef } from "./type";

const Tos: NextPage = () => {
  const router = useRouter();
  return (
    <main css={wrapper}>
      <header css={headerCSS}>
        <button type="button" onClick={router.back} aria-label="이전 페이지로 가기" css={backButton}>
          <FiChevronLeft />
        </button>
        <h1 css={tosTitle}>개인정보 처리방침</h1>
      </header>
      <section css={sectionBox}>
        <Layout>
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
          <p css={executionDescCSS}>
            <span>[부칙]</span>
            {executionDesc}
          </p>
        </Layout>
      </section>
    </main>
  );
};

export default Tos;
