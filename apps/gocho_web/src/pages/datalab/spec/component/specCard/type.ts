export interface SpecCardProps {
  specData: {
    id: number;
    user: {
      nickname: string;
      image: "default" | "default_work" | "jobi" | "jobi_safety" | "jobi_chat" | "jobi_play" | "jobi_teach";
      badge: "default" | "early_bird" | "admin";
    };
    gender: "남" | "여";
    age: number;
    lastEducation: "고졸" | "초대졸";
    college: { department: string; grade: number; maxGrade: 4.3 | 4.5 } | null;
    highschool: {
      type: string;
      naesin: number;
      absent: number;
      classMiss: number;
      tardy: number;
      leaveEarly: number;
    };
    certificate: {
      level1: number;
      level2: number;
      level3: number;
    } | null;
  };
  isSkeleton?: never;
}

export interface SpecCardSkeleton {
  specData?: never;
  isSkeleton: boolean;
}
