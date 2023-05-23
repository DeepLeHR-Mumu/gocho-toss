import { FunctionComponent } from "react";
import Image from "next/image";

import { dateConverter } from "shared-util";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import defaultCompanyBg from "shared-image/global/common/default_company_bg.webp";

import { WelfareBox } from "@/pages/business/company/edit/component/welfareBox";
import { cssObj } from "./style";
import { CompanyPartProps } from "./type";

export const CompanyPart: FunctionComponent<CompanyPartProps> = ({ company }) => {
  const { date: foundDate } = dateConverter(company.foundDate);
  const welfareArr: { name: string; data: string[] | null }[] = [
    { name: "급여", data: company.welfare?.money ? company.welfare?.money : null },
    { name: "의료", data: company.welfare?.health ? company.welfare?.health : null },
    { name: "생활", data: company.welfare?.life ? company.welfare?.life : null },
    { name: "시설", data: company.welfare?.facility ? company.welfare?.facility : null },
    { name: "명절", data: company.welfare?.holiday ? company.welfare?.holiday : null },
    { name: "휴가", data: company.welfare?.vacation ? company.welfare?.vacation : null },
    { name: "자기계발", data: company.welfare?.growth ? company.welfare?.growth : null },
    { name: "기타", data: company.welfare?.etc ? company.welfare?.etc : null },
  ];

  return (
    <section css={cssObj.sectionContainer}>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>기업 이름</strong>
        <p css={cssObj.dataBox}>{company.name}</p>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>기업 로고</strong>
        <div css={cssObj.imageContainer}>
          <Image fill src={company.logoUrl || defaultCompanyLogo} alt="기업 로고" />
        </div>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>배경 이미지</strong>
        <div css={cssObj.imageContainer}>
          <Image fill src={company.bgImageUrl || defaultCompanyBg} alt="배경 이미지" />
        </div>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>사업자 번호</strong>
        <p css={cssObj.dataBox}>{company.businessNumber}</p>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>업종</strong>
        <p css={cssObj.dataBox}>{company.industry}</p>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>기업 형태</strong>
        <p css={cssObj.dataBox}>{company.size}</p>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>설립일</strong>
        <p css={cssObj.dataBox}>{foundDate}</p>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>사원수</strong>
        <p css={cssObj.dataBox}>{company.employeeNumber}</p>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>한 줄 소개</strong>
        <p css={cssObj.dataBox}>{company.intro}</p>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>기업 주소</strong>
        <p css={cssObj.dataBox}>{company.location.address}</p>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>노조</strong>
        <div>
          <p css={cssObj.dataBox}>{company.nozo.exists ? "있음" : "없음"}</p>
          <p css={cssObj.dataBox}>{company.nozo.desc}</p>
        </div>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>캐치 URL</strong>
        <p css={cssObj.dataBox}>{company.catchUrl}</p>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>유투브 URL</strong>
        <p css={cssObj.dataBox}>{company.youtubeUrl}</p>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>평균 연봉</strong>
        <p css={cssObj.dataBox}>{company.payAvg}</p>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>초봉</strong>
        <p css={cssObj.dataBox}>{company.payStart}</p>
      </div>
      <div css={cssObj.dataContainer}>
        <strong css={cssObj.dataTitle}>연봉 기타</strong>
        <p css={cssObj.dataBox}>{company.payDesc}</p>
      </div>

      <div css={cssObj.welfareContainer}>
        {welfareArr.map((welfare) => (
          <WelfareBox key={`WelfareBox${welfare.name}`} welfare={welfare} />
        ))}
      </div>
    </section>
  );
};
