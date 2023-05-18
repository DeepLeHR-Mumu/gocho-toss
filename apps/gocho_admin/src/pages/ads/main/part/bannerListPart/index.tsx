import { FunctionComponent } from "react";

import { pageTitle } from "@/style/commonStyles";
import { useMainBannerArr } from "@/api";

import { LoadingScreen, Pagination } from "@/component";
import { INTERNAL_URL } from "@/constant";
import { cssObj } from "./style";
import { BannerBox } from "../../component/bannerBox";

export const BannerListPart: FunctionComponent = () => {
  const { data: bannerDataArr } = useMainBannerArr();

  if (!bannerDataArr) {
    return <LoadingScreen />;
  }

  return (
    <>
      <h2 css={pageTitle}>배너 리스트</h2>
      <section css={cssObj.sectionContainer}>
        <table>
          <thead>
            <tr css={cssObj.titleBox}>
              <th css={cssObj.bannerId}>ID</th>
              <th css={cssObj.expireDate}>만료 날짜</th>
              <th css={cssObj.pcImagePreview}>PC 미리보기</th>
              <th css={cssObj.mobileImagePreview}>모바일 미리보기</th>
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
      <Pagination totalPage={bannerDataArr?.pageResult.totalPages} url={INTERNAL_URL.MAIN_AD_URL} />
    </>
  );
};
