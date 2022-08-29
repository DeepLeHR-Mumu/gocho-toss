export interface Spec4UniversityProps {
  moveNextCard(percent: number): void;
  movePrevCard(): void;
}

export interface PostSubmitValues {
  highschool: {
    type:
      | "일반고"
      | "공업고"
      | "마이스터고"
      | "농업고"
      | "상업고"
      | "검정고시"
      | "기타";
    absent: number;
    tardy: number;
    leaveEarly: number;
    classMiss: number;
    naesin: number;
  };
  college: {
    department: string;
    uturn: boolean;
    grade: number;
    maxGrade: 4.3 | 4.5;
  };
}
