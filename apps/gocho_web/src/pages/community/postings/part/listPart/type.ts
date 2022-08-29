export type FilterDef = "free" | "com" | "career" | "certi" | undefined;
export type HashtagDef = "recent" | "popular" | "view" | "rand";

export interface changeFilterDef {
  (newFilter: FilterDef): void;
}

export interface changeHashtagDef {
  (newHashtag: HashtagDef): void;
}

export interface PostingValues {
  keyword: string;
}
