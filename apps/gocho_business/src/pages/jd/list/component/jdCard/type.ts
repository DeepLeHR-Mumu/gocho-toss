export interface JdCardProps {
  jd: {
    id: number;
    applyUrl: string;
    uploader: { name: string; department: string; is_mine: boolean };
    status: {
      name: "진행중" | "등록대기" | "수정대기" | "등록반려" | "수정반려";
      reason: string;
    };
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