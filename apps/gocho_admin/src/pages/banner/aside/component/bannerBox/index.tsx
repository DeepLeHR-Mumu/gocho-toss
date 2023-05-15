import { FunctionComponent } from "react";
import Image from "next/image";

import { dateConverter } from "shared-util";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { bannerBox, bannerImgBox } from "./style";
import { BannerBoxProps } from "./type";

export const BannerBox: FunctionComponent<BannerBoxProps> = ({ banner }) => {
  const { date: startDate } = dateConverter(String(banner.startTime));
  const { date: endDate } = dateConverter(String(banner.endTime));

  return (
    <li css={bannerBox}>
      <div>{banner.id}</div>
      <div css={bannerImgBox}>
        <Image src={banner.imageUrl || defaultCompanyLogo} alt="" fill />
      </div>
      <div>
        {startDate} ~ {endDate}
      </div>
    </li>
  );
};
