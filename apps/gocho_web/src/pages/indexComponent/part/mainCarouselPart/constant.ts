import banner01 from "@public/images/global/MainCarousel/open_renewal_banner.jpg";
import banner02 from "@public/images/global/MainCarousel/factory_banner.jpg";
import banner03 from "@public/images/global/MainCarousel/openTalk_banner.jpg";
import banner04 from "@public/images/global/MainCarousel/sinbo_job.jpg";

import checkIconImage from "shared-image/global/common/yellow_check.png";

export const carouselArr = [
  {
    id: 0,
    topDesc: "2022년",
    middleDesc: "신보그룹",
    title: "초대졸 신입사원 공개채용",
    lastDesc: "2022.09.26(월)-10.16(일)",
    backgroundImage: banner04,
    iconImage: checkIconImage,
    backgroundColor: "#88c3a8",
    buttonObj: null,
  },
  {
    id: 1,
    topDesc: "OPEN",
    middleDesc: "고초대졸닷컴",
    title: "웹사이트 전체 리뉴얼",
    lastDesc: "열심히 준비했습니다",
    backgroundImage: banner01,
    iconImage: checkIconImage,
    backgroundColor: "#121012",
    buttonObj: {
      target: "_self" as const,
      text: "자세히보기",
      color: "#fff",
      backgroundColor: "#333",
      url: "/event/renewal",
    },
  },
  {
    id: 2,
    topDesc: "OPEN",
    middleDesc: "고초대졸닷컴",
    title: "공고에서 근무할 공장 정보 바로보기 서비스 시작",
    lastDesc: "이제 공장정보는 공고에서 바로 확인하세요!",
    backgroundImage: banner02,
    iconImage: checkIconImage,
    backgroundColor: "#2961CD",
    buttonObj: null,
  },
  {
    id: 3,
    topDesc: "OPEN",
    middleDesc: "고초대졸닷컴",
    title: "생산/기능직 관련 최대 규모 오픈카톡방",
    lastDesc: "다양한 취업정보 및 꿀팁을 물어보세요",
    backgroundImage: banner03,
    iconImage: checkIconImage,
    backgroundColor: "#fbc540",
    buttonObj: {
      target: "_blank" as const,
      text: "오픈카톡 바로가기",
      color: "#fff",
      backgroundColor: "#333",
      url: "https://open.kakao.com/o/gxquBCud",
    },
  },
];
