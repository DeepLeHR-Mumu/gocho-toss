import { FunctionComponent } from "react";
import Image from "next/image";

import { Layout } from "@component/layout";

import { bannerArr } from "./constant";
import { changeBannerColor, bannerArrCSS, descCSS, linkCSS, titleCSS, iconBox, wrapper } from "./style";

export const BannerPart: FunctionComponent = () => {
  return (
    <Layout>
      <section css={wrapper}>
        <ul css={bannerArrCSS}>
          {bannerArr.map((banner) => {
            return (
              <li css={changeBannerColor(banner.backgroundColor)} key={banner.title}>
                <a css={linkCSS} href={banner.linkUrl} target="_blank" rel="noreferrer">
                  <strong css={titleCSS}>{banner.title}</strong>
                  <p css={descCSS}>{banner.desc}</p>
                  <div css={iconBox}>
                    <Image src={banner.iconSrc} alt="" fill />
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
};
