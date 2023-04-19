import { FunctionComponent } from "react";

import { useTopArr } from "shared-api/banner";

import { pageTitle } from "@/style/commonStyles";

import { bannerIdBox, companyNameBox, expireDateBox, sectionContainer, tableTitle, titleBox } from "./style";
import { BannerBox } from "../../component/bannerBox";

export const BannerListPart: FunctionComponent = () => {
  const { data: bannerDataArr } = useTopArr();

  return (
    <>
      <h2 css={pageTitle}>배너 리스트</h2>
      <section css={sectionContainer}>
        <table>
          <thead>
            <tr css={tableTitle}>
              <th css={bannerIdBox}>배너 ID</th>
              <th css={companyNameBox}>회사 이름</th>
              <th css={titleBox}>배너 제목</th>
              <th css={expireDateBox}>만료 날짜</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {bannerDataArr?.bannerDataArr.map((banner) => (
              <BannerBox key={`ManagerTopBanner${banner.id}`} banner={banner} />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};
