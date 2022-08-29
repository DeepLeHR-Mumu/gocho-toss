import { Dispatch, SetStateAction } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { ImageType } from "@type/ui/imageType";

export interface ImageRadioButtonProps {
  registerObj: UseFormRegisterReturn;
  checkedImage: ImageType;
  setCheckedImage: Dispatch<SetStateAction<ImageType>>;
  imageValue: ImageType;
}
