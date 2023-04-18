import { FunctionComponent } from "react";
import { FiCheck } from "react-icons/fi";
import Image from "next/image";

import { checkPoint, imageWrapper, invisibleRadioButton, wrapper } from "./style";
import { ImageRadioButtonProps } from "./type";

export const ImageRadioButton: FunctionComponent<ImageRadioButtonProps> = ({
  registerObj,
  imageValue,
  imageFile,
  checkedImage,
  setCheckedImage,
  setProfileUrl,
}) => {
  return (
    <li>
      <label htmlFor={`checkImg1${imageValue}`}>
        <input
          {...registerObj}
          value={imageValue}
          type="radio"
          css={invisibleRadioButton}
          id={`checkImg1${imageValue}`}
          onClick={() => {
            setCheckedImage(imageValue);
            return setProfileUrl(imageFile.src);
          }}
        />
        <div css={imageWrapper(checkedImage === imageValue)}>
          <div css={wrapper("L")}>
            <Image src={imageFile} alt="유저 프로필" fill sizes="1" />
          </div>
          {checkedImage === imageValue && (
            <div css={checkPoint}>
              <FiCheck />
            </div>
          )}
        </div>
      </label>
    </li>
  );
};
