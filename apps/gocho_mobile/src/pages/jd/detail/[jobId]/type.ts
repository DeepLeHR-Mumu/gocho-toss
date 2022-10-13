export interface FactoryObjDef {
  id: number;
  place1: string;
  place2: string;
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
  factoryName: string;
}

export interface PositionObjDef {
  id: number;
  jdId: number;
  requiredExp: {
    type: "신입" | "경력" | "무관" | "신입/경력";
    maxYear: number;
    minYear: number;
  };
  requiredEtcArr: string[] | null;
  contractType: {
    type: "정규직" | "계약직" | "계약>정규" | "연수생" | "인턴";
    conversionRate: number | null;
  };
  taskDetailArr: string[];
  rotationArr: string[];
  factoryArr: FactoryObjDef[];
  placeArr: string[];
  hireCount: number;
  payArr: number[] | null;
  preferredCertiArr: string[] | null;
  preferredEtcArr: string[] | null;
  createdTime: number;
  possibleEdu: {
    summary: string;
    middle: boolean;
    high: boolean;
    college: boolean;
    four: boolean;
  };
  task: {
    mainTask: string;
    subTaskArr: string[] | null;
  };
}
