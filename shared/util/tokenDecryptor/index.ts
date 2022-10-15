interface DecryptedTokenObj {
  id: number;
  email: string;
  badge: string;
  nickname: string;
  isKakao: boolean;
  image: string;
}

export const tokenDecryptor = (token: string) => {
  const decodedURIArr = token.split(".")[1];
  return JSON.parse(decodeURIComponent(escape(atob(decodedURIArr)))) as DecryptedTokenObj;
};
