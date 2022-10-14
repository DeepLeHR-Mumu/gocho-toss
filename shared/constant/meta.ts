import { CDN_URL } from "./externalURL";
import {
  MAIN_URL,
  JOBS_LIST_URL,
  JOBS_DETAIL_URL,
  JOBS_EXPLIST_URL,
  COMMUNITY_POSTINGS_LIST_URL,
  COMMUNITY_TIPS_LIST_URL,
  COMPANY_DETAIL_URL,
  SPEC_DETAIL_URL,
  SPEC_MY_URL,
  SPEC_REGISTER_URL,
  SPEC_URL,
  DATALAB_DETAIL,
  MYPAGE_URL,
  TOS_URL,
  PRIVACY_URL,
} from "./internalURL";

const defaultOgImage = `${CDN_URL}og_image/default.png`;
const companyOgImage = `${CDN_URL}og_image/company.png`;
const jdOgImage = `${CDN_URL}og_image/jd.png`;
const specOgImage = `${CDN_URL}og_image/spec.png`;

const defaultKeyword =
  "고초대졸, 고초대졸닷컴, 초대졸취업, 생산직, 현장직, 기능직, 고졸, 초대졸, 전문대졸, 채용정보, 공장정보, 기업정보, 복지, 통근버스, 기숙사, 노조, 현대모비스, 현대두산인프라코어, sk하이닉스, 유한양행, 삼성바이오로직스, sk이노베이션, 버슘머트리얼즈, 공무, 메인트, sk트리캠, 고졸채용, 오비맥주, ls전선, lg에너지솔루션, 생산직채용, 덕양산업, 앰코, 미원상사, 해성디에스";
export const DOMAIN = "https://xn--299a59id5upfe.com";

export const META_EVENT = {
  pageName: "고초대졸 리뉴얼",
  title: "고초대졸닷컴 | 새로워진 고초대졸닷컴을 만나보세요",
  desc: "생산직 취업, 고초대졸닷컴 하나면 충분합니다. 채용공고부터 공장정보, 커뮤니티와 내 스펙 평가까지! 오직 고졸 초대졸 전문대졸만을 위한 전문 취업플랫폼, 고초대졸닷컴.",
  keyword: defaultKeyword,
  ogTitle: "고초대졸닷컴 | 생산직 취업의 새로운 기준",
  ogDesc: "오직 고졸 초대졸 전문대졸만을 위한 전문 취업플랫폼",
  path: "/event/renewal",
};

export const META_TOS = {
  pageName: "이용약관",
  title: "고초대졸닷컴 | 생산직 취업의 새로운 기준",
  desc: "생산직 취업, 고초대졸닷컴 하나면 충분합니다. 채용공고부터 공장정보, 커뮤니티와 내 스펙 평가까지! 오직 고졸 초대졸 전문대졸만을 위한 전문 취업플랫폼, 고초대졸닷컴.",
  keyword: defaultKeyword,
  ogTitle: "고초대졸닷컴 | 생산직 취업의 새로운 기준",
  ogDesc: "오직 고졸 초대졸 전문대졸만을 위한 전문 취업플랫폼",
  path: TOS_URL,
};

export const META_PRIVACY = {
  pageName: "개인정보 처리방침",
  title: "고초대졸닷컴 | 생산직 취업의 새로운 기준",
  desc: "생산직 취업, 고초대졸닷컴 하나면 충분합니다. 채용공고부터 공장정보, 커뮤니티와 내 스펙 평가까지! 오직 고졸 초대졸 전문대졸만을 위한 전문 취업플랫폼, 고초대졸닷컴.",
  keyword: defaultKeyword,
  ogTitle: "고초대졸닷컴 | 생산직 취업의 새로운 기준",
  ogDesc: "오직 고졸 초대졸 전문대졸만을 위한 전문 취업플랫폼",
  path: PRIVACY_URL,
};

export const META_INDEX = {
  pageName: "홈",
  title: "고초대졸닷컴 | 생산직 취업의 새로운 기준",
  desc: "생산직 취업, 고초대졸닷컴 하나면 충분합니다. 채용공고부터 공장정보, 커뮤니티와 내 스펙 평가까지! 오직 고졸 초대졸 전문대졸만을 위한 전문 취업플랫폼, 고초대졸닷컴.",
  keyword: defaultKeyword,
  ogTitle: "고초대졸닷컴 | 생산직 취업의 새로운 기준",
  ogDesc: "오직 고졸 초대졸 전문대졸만을 위한 전문 취업플랫폼",
  path: MAIN_URL,
  ogImage: defaultOgImage,
};

