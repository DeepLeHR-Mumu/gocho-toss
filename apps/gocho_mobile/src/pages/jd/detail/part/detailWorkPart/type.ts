interface FactoryObjDef {
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

export interface DetailWorkPartProps {
  freshPosition: {
    contractType: {
      type: "정규직" | "계약직" | "계약>정규" | "연수생" | "인턴";
      conversionRate: number | null;
    };
    taskDetailArr: string[];
    rotationArr: string[];
    place: {
      addressArr: string[];
      factoryArr: {
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
      }[];
      etc: string | null;
      type: "일반" | "해외" | "기타";
    };
    hireNumber: string;
    payArr: string[];
    task: {
      mainTask: string;
      subTaskArr: string[];
    };
  };
}

export interface ShowFactoryModalDef {
  (factoryObj: FactoryObjDef): void;
}
