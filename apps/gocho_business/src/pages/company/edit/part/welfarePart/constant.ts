import { PostWelfareSubmitValues } from "./type";

export const WELFARE_DESC_OBJ: {
  [key in keyof PostWelfareSubmitValues]: {
    index: number;
    name: string;
    desc: string;
  };
} = {
  money: { index: 0, name: "급여", desc: "성과급 및 추가 수당, 연금과 관련된 정보들이 포함됩니다" },
  health: { index: 1, name: "의료", desc: "건강검진 또는 의료비, 헬스비 등이 포함됩니다" },
  life: { index: 2, name: "생활", desc: "식대/학자금/문화생활비/통신비/복지포인트/사택/주차비 등이 포함됩니다" },
  holiday: { index: 3, name: "명절/경조사", desc: "명절/생일/결혼기념일/장기근속/웰컴 선물 등이 포함됩니다" },
  facility: { index: 4, name: "시설", desc: "휴게실/수면실/장애인 복지시설/콘도 이용권/업무기기 등이 포함됩니다" },
  vacation: { index: 5, name: "휴가", desc: "리프레시 휴가/창립일 휴무/출산・육아 등이 포함됩니다" },
  growth: { index: 6, name: "자기계발", desc: "교육/연수/도서/자기계발비 등이 포함됩니다" },
  etc: { index: 7, name: "기타", desc: "동아리/동호회/제휴 등의 기타 복지가 포함됩니다" },
};