export const META_JD_LIST = {
  pageName: "공고 리스트",
  title: "실시간 생산직 채용공고 - 고초대졸닷컴",
  desc: "고초대졸닷컴은 생산직 현장직 기능직에 특화된 자세한 채용공고를 제공합니다. 어디에서도 볼 수 없는 빠르고 정확한 생산직 공고를 느껴보세요! 생산직 취업의 새로운 기준, 고초대졸닷컴.",
  keyword: defaultKeyword,
  ogTitle: "실시간 생산직 채용공고 - 고초대졸닷컴",
  ogDesc: "어디에서도 볼 수 없는 빠르고 정확한 생산직 채용공고를 느껴보세요! ",
  path: JOBS_LIST_URL,
  ogImage: jdOgImage,
};

export const META_JD_DETAIL = {
  pageName: "공고상세",
  title: " - 고초대졸닷컴",
  desc: "",
  keyword: defaultKeyword,
  ogTitle: "생산직 채용공고 - 고초대졸닷컴",
  ogDesc: "",
  path: JOBS_DETAIL_URL,
  ogImage: jdOgImage,
};

export const META_JD_EXPLIST = {
  pageName: "만료공고 리스트",
  title: "만료된 채용공고 - 고초대졸닷컴",
  desc: "생산직 취업정보 찾으러 이리저리 헤매지말고 고초대졸닷컴 만료공고로 취업 준비 끝! 지금까지 어디에서도 볼 수 없었던 생산직 만료공고를 이곳에서 확인해보세요",
  keyword: defaultKeyword,
  ogTitle: "만료된 채용공고 - 고초대졸닷컴",
  ogDesc: "지금까지 어디에서도 볼 수 없었던 생산직 만료공고를 이곳에서 확인해보세요",
  path: JOBS_EXPLIST_URL,
  ogImage: jdOgImage,
};

export const META_COMPANY_INFO = {
  pageName: "기업 정보",
  title: "> 기업/공장 정보 - 고초대졸닷컴",
  desc: "생산직의 연봉/복지 정보, 노조정보, 공장별 통근버스/기숙사에 대한 자세한 정보를 한눈에 확인해보세요! 생산직 취업의 새로운 기준, 고초대졸닷컴.",
  keyword: ` ,공장,채용,연봉,복지,통근버스,노조,기숙사 ${defaultKeyword}`,
  ogTitle: "기업/공장 정보 - 고초대졸닷컴",
  ogDesc: "생산직의 연봉/복지 정보, 노조정보, 공장별 통근버스/기숙사에 대한 자세한 정보를 한눈에 확인해보세요!",
  path: COMPANY_DETAIL_URL,
  ogImage: companyOgImage,
};

export const META_COMPANY_RECRUIT = {
  pageName: "기업 채용공고",
  title: "> 생산직 채용공고 - 고초대졸닷컴",
  desc: "생산직 채용공고를 한눈에 확인해보세요! 생산직 취업의 새로운 기준, 고초대졸닷컴",
  keyword: `,공장,채용,연봉,복지,통근버스,노조,기숙사 ${defaultKeyword}`,
  ogTitle: "생산직 채용공고 - 고초대졸닷컴",
  ogDesc: "생산직 채용공고를 한눈에 확인해보세요!",
  path: COMPANY_DETAIL_URL,
  ogImage: companyOgImage,
};

export const META_SPEC_LIST = {
  pageName: "생산직 스펙평가 리스트",
  title: "생산직 스펙평가 리스트 - 고초대졸닷컴",
  desc: "내 스펙은 몇점일까요? 고초대졸닷컴에서만 운영중인 생산직 스펙평가 서비스로 내 스펙으로 어떤 기업에 갈 수 있는지, 다른 생산직 구직자들의 스펙은 어떤지 확인해보세요!",
  keyword: `생산직, 스펙, 평가, 자격증 ${defaultKeyword}`,
  ogTitle: "생산직 스펙평가 리스트 - 고초대졸닷컴",
  ogDesc: "내 스펙으로 어떤 기업에 갈 수 있는지, 다른 생산직 구직자들의 스펙은 어떤지 확인해보세요!",
  path: SPEC_URL,
  ogImage: specOgImage,
};

