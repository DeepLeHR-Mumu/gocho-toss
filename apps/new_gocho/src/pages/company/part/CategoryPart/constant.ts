import semiconductorIcon from "@/public/image/company/categoryIcon/semiconductor.svg";
import bioIcon from "@/public/image/company/categoryIcon/bio.svg";
import chemicalIcon from "@/public/image/company/categoryIcon/chemical.svg";
import displayIcon from "@/public/image/company/categoryIcon/display.svg";
import electronicMaterialIcon from "@/public/image/company/categoryIcon/electronicMaterials.svg";
import petrochemiRefineIcon from "@/public/image/company/categoryIcon/petrochmicalRefine.svg";
import secondBetteryIcon from "@/public/image/company/categoryIcon/secondBattery.svg";
import pharmaceuticalIcon from "@/public/image/company/categoryIcon/pharmaceutical.svg";
import { CategoryIcon } from "./type";

export const categoryIconArr: CategoryIcon[] = [
  {
    src: petrochemiRefineIcon,
    categoryText: "정유석화",
  },
  {
    src: chemicalIcon,
    categoryText: "화학",
  },
  {
    src: semiconductorIcon,
    categoryText: "반도체",
  },
  {
    src: bioIcon,
    categoryText: "바이오",
  },
  {
    src: secondBetteryIcon,
    categoryText: "2차전지",
  },
  {
    src: pharmaceuticalIcon,
    categoryText: "제약",
  },
  {
    src: displayIcon,
    categoryText: "디스플레이",
  },
  {
    src: electronicMaterialIcon,
    categoryText: "전자재료",
  },
];

type CategoryText = Array<{ categoryText: string }>;

export const categoryArr: CategoryText = [{ categoryText: "전체기업" }]
  .concat(categoryIconArr)
  .map((item) => ({ categoryText: item.categoryText }));
