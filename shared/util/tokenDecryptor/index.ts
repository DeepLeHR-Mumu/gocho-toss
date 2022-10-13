interface DecryptedTokenObj {
  id: number;
  email: string;
  badge: string;
  nickname: string;
  isKakao: boolean;
  image: string;
}

export const tokenDecryptor = (token: string) => {
  const decodedURIArr = decodeURIComponent(token).split(".")[1];
  return JSON.parse(atob(decodedURIArr)) as DecryptedTokenObj;
};
