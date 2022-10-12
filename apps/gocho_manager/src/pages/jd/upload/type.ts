export interface JobFormValues {
  companyId: number;
  title: string;
  startTime: number;
  endTime: number;
  cut: boolean;
  processArr: string[];
  applyRouteArr: string[];
  applyUrl: string;
  etcArr: string[];
  positionArr: {
    middle: boolean;
    high: boolean;
    college: boolean;
    four: boolean;
    requiredExp: string;
    minYear: number | undefined;
    maxYear: number | undefined;
    requiredEtcArr: string[] | undefined;
    contractType: string;
    conversionRate: number | undefined;
    taskMain: string;
    taskSubArr: string[] | undefined;
    taskDetailArr: string[] | undefined;
    rotationArr: string[] | undefined;
    rotationEtc: string;
    placeArr: string;
    hireNumber: number | undefined;
    payArr: string[] | undefined;
    preferredCertiArr: string[];
    preferredEtcArr: string[] | undefined;
  }[];
}
