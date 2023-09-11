import Image from "next/image";

import { Entries } from "shared-type";

import moneyIcon from "@/public/welfare/money.svg";
import healthIcon from "@/public/welfare/health.svg";
import lifeIcon from "@/public/welfare/life.svg";
import holidayIcon from "@/public/welfare/holiday.svg";
import facilityIcon from "@/public/welfare/facility.svg";
import vacationIcon from "@/public/welfare/vacation.svg";
import growthIcon from "@/public/welfare/growth.svg";
import etcIcon from "@/public/welfare/etc.svg";
import { commonCssObj } from "@/pages/company/detail/style";

import { WelfareInfoProps } from "./type";
import { cssObj } from "./style";

export const WelfareInfo = ({ welfare }: WelfareInfoProps) => {
  const isAllEmpty =
    (Object.entries(welfare) as Entries<typeof welfare>).findIndex(([, value]) => {
      return value && value.length !== 0;
    }) === -1;

  if (isAllEmpty) {
    return <> </>;
  }

  return (
    <section css={commonCssObj.box}>
      <h3 css={commonCssObj.title}>복지 정보</h3>
      <div css={cssObj.welfareWrapper}>
        {welfare.money && welfare.money.length !== 0 && (
          <div css={cssObj.itemWrapper}>
            <Image src={moneyIcon} alt="money" />
            <div>
              <h5 css={cssObj.welfareTitle}>급여</h5>
              <p css={cssObj.welfareDescription}>{welfare.money.join(", ")}</p>
            </div>
          </div>
        )}
        {welfare.health && welfare.health.length !== 0 && (
          <div css={cssObj.itemWrapper}>
            <Image src={healthIcon} alt="health" />
            <div>
              <h5 css={cssObj.welfareTitle}>의료</h5>
              <p css={cssObj.welfareDescription}>{welfare.health.join(", ")}</p>
            </div>
          </div>
        )}
        {welfare.life && welfare.life.length !== 0 && (
          <div css={cssObj.itemWrapper}>
            <Image src={lifeIcon} alt="life" />
            <div>
              <h5 css={cssObj.welfareTitle}>생활</h5>
              <p css={cssObj.welfareDescription}>{welfare.life.join(", ")}</p>
            </div>
          </div>
        )}
        {welfare.holiday && welfare.holiday.length !== 0 && (
          <div css={cssObj.itemWrapper}>
            <Image src={holidayIcon} alt="holiday" />
            <div>
              <h5 css={cssObj.welfareTitle}>명절/경조사</h5>
              <p css={cssObj.welfareDescription}>{welfare.holiday.join(", ")}</p>
            </div>
          </div>
        )}
        {welfare.facility && welfare.facility.length !== 0 && (
          <div css={cssObj.itemWrapper}>
            <Image src={facilityIcon} alt="facility" />
            <div>
              <h5 css={cssObj.welfareTitle}>시설</h5>
              <p css={cssObj.welfareDescription}>{welfare.facility.join(", ")}</p>
            </div>
          </div>
        )}
        {welfare.vacation && welfare.vacation.length !== 0 && (
          <div css={cssObj.itemWrapper}>
            <Image src={vacationIcon} alt="vacation" />
            <div>
              <h5 css={cssObj.welfareTitle}>휴일/휴가</h5>
              <p css={cssObj.welfareDescription}>{welfare.vacation.join(", ")}</p>
            </div>
          </div>
        )}
        {welfare.growth && welfare.growth.length !== 0 && (
          <div css={cssObj.itemWrapper}>
            <Image src={growthIcon} alt="growth" />
            <div>
              <h5 css={cssObj.welfareTitle}>자기계발</h5>
              <p css={cssObj.welfareDescription}>{welfare.growth.join(", ")}</p>
            </div>
          </div>
        )}
        {welfare.etc && welfare.etc.length !== 0 && (
          <div css={cssObj.itemWrapper}>
            <Image src={etcIcon} alt="etc" />
            <div>
              <h5 css={cssObj.welfareTitle}>기타</h5>
              <p css={cssObj.welfareDescription}>{welfare.etc.join(", ")}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
