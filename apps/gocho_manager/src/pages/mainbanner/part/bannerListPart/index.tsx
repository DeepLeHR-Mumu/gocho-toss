import { FunctionComponent } from "react";
import { useBannerArr } from "shared-api/banner/useBannerArr";
import { bannerId, companyName, expireDate, sectionContainer, title, titleBox } from "./style";

import { BannerBox } from "../../component/bannerBox";

export const BannerListPart: FunctionComponent = () => {
  const { data: bannerDataArr } = useBannerArr({ type: "M" });

  return (
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
          {bannerDataArr?.bannerDataArr.map((banner) => {
            return <BannerBox key={`ManagerMainBanner${banner.id}`} banner={banner} />;
          })}
        </tbody>
      </table>
    </section>
  );
};
