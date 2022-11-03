import { FunctionComponent } from "react";

import { wrapperCreator, toggleContainerCreator } from "./style";
import { ToggleFormProps } from "./type";

export const ToggleForm: FunctionComponent<ToggleFormProps> = ({ yesDesc, noDesc, id, value, registerObj }) => {
  return (
    <label htmlFor={id} css={wrapperCreator(value)}>
      <div css={toggleContainerCreator(value)}>{value ? yesDesc : noDesc}</div>
      <input type="checkbox" id={id} {...registerObj} />
    </label>
  );
};
