export interface JdCardProps {
  jd: {
    id: number;
    uploader: { name: string; department: string; is_mine: boolean };
    status: {
      name: "진행중" | "등록대기" | "수정대기" | "등록반려" | "수정반려";
      reason: string;
    };
    title: string;
    cut: boolean;
    view: number;
    bookmark: number;
    click: number;
    startTime: string;
    endTime: string;
    updatedTime: string;
    createdTime: string;
  };
}
