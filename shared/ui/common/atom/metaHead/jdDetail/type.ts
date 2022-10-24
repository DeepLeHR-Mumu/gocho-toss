import { MetaHeadProps } from "../type";

export interface JdDetailMetaHeadProps extends MetaHeadProps {
  jdDetail: {
    id: number;
    companyName: string;
    jdTitle: string;
    rotation: string;
    taskDetail: string;
    pay: number | null;
    possibleEdu: string;
    place: string;
  };
}
