import { FunctionComponent } from "react";

import { useMainBannerArr } from "shared-api/banner";

import { pageTitle } from "@/style/commonStyles";

import { bannerId, companyName, expireDate, sectionContainer, title, titleBox } from "./style";
import { BannerBox } from "../../component/bannerBox";

export const BannerListPart: FunctionComponent = () => {
  const { data: bannerDataArr } = useMainBannerArr();

  return (
    <>
      <h2 css={pageTitle}>배너 리스트</h2>
      <section css={sectionContainer}>
        <table>
          <thead>
            <tr css={titleBox}>
              <th css={bannerId}>배너 ID</th>
              <th css={companyName}>회사 이름</th>
              <th css={title}>배너 제목</th>
              <th css={expireDate}>만료 날짜</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {bannerDataArr?.bannerDataArr.map((banner) => (
              <BannerBox key={`ManagerMainBanner${banner.id}`} banner={banner} />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};
