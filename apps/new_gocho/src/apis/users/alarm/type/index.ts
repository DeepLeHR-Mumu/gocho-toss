export interface AlarmDef {
  id: number;
  type: "information" | "notification" | "urgency";
  title: string;
  description: string;
  link: string;
  is_read: boolean;
  created_time: string;
  updated_time: string | null;
}
