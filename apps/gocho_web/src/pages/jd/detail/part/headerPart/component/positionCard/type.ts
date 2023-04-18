export interface FactoryObjDef {
  id: number;
  name: string;
  address: string;
  maleNumber: number;
  femaleNumber: number;
  product: string;
  bus: {
    exists: boolean;
    desc: string | null;
  };
  dormitory: {
    exists: boolean;
    desc: string | null;
  };
}

export interface PositionArrDef {
  id: number;
  possibleEdu: {
    summary: string;
    college: boolean;
    high: boolean;
    middle: boolean;
    four: boolean;
  };
  requiredExp: {
    type: "신입" | "경력" | "무관" | "신입/경력";
    minYear: number | null;
    maxYear: number | null;
  };
  requiredEtcArr: string[];
  contractType: {
    type: "정규직" | "계약직" | "계약>정규" | "연수생" | "인턴";
    conversionRate: number | null;
  };
  task: {
    mainTask: string;
    subTaskArr: string[];
  };
  taskDetailArr: string[];
  rotationArr: string[];
  rotationEtc: string | null;
  place: {
    type: "일반" | "해외" | "기타";
    addressArr: string[];
    factoryArr: FactoryObjDef[];
    etc: string | null;
  };
  hireNumber: string;
  payArr: string[];
  preferredCertiArr: string[];
  preferredEtcArr: string[];
}

export interface PositionCardProps {
  isDdayEnd: boolean;
  currentPositionIndex: number;
  currentPositionId: number;
  setCurrentPositionId(): void;
  position: PositionArrDef;
}
