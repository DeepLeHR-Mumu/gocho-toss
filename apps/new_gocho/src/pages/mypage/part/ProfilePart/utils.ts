export const fileEncording = (profile: File) => {
  const reader = new FileReader();

  const fileToBase64 = new Promise<string | ArrayBuffer | null>((resolve, reject) => {
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = () => {
      reject(new Error("File reading failed"));
    };
  });

  reader.readAsDataURL(profile);

  return fileToBase64;
};
