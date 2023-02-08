export interface FactoryPartProps {
  factory: {
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
    company: {
      name: string;
    };
  };
}
