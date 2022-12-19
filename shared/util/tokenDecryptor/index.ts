interface DecryptedTokenObj {
  id: number;
  email: string;
  badge: string;
  nickname: string;
  isKakao: boolean;
  image: string;
}

interface AdminDecryptedTokenObj {
  email: string;
  role: string;
  exp: number;
}

interface ManagerDecryptedTokenObj {
  id: number;
  company_id: number;
  company_name: string;
  company_logo: string;
  email: string;
  name: string;
  department: string;
  iat: number;
  exp: number;
}

export const tokenDecryptor = (token: string) => {
  const decodedURIArr = token.split(".")[1];
  return JSON.parse(decodeURIComponent(escape(atob(decodedURIArr)))) as DecryptedTokenObj;
};

export const adminTokenDecryptor = (token: string) => {
  const decodedURIArr = token.split(".")[1];
  return JSON.parse(decodeURIComponent(escape(atob(decodedURIArr)))) as AdminDecryptedTokenObj;
};

export const managerTokenDecryptor = (token: string) => {
  const decodedURIArr = token.split(".")[1];
  return JSON.parse(decodeURIComponent(escape(atob(decodedURIArr)))) as ManagerDecryptedTokenObj;
};
