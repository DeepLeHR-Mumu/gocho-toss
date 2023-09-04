import { CategoryIcon } from "./type";

import semiconductorIcon from "@/public/categoryIcon/semiconductor.svg";
import bioIcon from "@/public/categoryIcon/bio.svg";
import chemicalIcon from "@/public/categoryIcon/chemical.svg";
import displayIcon from "@/public/categoryIcon/display.svg";
import electronicMaterialIcon from "@/public/categoryIcon/electronicMaterials.svg";
import petrochemiRefineIcon from "@/public/categoryIcon/petrochmicalRefine.svg";
import secondBetteryIcon from "@/public/categoryIcon/secondBattery.svg";
import pharmaceuticalIcon from "@/public/categoryIcon/pharmaceutical.svg";

export const topCategoryIconArr: CategoryIcon[] = [
  {
    key: 1,
    src: petrochemiRefineIcon,
    categoryText: "정유석화",
  },
  {
    key: 2,
    src: chemicalIcon,
    categoryText: "화학",
  },
  {
    key: 3,
    src: semiconductorIcon,
    categoryText: "반도체",
  },
  {
    key: 4,
    src: bioIcon,
    categoryText: "바이오",
  },
];

export const bottomCategoryIconArr: CategoryIcon[] = [
  {
    key: 5,
    src: secondBetteryIcon,
    categoryText: "2차전지",
  },
  {
    key: 6,
    src: pharmaceuticalIcon,
    categoryText: "제약",
  },
  {
    key: 7,
    src: displayIcon,
    categoryText: "디스플레이",
  },
  {
    key: 8,
    src: electronicMaterialIcon,
    categoryText: "전자재료",
  },
];
