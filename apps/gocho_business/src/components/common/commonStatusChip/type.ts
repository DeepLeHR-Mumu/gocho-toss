export type InputStatusType = "진행중" | "등록대기" | "수정대기" | "등록반려" | "수정반려";

export type OutPutStatusType = "진행중" | "공고마감" | "대기중" | "반려" | "임시저장";

export interface CommonStatusChipProps {
  status?: InputStatusType;
  isExpired: boolean;
}
