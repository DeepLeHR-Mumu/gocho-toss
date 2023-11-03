export type EducationType = "고등학교" | "대학교(2,3년제)" | "대학교(4년제)" | "기타";
export type GraduateType = "졸업" | "졸업예정" | "재학" | "중퇴";
export type YearMonthDuration = `${number}년 ${number}개월`;

export interface JdApplicant {
  id: number;
  applicant: {
    image: string;
    name: string;
    birth_date: string;
  };
  resume: {
    id: number;
    education: {
      education_type: EducationType;
      name: string;
      graduate_type: GraduateType;
    };
    career: {
      name: string | null;
      total_duration: YearMonthDuration | null; // "y년 mm개월"
    };
  };
  is_read: boolean;
}

export interface JdStatistics {
  view: number;
  bookmark: number;
  total_applicant: number;
  unread_applicant: number;
}
