import { FunctionComponent } from "react";
import { FiCheck } from "react-icons/fi";

import { ProfileImg } from "shared-ui/common/atom/profileImg";

import { checkPointCSS, imageWrapper, invisibleRadioButton } from "./style";
import { ImageRadioButtonProps } from "./type";

export const ImageRadioButton: FunctionComponent<ImageRadioButtonProps> = ({
  registerObj,
  imageValue,
  checkedImage,
  setCheckedImage,
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
            return setCheckedImage(imageValue);
          }}
        />
        <div css={imageWrapper(checkedImage === imageValue)}>
          <ProfileImg size="L" imageStr={imageValue} />
          {checkedImage === imageValue && (
            <div css={checkPointCSS}>
              <FiCheck />
            </div>
          )}
        </div>
      </label>
    </li>
  );
};
