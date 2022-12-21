export interface JdCardProps {
  jd: {
    id: number;
    applyUrl: string;
    uploader: { name: string; department: string; is_mine: boolean };
    status: "등록전" | "승인됨" | "반려됨" | "검수중";
    companyName: string;
    companyId: number;
    companyLogo: string;
    title: string;
    cut: boolean;
    view: number;
    bookmark: number;
    click: number;
    startTime: number;
    endTime: number;
  };
}
