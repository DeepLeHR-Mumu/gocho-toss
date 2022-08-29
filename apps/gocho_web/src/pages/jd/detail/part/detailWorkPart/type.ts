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
    factoryArr: FactoryObjDef[];
    placeArr: string[];
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
