export type OrderDef = "recent" | "popular" | "view" | "end";

export type SearchQueryDef = {
  possibleEdu: string[];
  place: string[];
  requiredExp: string[];
  contractType: string[];
  rotation: string[];
  industry: string[];
  task: string[];
  searchWord: string | null;
};

export interface SearchValues {
  possibleEdu: string[];
  place: string[];
  requiredExp: string[];
  contractType: string[];
  rotation: string[];
  industry: string[];
  task: string[];
  searchWord: string | null;
}