// LATER : 배포 후 검색 가능하게 변경
export const META_SPEC_DETAIL = {
  pageName: "스펙 디테일",
  title: "님의 생산직 스펙평가 - 고초대졸닷컴",
  desc: "",
  keyword: "나이, 성별, 희망직무, 희망업종, 보유 자격증 목록, 스펙, 평가",
  ogTitle: "님의 생산직 스펙평가 - 고초대졸닷컴",
  ogDesc: "",
  path: SPEC_DETAIL_URL,
  ogImage: specOgImage,
};

export const META_SPEC_MY = {
  pageName: "나의 스펙 목록",
  title: "내가 작성한 스펙 - 고초대졸닷컴",
  desc: "",
  keyword: "",
  ogTitle: "",
  ogDesc: "",
  path: SPEC_MY_URL,
  ogImage: specOgImage,
};

export const META_SPEC_REGISTER = {
  pageName: "내 스펙 등록하기",
  title: "내 스펙 등록하기 - 고초대졸닷컴",
  desc: "",
  keyword: "",
  ogTitle: "",
  ogDesc: "",
  path: SPEC_REGISTER_URL,
  ogImage: specOgImage,
};

export const META_DATA_LAB = {
  title: "",
  desc: "",
  keyword: "",
  ogTitle: "",
  ogDesc: "",
  path: DATALAB_DETAIL,
};

export const META_COMMUNITY_TIP = {
  pageName: "생산직 취업꿀팁",
  title: "생산직 취업꿀팁 - 고초대졸닷컴",
  desc: "생산직 취업, 혼자 준비하기 막막하셨죠? 바로 여기, 고수들의 취업꿀팁을 다 모았습니다! 어디에서도 구할 수 없는 고초대졸 취업꿀팁! 생산직 취업의 새로운 기준, 고초대졸닷컴.",
  keyword: defaultKeyword,
  ogTitle: "생산직 취업꿀팁 - 고초대졸닷컴",
  ogDesc: "고수들의 취업꿀팁을 다 모았습니다! 어디에서도 구할 수 없는 고초대졸 취업꿀팁!",
  path: COMMUNITY_TIPS_LIST_URL,
};

// LATER : 배포후 페이지 변경 후 진행
export const META_COMMUNITY_TIP_DETAIL = {
  title: "취업꿀팁 > {꿀팁제목} - 고초대졸닷컴 취업꿀팁",
  desc: "",
  keyword: "",
  ogTitle: "",
  ogDesc: "",
  path: COMMUNITY_TIPS_LIST_URL,
};

export const META_COMMUNITY_POSTING = {
  pageName: "생산직 자유게시판",
  title: "생산직 자유게시판 - 고초대졸닷컴",
  desc: "생산직만을 위한 커뮤니티, 고초대졸닷컴이 만들어나갑니다. 나 혼자 갖고 있던 정보와 고민을 다른 구직자들과 나눠보세요! 생산직 취업의 새로운 기준, 고초대졸닷컴.",
  keyword: defaultKeyword,
  ogTitle: "생산직 자유게시판 - 고초대졸닷컴",
  ogDesc: "나 혼자 갖고 있던 정보와 고민을 다른 구직자들과 나눠보세요!",
  path: COMMUNITY_POSTINGS_LIST_URL,
};

// LATER : 배포후 페이지 변경 후 진행
export const META_COMMUNITY_POSTING_DETAIL = {
  pageName: "포스팅 상세보기",
  title: "자유게시판 > {포스팅 제목} - 고초대졸닷컴",
  desc: "",
  keyword: "",
  ogTitle: "",
  ogDesc: "",
  path: COMMUNITY_POSTINGS_LIST_URL,
};

// LATER : 배포후 페이지 변경 후 진행
export const META_COMMUNITY_POSTING_WRITE = {
  pageName: "포스팅 작성하기",
  title: "자유게시판 > 글 작성하기 - 고초대졸닷컴",
  desc: "",
  keyword: "",
  ogTitle: "",
  ogDesc: "",
  path: COMMUNITY_POSTINGS_LIST_URL,
};

export const META_MYPAGE = {
  pageName: "마이페이지",
  title: "마이페이지 - 고초대졸닷컴",
  desc: "",
  keyword: "",
  ogTitle: "",
  ogDesc: "",
  path: MYPAGE_URL,
};
