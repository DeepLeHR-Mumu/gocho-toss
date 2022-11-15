export interface JdDetailMetaProps {
  isMobile?: boolean;
  option: {
    id: number;
    title: string;
    companyName: string;
    rotation: string;
    taskDetail: string;
    pay: number | null;
    possibleEdu: string;
    place: string;
  };
}
