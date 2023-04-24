export interface JdPartProps {
  jd: {
    title: string;
    startTime: string;
    endTime: string;
    processArr: string[];
    applyRouteArr: string[];
    applyUrl: string;
    etcArr: string[] | null;
    cut: boolean;
    positionArr: {
      id: number;
      requiredExp: {
        type: "신입" | "경력" | "무관" | "신입/경력";
        maxYear: number | null;
        minYear: number | null;
      };
      requiredEtcArr: string[] | null;
      contractType: {
        type: "정규직" | "계약직" | "계약>정규" | "연수생" | "인턴";
        conversionRate: number | null;
      };
      taskDetailArr: string[];
      rotationArr: string[];
      rotationEtc: string;
      place: {
        addressArr: string[] | null;
        factoryArr:
          | {
              address: string;
              factoryName: string;
            }[]
          | null;
        etc: string | null;
        type: "일반" | "전국" | "해외" | "기타";
      };
      hireCount: number;
      payArr: string[] | null;
      preferredCertiArr: string[];
      preferredEtcArr: string[] | null;
      eduSummary: {
        middle: boolean;
        high: boolean;
        college: boolean;
        four: boolean;
      };
      task: {
        mainTask: string;
        subTaskArr: string[];
      };
    }[];
  };
}
