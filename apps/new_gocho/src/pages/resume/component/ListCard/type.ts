export interface ListCardProps {
  userId: number;
  title: string;
  children: React.ReactNode;
  iconType?: "add" | "edit";
  editMessage?: string;
  isRequired?: boolean;
  iconHandler?: () => void;
}
