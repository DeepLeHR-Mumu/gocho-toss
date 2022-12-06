interface DecryptedTokenObj {
  email: string;
  role: string;
  exp: number;
}

export const tokenDecryptor = (token: string) => {
  const decodedURIArr = token.split(".")[1];
  return JSON.parse(decodeURIComponent(escape(atob(decodedURIArr)))) as DecryptedTokenObj;
};
