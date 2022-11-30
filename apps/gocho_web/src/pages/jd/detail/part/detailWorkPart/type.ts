interface FactoryObjDef {
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

export interface DetailWorkPartProps {
  freshPosition: {
    contractType: {
      type: "정규직" | "계약직" | "계약>정규" | "연수생" | "인턴";
      conversionRate: number | null;
    };
    taskDetailArr: string[];
    rotationArr: string[];
    place: {
      addressArr: string[] | null;
      factoryArr:
        | {
            id: number;
            companyId: number;
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
          }[]
        | null;
      etc: string | null;
      type: "일반" | "전국" | "해외" | "기타";
    };
    hireCount: number;
    payArr: number[] | null;
    task: {
      mainTask: string;
      subTaskArr: string[] | null;
    };
  };
}

export interface ShowFactoryModalDef {
  (factoryObj: FactoryObjDef): void;
}
