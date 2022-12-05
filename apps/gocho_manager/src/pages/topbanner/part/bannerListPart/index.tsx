import { FunctionComponent } from "react";
import { useBannerArr } from "shared-api/banner/useBannerArr";

import { bannerIdBox, companyNameBox, expireDateBox, sectionContainer, tableTitle, titleBox } from "./style";
import { BannerBox } from "../../component/bannerBox";

export const BannerListPart: FunctionComponent = () => {
  const { data: bannerDataArr } = useBannerArr({ type: "T" });

  return (
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
          {bannerDataArr?.bannerDataArr.map((banner) => {
            return <BannerBox key={`ManagerTopBanner${banner.id}`} banner={banner} />;
          })}
        </tbody>
      </table>
    </section>
  );
};
