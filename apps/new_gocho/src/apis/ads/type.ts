export interface MainBannerDef {
  id: number;
  pc_image_url: string;
  mobile_image_url: string;
  type: string;
  link: string | null;
  start_time: string;
  end_time: string;
}

export interface TopBannerDef {
  id: number;
  color: string;
  start_time: string;
  end_time: string;
  jd: {
    company: {
      id: number;
      logo_url: string;
      name: string;
    };
    id: number;
    title: string;
    start_time: string;
    end_time: string;
  };
}
