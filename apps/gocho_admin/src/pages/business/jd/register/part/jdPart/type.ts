export interface JdPartProps {
  jd: {
    id: number;
    title: string;
    apply: {
      startTime: string;
      endTime: string;
      cut: boolean;
      document: string[];
      etc: string[];
      process: string[];
      route: {
        email: string | null;
        link: string | null;
        isDirect: boolean;
      };
    };
    detail: {
      taskMain: string;
      taskSubArr: string[] | null;
      taskDescription: string[];
      contractType: string;
      conversionRate: number | null;
      hireNumber: number | null;
      pay: string[];
      shift: string[];
      place: {
        isUndefined: boolean;
        data: {
          id: number;
          type: "일반" | "공장";
          location?: {
            address: string;
            x: number;
            y: number;
          };
          factory?: {
            id: number;
            name: string;
            address: string;
          };
        }[];
        etc: "순환" | "해외" | null;
      };
    };
    qualification: {
      highschool: boolean;
      college: boolean;
      university: boolean;
      requiredExperience: string;
      requiredMinYear: number | null;
      requiredMaxYear: number | null;
      requiredEtc: string[];
      preferredCertification: string[] | null;
      preferredEtc: string[];
    };
  };
}
