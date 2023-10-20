export interface ListCardProps {
  title: string;
  children: React.ReactNode;
  iconType?: "add" | "edit" | "none";
  editMessage?: React.ReactNode;
  isRequired?: boolean;
  iconHandler?: () => void;
}
