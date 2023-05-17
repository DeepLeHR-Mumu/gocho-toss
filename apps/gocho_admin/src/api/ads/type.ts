export interface MainBannerDef {
  id: number;
  image_url: string;
  color: string;
  start_time: string;
  end_time: string;
  company: {
    id: number;
    logo_url: string;
    name: string;
  };
  jd: {
    id: number;
    title: string;
    start_time: string;
    end_time: string;
  };
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
