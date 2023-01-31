import { BiRocket, BiBuildings } from "react-icons/bi";
import { TbBuildingFactory2 } from "react-icons/tb";
import { FiUsers, FiUser, FiHeadphones } from "react-icons/fi";

import { INTERNAL_URL } from "@/constants/url";

export const linkArr = [
  { name: "공고", url: INTERNAL_URL.JD_LIST, icon: BiRocket },
  { name: "공장", url: INTERNAL_URL.FACTORY_LIST, icon: TbBuildingFactory2 },
  { name: "기업 정보 수정", url: INTERNAL_URL.COMPANY_EDIT, icon: BiBuildings },
  { name: "기업 계정 목록", url: INTERNAL_URL.RECRUITER_LIST, icon: FiUsers },
  { name: "회원정보", url: INTERNAL_URL.MY_PAGE, icon: FiUser },
  { name: "고객센터", url: INTERNAL_URL.HELP, icon: FiHeadphones },
] as const;
