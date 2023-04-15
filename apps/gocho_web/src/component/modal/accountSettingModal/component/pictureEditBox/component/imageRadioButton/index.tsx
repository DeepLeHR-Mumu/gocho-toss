import { FunctionComponent } from "react";
import { FiCheck } from "react-icons/fi";

import { ProfileImg } from "shared-ui/common/atom/profileImg";

import { checkPoint, imageWrapper, invisibleRadioButton } from "./style";
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
          <ProfileImg size="L" imageStr={imageValue} />
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
