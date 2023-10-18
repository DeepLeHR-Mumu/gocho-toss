export interface ResumeActivityDef {
  id: number;
  activity_type: string;
  name: string;
  organizer: string;
  activity_date: string;
  activity_description: string;
}

export interface PostActivityDef {
  activity_type: string;
  name: string;
  organizer: string;
  activity_date: string;
  activity_description: string;
}
