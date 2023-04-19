export interface FactoryCardProps {
  factoryInfo: {
    name: string;
    id: number;
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
  };
}
