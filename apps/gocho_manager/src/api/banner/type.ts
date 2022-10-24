export interface mainBannerDef {
  id: number;
  image_url: string;
  color: string;
  start_time: number;
  end_time: number;
  company: {
    id: number;
    logo_url: string;
    name: string;
  };
  jd: {
    id: number;
    title: string;
    start_time: number;
    end_time: number;
  };
}

export interface topBannerDef {
  id: number;
  color: string;
  start_time: number;
  end_time: number;
  company: {
    id: number;
    logo_url: string;
    name: string;
  };
  jd: {
    id: number;
    title: string;
    start_time: number;
    end_time: number;
  };
}

export interface sideBannerDef {
  id: number;
  image_url: string;
}

export interface BannerObjDef extends mainBannerDef, topBannerDef, sideBannerDef {}
