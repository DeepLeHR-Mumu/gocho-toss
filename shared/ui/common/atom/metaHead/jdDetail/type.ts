import { MetaHeadProps } from "../type";

export interface JdDetailMetaHeadProps extends MetaHeadProps {
  jdDetail: {
    companyName: string;
    jdTitle: string;
    rotation: string;
    taskDetail: string;
    pay: number | null;
    possibleEdu: string;
    place: string;
  };
}
