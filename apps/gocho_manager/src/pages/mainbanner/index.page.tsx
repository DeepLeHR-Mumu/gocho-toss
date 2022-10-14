import type { NextPage } from "next";

import { mainContainer, pageTitle } from "@style/commonStyles";
import { useBannerArr } from "@api/banner/useBannerArr";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import { dateConverter } from "shared-util/date";
import {
  sectionContainer,
  titleBox,
  bannerBox,
  bannerId,
  companyName,
  title,
  expireDate,
  deleteBannerButton,
} from "./style";

const MainBanner: NextPage = () => {
  const { data: BannerDataArr, isLoading, isError } = useBannerArr({ type: 0 });

  if (!BannerDataArr || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>메인 배너 업로드</h2>
      <section css={sectionContainer}>메인 배너 영역</section>
      <h2 css={pageTitle}>배너 리스트</h2>

      <section css={sectionContainer}>
        <table>
          <tr css={titleBox}>
            <th css={bannerId}>배너 ID</th>
            <th css={companyName}>회사 이름</th>
            <th css={title}>배너 제목</th>
            <th css={expireDate}>만료 날짜</th>
            <th> </th>
          </tr>
          {BannerDataArr.bannerDataArr.map((banner) => {
            const { year: endYear, month: endMonth, date: endDate } = dateConverter(banner.endTime);

            return (
              <tr css={bannerBox}>
                <td css={bannerId}>{banner.id}</td>
                <td css={companyName}>{banner.companyName}</td>
                <td css={title}>{banner.title}</td>
                <td css={expireDate}>
                  {endYear}-{endMonth}-{endDate}
                </td>
                <td>
                  <button css={deleteBannerButton} type="button">
                    배너 삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </section>
    </main>
  );
};

export default MainBanner;
