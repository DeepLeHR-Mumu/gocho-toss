export type InputStatusType = "진행중" | "등록대기" | "수정대기" | "등록반려" | "수정반려";

export type OutPutStatusType = "등록전" | "검수중" | "승인됨" | "반려됨";

export interface CommonStatusChipProps {
  status?: InputStatusType;
}
