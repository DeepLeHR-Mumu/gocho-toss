export interface mainBannerDef {
  id: number;
  jd_id: number;
  image: string;
  company_name: string;
  jd_title: string;
  color: string;
  start_time: number;
  end_time: number;
}

export interface topBannerDef {
  id: number;
  jd_id: number;
  company_logo: string;
  company_name: string;
  jd_title: string;
  color: string;
  start_time: number;
  end_time: number;
}

export interface sideBannerDef {
  id: number;
  image: string;
  start_time: number;
  end_time: number;
}

export interface BannerObjDef extends mainBannerDef, topBannerDef, sideBannerDef {}
