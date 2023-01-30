export interface HeaderPartProps {
  jdData: {
    status: {
      name: "진행중" | "등록대기" | "수정대기" | "등록반려" | "수정반려";
      reason: string;
    };
  };
}
