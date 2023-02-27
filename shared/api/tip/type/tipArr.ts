export interface TipObjDef {
  uploader: {
    user_id: number;
    nickname: string;
    badge: string;
  };
  id: number;
  title: string;
  tag: string[];
  description: string;
  page_count: number;
  created_time: number;
  related_com: number;
  related_job: number[];
  like: number;
  view: number;
  thumbnail_url: string;
  svg_thumbnail_url: string;
}
