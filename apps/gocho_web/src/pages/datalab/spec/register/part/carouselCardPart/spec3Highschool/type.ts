export interface Spec3HighschoolProps {
  moveNextCard(hash: string): void;
  movePrevCard(hash: string): void;
}

export interface PostSubmitValues {
  highschool: {
    type: "일반고" | "공업고" | "마이스터고" | "농업고" | "상업고" | "검정고시" | "기타";
    absent: number;
    tardy: number;
    leaveEarly: number;
    classMiss: number;
    naesin: number;
  };
  college: null;
}
