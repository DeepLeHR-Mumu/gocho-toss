export interface SpecRecommendCardProps {
  specData: {
    id: number;
    nickname: string;
    gender: "남" | "여";
    age: number;
    lastEducation: "고졸" | "초대졸";
    college: { maxGrade: 4.5 | 4.3; grade: number; department: string } | null;
    highschool: {
      naesin: number;
      type: string;
      absent: number;
      classMiss: number;
      tardy: number;
      leaveEarly: number;
    };
    certificate: {
      data: string[] | null;
      level1: number;
      level2: number;
      level3: number;
    } | null;
  };
}
