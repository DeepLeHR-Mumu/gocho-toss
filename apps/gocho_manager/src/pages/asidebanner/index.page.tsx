import type { NextPage } from "next";
import { mainContainer, pageTitle } from "@style/commonStyles";
import Image from "next/image";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { useBannerArr } from "@api/banner/useBannerArr";
import { ErrorScreen, LoadingScreen } from "@component/screen";
import { dateConverter } from "shared-util/date";

import { bannerBox, bannerImgBox } from "./style";

const AsideBanner: NextPage = () => {
  const { data: BannerDataArr, isLoading, isError } = useBannerArr({ type: 2 });

  if (!BannerDataArr || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>사이드 배너 업로드</h2>
      <section>배너 업로드 영역</section>
      <h2 css={pageTitle}>배너 리스트</h2>
      <section>
        {BannerDataArr.bannerDataArr.map((banner) => {
          const { year: startYear, month: startMonth, date: startDate } = dateConverter(banner.startTime);
          const { year: endYear, month: endMonth, date: endDate } = dateConverter(banner.endTime);

          return (
            <li key={banner.id} css={bannerBox}>
              <div>{banner.id}</div>
              <div css={bannerImgBox}>
                <Image src={banner.image || defaultCompanyLogo} alt="" layout="fill" objectFit="contain" />
              </div>
              <div>
                {startYear}-{startMonth}-{startDate} ~ {endYear}-{endMonth}-{endDate}
              </div>
            </li>
          );
        })}
      </section>
    </main>
  );
};

export default AsideBanner;
