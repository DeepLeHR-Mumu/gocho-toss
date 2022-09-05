import { UseFormGetValues, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { PostingValues } from "../../part/listPart/type";

export interface FilterProps {
  register: UseFormRegister<PostingValues>;
  watch: UseFormWatch<PostingValues>;
  setValue: UseFormSetValue<PostingValues>;
  getValues: UseFormGetValues<PostingValues>;
}

export type filterMenuDef = "학력" | "근무지" | "경력" | "계약형태" | "교대형태" | "업종" | "직무";

export type filterQueryDef =
  | "possibleEdu"
  | "place"
  | "requiredExp"
  | "contractType"
  | "rotation"
  | "industry"
  | "task";

export interface watchListDef {
  query: filterQueryDef;
  categoryArr: string[];
}

export interface filterMenuListDef {
  name: filterMenuDef;
  query: filterQueryDef;
  categoryArr: string[];
}
