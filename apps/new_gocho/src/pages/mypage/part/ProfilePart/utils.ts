import { StaticImageData } from "next/image";

export const fileEncoding = (profile: File) => {
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

export async function convertToBlob(staticImageData: StaticImageData) {
  const response = await fetch(staticImageData.src);
  const blob = await response.blob();
  return blob;
}
