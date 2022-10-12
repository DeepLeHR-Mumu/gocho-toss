import type { NextPage } from "next";

import { mainContainer, pageTitle } from "@style/commonStyles";
import { useBannerArr } from "@api/banner/useBannerArr";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import { dateConverter } from "shared-util/date";
import { bannerBox } from "./style";

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
      <section>메인 배너 영역</section>
      <h2 css={pageTitle}>배너 리스트</h2>
      <section>
        <ul>
          {BannerDataArr.bannerDataArr.map((banner) => {
            const { year: endYear, month: endMonth, date: endDate } = dateConverter(banner.endTime);

            return (
              <li css={bannerBox}>
                <div>{banner.id}</div>
                <div>{banner.companyName}</div>
                <div>{banner.title}</div>
                <div>
                  {endYear}-{endMonth}-{endDate}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default MainBanner;
