import { FunctionComponent } from "react";
import Image from "next/image";

import { dateConverter } from "shared-util";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { bannerBox, bannerImgBox } from "./style";
import { BannerBoxProps } from "./type";

export const BannerBox: FunctionComponent<BannerBoxProps> = ({ banner }) => {
  const { year: startYear, month: startMonth, date: startDate } = dateConverter(banner.startTime);
  const { year: endYear, month: endMonth, date: endDate } = dateConverter(banner.endTime);

  return (
    <li css={bannerBox}>
      <div>{banner.id}</div>
      <div css={bannerImgBox}>
        <Image src={banner.imageUrl || defaultCompanyLogo} alt="" fill />
        dsdfdsdfdsdfdsdfdsdfdsdfdsdfdsdfdsdfdsdfdsdfdsdfdsdfdsdfdsdfdsdfdsdfdsdfdsdfdsdfdsdfdsdf
      </div>
      <div>
        {startYear}-{startMonth}-{startDate} ~ {endYear}-{endMonth}-{endDate}
      </div>
    </li>
  );
};
