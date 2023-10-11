export interface ResumeActivityDef {
  id: number;
  activity_type: "수상" | "봉사" | "기타";
  name: string;
  organizer: string;
  activity_date: string | null;
  activity_description: string | null;
}

export interface PostActivityDef {
  activity_type: "수상" | "봉사" | "기타";
  name: string;
  organizer: string;
  activity_date: string | null;
  activity_description: string | null;
}
