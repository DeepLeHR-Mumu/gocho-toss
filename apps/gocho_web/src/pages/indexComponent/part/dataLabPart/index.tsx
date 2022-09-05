import { FunctionComponent } from "react";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";

import { DATALAB_DETAIL } from "@constant/internalURL";
import { Layout } from "@component/layout";

import { CompanyPassDataCard } from "./component/companyPassDataCard";
import { dataLabCompanyArr, settings } from "./contant";
import { dataLabWrapper, title, textPoint, dataLabContainer, companyLogoBox, dataLabDesc, linkButton } from "./style";

export const DataLabPart: FunctionComponent = () => {
  return (
    <section css={dataLabWrapper}>
      <Layout>
        <div css={title}>
          <h2>
            합격한 인재들의 <span css={textPoint}>데이터 정보</span> 확인하기
          </h2>
        </div>

        <article css={dataLabContainer}>
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
        </article>
      </Layout>
    </section>
  );
};
