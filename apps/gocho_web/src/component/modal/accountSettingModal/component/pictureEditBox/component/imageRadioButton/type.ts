import { Dispatch, SetStateAction } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { StaticImageData } from "next/image";

import { ImageType } from "shared-type/ui/imageType";

export interface ImageRadioButtonProps {
  registerObj: UseFormRegisterReturn;
  checkedImage: ImageType | null;
  setCheckedImage: Dispatch<SetStateAction<ImageType | null>>;
  imageFile: StaticImageData;
  setProfileUrl: Dispatch<SetStateAction<string | null>>;
  imageValue: ImageType;
}
