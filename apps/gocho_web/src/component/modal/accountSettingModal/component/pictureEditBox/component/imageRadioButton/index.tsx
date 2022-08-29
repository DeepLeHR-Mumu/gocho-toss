import { FunctionComponent } from "react";
import { FiCheck } from "react-icons/fi";

import { ProfileImg } from "@component/common/atom/profileImg";

import { imageWrapper, invisibleRadioButton } from "./style";
import { ImageRadioButtonProps } from "./type";

export const ImageRadioButton: FunctionComponent<ImageRadioButtonProps> = ({
  registerObj,
  imageValue,
  checkedImage,
  setCheckedImage,
}) => {
  return (
    <div>
      <label htmlFor={`checkImg1${imageValue}`}>
        <input
          {...registerObj}
          value={imageValue}
          type="radio"
          css={invisibleRadioButton}
          id={`checkImg1${imageValue}`}
          onClick={() => {
            return setCheckedImage(imageValue);
          }}
        />
        <div css={imageWrapper}>
          <ProfileImg size="L" imageStr={imageValue} />
        </div>
        <div>{checkedImage === imageValue && <FiCheck />}</div>
      </label>
    </div>
  );
};
