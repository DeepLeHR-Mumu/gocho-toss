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
      <label htmlFor={`checkImg${imageValue}`}>
        <input
          {...registerObj}
          value={imageValue}
          type="radio"
          css={invisibleRadioButton}
          id={`checkImg${imageValue}`}
          onClick={() => {
            setCheckedImage(imageValue);
            return setProfileUrl(imageFile.src);
          }}
        />
        <div css={imageWrapper(checkedImage === imageValue)}>
          <ProfileImg imageStr={imageFile.src} size="L" />
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
