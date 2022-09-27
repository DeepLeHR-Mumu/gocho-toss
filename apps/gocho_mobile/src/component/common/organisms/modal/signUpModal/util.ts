export const validateNickname = (nickname: string) => {
  let nickLength = 0;
  const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;

  // 한글, 영문 길이 2,1로 바꾸기
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < nickname.length; i++) {
    // 한글은 2, 영문은 1로 치환
    const nick: string = nickname.charAt(i);
    if (escape(nick).length > 4) nickLength += 2;
    else nickLength += 1;
  }

  // 닉네임 빈칸 포함 안됨
  if (nickname.search(/\s/) !== -1) return "닉네임은 공백 없이 입력해주세요.";
  // 닉네임 한글 1~10자, 영문 및 숫자 2~20자
  if (nickLength < 4 || nickLength > 16) return "닉네임은 한글 2~8자, 영문 및 숫자 4~16자 입니다.";
  // 영어 한글 특수문자만 허용
  if (!regex.test(nickname)) return "닉네임은 특수문자를 포함 할 수 없습니다.";
  return undefined;
};
