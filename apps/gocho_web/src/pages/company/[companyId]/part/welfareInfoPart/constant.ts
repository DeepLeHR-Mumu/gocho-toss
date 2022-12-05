import moneyPic from "shared-image/page/companyDetail/money.svg";
import healthPic from "shared-image/page/companyDetail/health.svg";
import lifePic from "shared-image/page/companyDetail/life.svg";
import holidayPic from "shared-image/page/companyDetail/holiday.svg";
import facilityPic from "shared-image/page/companyDetail/facility.svg";
import vacationPic from "shared-image/page/companyDetail/vacation.svg";
import growthPic from "shared-image/page/companyDetail/growth.svg";
import etcPic from "shared-image/page/companyDetail/etc.svg";

export const setWelfareArr = (data: {
  money: string[] | null;
  health: string[] | null;
  life: string[] | null;
  holiday: string[] | null;
  facility: string[] | null;
  vacation: string[] | null;
  growth: string[] | null;
  etc: string[] | null;
}) => {
  return [
    {
      title: "급여",
      value: data.money,
      image: moneyPic,
    },
    {
      title: "의료",
      value: data.health,
      image: healthPic,
    },
    {
      title: "생활",
      value: data.life,
      image: lifePic,
    },
    {
      title: "명절/경조사",
      value: data.holiday,
      image: holidayPic,
    },
    {
      title: "시설",
      value: data.facility,
      image: facilityPic,
    },
    {
      title: "휴일/휴가",
      value: data.vacation,
      image: vacationPic,
    },
    {
      title: "자기계발",
      value: data.growth,
      image: growthPic,
    },
    {
      title: "기타",
      value: data.etc,
      image: etcPic,
    },
  ];
};
