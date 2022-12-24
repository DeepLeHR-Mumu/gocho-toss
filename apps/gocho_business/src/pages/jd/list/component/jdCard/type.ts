export interface JdCardProps {
  jd: {
    id: number;
    uploader: { name: string; department: string; is_mine: boolean };
    status: {
      name: "등록전" | "승인됨" | "반려됨" | "검수중";
      reason: string;
    };
    title: string;
    cut: boolean;
    view: number;
    bookmark: number;
    click: number;
    startTime: number;
    endTime: number;
  };
}
