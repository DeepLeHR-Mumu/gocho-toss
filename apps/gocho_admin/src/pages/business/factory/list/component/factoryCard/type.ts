export interface FactoryCardProps {
  factory: {
    id: number;
    name: string;
    company: { name: string };
    status: {
      name: string;
      reason: string | null;
    };
  };
}
