import { FunctionComponent } from "react";
import Image from "next/image";

import moneyPic from "@public/images/global/companyDetail/money.svg";
import healthPic from "@public/images/global/companyDetail/health.svg";
import lifePic from "@public/images/global/companyDetail/life.svg";
import holidayPic from "@public/images/global/companyDetail/holiday.svg";
import facilityPic from "@public/images/global/companyDetail/facility.svg";
import vacationPic from "@public/images/global/companyDetail/vacation.svg";
import growthPic from "@public/images/global/companyDetail/growth.svg";
import etcPic from "@public/images/global/companyDetail/etc.svg";

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
      {menuPictureList.map((pic, index) => {
        return (
          menuDescList[index] && (
            <div css={infoBox} key={`companyWelfareInfo${menuNameList[index]}`}>
              <div css={infoPicture}>
                <Image layout="fill" objectFit="contain" src={pic} alt="급여 복지 관련 로고" />
              </div>
              <h4 css={infoTitle}>{menuNameList[index]}</h4>
              <div css={textBox}>
                {menuDescList[index]?.map((data) => {
                  return (
                    <div key={data} css={infoText}>
                      {data}
                    </div>
                  );
                })}
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};
