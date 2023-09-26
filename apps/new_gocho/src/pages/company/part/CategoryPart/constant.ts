import semiconductorIcon from "@/public/categoryIcon/semiconductor.svg";
import bioIcon from "@/public/categoryIcon/bio.svg";
import chemicalIcon from "@/public/categoryIcon/chemical.svg";
import displayIcon from "@/public/categoryIcon/display.svg";
import electronicMaterialIcon from "@/public/categoryIcon/electronicMaterials.svg";
import petrochemiRefineIcon from "@/public/categoryIcon/petrochmicalRefine.svg";
import secondBetteryIcon from "@/public/categoryIcon/secondBattery.svg";
import pharmaceuticalIcon from "@/public/categoryIcon/pharmaceutical.svg";
import { CategoryIcon } from "./type";

export const topCategoryIconArr: CategoryIcon[] = [
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
];

export const bottomCategoryIconArr: CategoryIcon[] = [
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
  .concat(topCategoryIconArr)
  .concat(bottomCategoryIconArr)
  .map((item) => ({ categoryText: item.categoryText }));
