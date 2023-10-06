export interface ResumeActivityDef {
  id: number;
  activity_type: string;
  name: string;
  organizer: string;
  activity_date: string | null;
  activity_description: string | null;
}

export interface PostActivityDef {
  id: number;
  activity_type: string;
  name: string;
  organizer: string;
  activity_date: string | null;
  activity_description: string | null;
}
