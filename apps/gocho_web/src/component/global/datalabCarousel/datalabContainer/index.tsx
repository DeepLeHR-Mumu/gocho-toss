import { FunctionComponent } from "react";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";

import { DATALAB_DETAIL } from "shared-constant/internalURL";
import { CompanyPassDataCard } from "../companyPassDataCard";
import { dataLabCompanyArr, settings } from "./contant";
import { textPoint, dataLabContainer, companyLogoBox, dataLabDesc, dataLabLayout, linkButton } from "./style";

export const DataLabContainer: FunctionComponent = () => {
  return (
    <article css={dataLabContainer}>
      <div css={dataLabLayout}>
        <Slider {...settings} css={companyLogoBox}>
          {dataLabCompanyArr.map((company) => {
            return (
              <CompanyPassDataCard key={company.id} companyName={company.companyName} companyLogo={company.logoSrc} />
            );
          })}
        </Slider>
        <p css={dataLabDesc}>
          <span css={textPoint}>합격 데이터</span>가 궁금하다면
        </p>
        <Link href={DATALAB_DETAIL} passHref>
          <a css={linkButton}>
            데이터랩 바로가기 <BsChevronRight />
          </a>
        </Link>
      </div>
    </article>
  );
};
