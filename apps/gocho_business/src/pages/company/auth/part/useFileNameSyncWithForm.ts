import { useState, useEffect } from "react";
import { UseFormReturn, Path } from "react-hook-form";

// NOTE 이 타입 가드는 중복되어 있다.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isFileList = (param: any): param is FileList =>
  !!param && typeof param.item === "function" && typeof param.length === "number";

// NOTE 임시 방편 네이밍
const useFileNameSyncWithForm = <T extends object>(
  form: UseFormReturn<T>,
  key: Path<T>,
  config: { maxSize: number; allowedfileTypes: string[] }
) => {
  const [fileName, setFileName] = useState("");

  const { watch, resetField } = form;

  useEffect(() => {
    const fileList = watch(key) as unknown;

    if (isFileList(fileList) && fileList.length > 0) {
      const targetFile = fileList[0];
      const resetFile = () => {
        setFileName("");
        resetField(key);
      };

      const fileSize = targetFile.size;

      if (fileSize > config.maxSize) {
        resetFile();
        return;
      }

      const fileType = targetFile.type;

      if (fileType.length === 0) {
        resetFile();
        return;
      }

      if (config.allowedfileTypes.includes(fileType)) {
        setFileName(targetFile.name);
      } else {
        resetFile();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch, resetField, key, watch(key), config.maxSize, ...config.allowedfileTypes]);

  return { name: fileName };
};

export default useFileNameSyncWithForm;
