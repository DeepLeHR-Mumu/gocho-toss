export interface ResponseErrorStatus {
  path: string;
  error_code:
    | "UNAUTHORIZED"
    | "EMPTY_JWT"
    | "INVALID_JWT"
    | "MALFORMED_JWT"
    | "EXPIRED_JWT"
    | "UNSUPPORTED_JWT"
    | "WRONG_SIGNATURE_JWT"
    | "ILLEGAL_ARGUMENT_JWT";
  error_message:
    | "인증되지 않았습니다."
    | "토큰이 존재하지 않습니다."
    | "유효하지 않은 토큰입니다."
    | "손상된 토큰입니다."
    | "만료된 토큰입니다."
    | "지원하지 않는 토큰입니다."
    | "시그니처 검증에 실패한 토큰입니다."
    | "잘못된 토큰 입력입니다.";
}
