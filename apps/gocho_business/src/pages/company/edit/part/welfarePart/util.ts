import { PostWelfareSubmitValues } from "./type";

export const welfareArrCreator = (welfareObj: PostWelfareSubmitValues | null) => {
  if (!welfareObj) {
    const welfareArr = [
      {
        welfareValueArr: null,
        registerKey: "welfare.money",
        title: "급여",
        desc: "성과급 및 추가 수당, 연금과 관련된 정보들이 포함됩니다",
      },
      {
        welfareValueArr: null,
        registerKey: "welfare.health",
        title: "의료",
        desc: "건강검진 또는 의료비, 헬스비 등이 포함됩니다",
      },
      {
        welfareValueArr: null,
        registerKey: "welfare.life",
        title: "생활",
        desc: "식대/학자금/문화생활비/통신비/복지포인트/사택/주차비 등이 포함됩니다",
      },
      {
        welfareValueArr: null,
        registerKey: "welfare.holiday",
        title: "명절/경조사",
        desc: "명절/생일/결혼기념일/장기근속/웰컴 선물 등이 포함됩니다",
      },
      {
        welfareValueArr: null,
        registerKey: "welfare.facility",
        title: "시설",
        desc: "휴게실/수면실/장애인 복지시설/콘도 이용권/업무기기 등이 포함됩니다",
      },
      {
        welfareValueArr: null,
        registerKey: "welfare.vacation",
        title: "휴일/휴가",
        desc: "리프레시 휴가/창립일 휴무/출산・육아 등이 포함됩니다",
      },
      {
        welfareValueArr: null,
        registerKey: "welfare.growth",
        title: "자기계발",
        desc: "교육/연수/도서/자기계발비 등이 포함됩니다",
      },
      {
        welfareValueArr: null,
        registerKey: "welfare.etc",
        title: "기타",
        desc: "동아리/동호회/제휴 등의 기타 복지가 포함됩니다",
      },
    ] as const;

    return { welfareArr };
  }
  const welfareArr = [
    {
      welfareValueArr: welfareObj.money,
      registerKey: "welfare.money",
      title: "급여",
      desc: "성과급 및 추가 수당, 연금과 관련된 정보들이 포함됩니다",
    },
    {
      welfareValueArr: welfareObj.health,
      registerKey: "welfare.health",
      title: "의료",
      desc: "건강검진 또는 의료비, 헬스비 등이 포함됩니다",
    },
    {
      welfareValueArr: welfareObj.life,
      registerKey: "welfare.life",
      title: "생활",
      desc: "식대/학자금/문화생활비/통신비/복지포인트/사택/주차비 등이 포함됩니다",
    },
    {
      welfareValueArr: welfareObj.holiday,
      registerKey: "welfare.holiday",
      title: "명절/경조사",
      desc: "명절/생일/결혼기념일/장기근속/웰컴 선물 등이 포함됩니다",
    },
    {
      welfareValueArr: welfareObj.facility,
      registerKey: "welfare.facility",
      title: "시설",
      desc: "휴게실/수면실/장애인 복지시설/콘도 이용권/업무기기 등이 포함됩니다",
    },
    {
      welfareValueArr: welfareObj.vacation,
      registerKey: "welfare.vacation",
      title: "휴일/휴가",
      desc: "리프레시 휴가/창립일 휴무/출산・육아 등이 포함됩니다",
    },
    {
      welfareValueArr: welfareObj.growth,
      registerKey: "welfare.growth",
      title: "자기계발",
      desc: "교육/연수/도서/자기계발비 등이 포함됩니다",
    },
    {
      welfareValueArr: welfareObj.etc,
      registerKey: "welfare.etc",
      title: "기타",
      desc: "동아리/동호회/제휴 등의 기타 복지가 포함됩니다",
    },
  ] as const;

  return { welfareArr };
};
