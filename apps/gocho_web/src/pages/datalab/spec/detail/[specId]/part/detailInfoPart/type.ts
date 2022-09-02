import { LanguageType } from "@api/spec/type/common";

export interface DetailInfoPartProps {
  detailData: {
    language: LanguageType | null;
    award: string | null;
    career: string | null;
    etc: string | null;
  };
}
