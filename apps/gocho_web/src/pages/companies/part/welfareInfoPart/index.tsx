import { FunctionComponent } from "react";
import Image from "next/image";

import moneyPic from "shared-image/page/companyDetail/money.svg";
import healthPic from "shared-image/page/companyDetail/health.svg";
import lifePic from "shared-image/page/companyDetail/life.svg";
import holidayPic from "shared-image/page/companyDetail/holiday.svg";
import facilityPic from "shared-image/page/companyDetail/facility.svg";
import vacationPic from "shared-image/page/companyDetail/vacation.svg";
import growthPic from "shared-image/page/companyDetail/growth.svg";
import etcPic from "shared-image/page/companyDetail/etc.svg";

import { InvisibleH3 } from "shared-ui/common/atom/invisibleH3";

import { WelfareInfoPartProps } from "./type";

import { infoContainer, infoBox, infoPicture, infoTitle, textBox, infoText } from "./style";

export const WelfareInfoPart: FunctionComponent<WelfareInfoPartProps> = ({ companyData }) => {
  const menuPictureList = [moneyPic, healthPic, lifePic, holidayPic, facilityPic, vacationPic, growthPic, etcPic];

  const menuNameList = ["급여", "의료", "생활", "명절/경조사", "시설", "휴일/휴가", "자기계발", "기타"];

  const menuDescList = [
    companyData.welfare.money,
    companyData.welfare.health,
    companyData.welfare.life,
    companyData.welfare.holiday,
    companyData.welfare.facility,
    companyData.welfare.vacation,
    companyData.welfare.growth,
    companyData.welfare.etc,
  ];

  return (
    <div css={infoContainer}>
      <InvisibleH3 title="복지정보" />
      {menuPictureList.map((pic, index) => {
        return (
          menuDescList[index] && (
            <div css={infoBox} key={`companyWelfareInfo${menuNameList[index]}`}>
              <div css={infoPicture}>
                <Image layout="fill" objectFit="contain" src={pic} alt="급여 복지 관련 로고" />
              </div>
              <strong css={infoTitle}>{menuNameList[index]}</strong>
              <ul css={textBox}>
                {menuDescList[index]?.map((data) => {
                  return (
                    <li key={data} css={infoText}>
                      {data}
                    </li>
                  );
                })}
              </ul>
            </div>
          )
        );
      })}
    </div>
  );
};
