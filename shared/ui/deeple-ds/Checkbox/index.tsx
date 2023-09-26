import { ForwardRefRenderFunction, forwardRef, useState, useCallback, ChangeEvent } from "react";
import { FiCheck } from "react-icons/fi";
import { CheckboxProps } from "./type";
import { cssObj } from "./style";

export const ForwardedCheckbox: ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (props, ref) => {
  const { onChange, checked } = props;

  const [isChecked, setIsChecked] = useState(checked ?? false);

  const toggleCheck = useCallback(() => {
    setIsChecked((prev) => !prev);
    if (onChange) {
      onChange({ target: { checked: !isChecked } } as ChangeEvent<HTMLInputElement>);
    }
  }, [isChecked, onChange]);

  return (
    <div>
      <button type="button" css={cssObj.check(isChecked)} onClick={toggleCheck}>
        {isChecked && <FiCheck />}
      </button>
      <input
        type="checkbox"
        css={cssObj.checkbox}
        checked={isChecked}
        {...props}
        ref={ref}
        onChange={(e) => {
          setIsChecked(e.target.checked);
          if (onChange) {
            onChange(e);
          }
        }}
      />
    </div>
  );
};

export const Checkbox = forwardRef(ForwardedCheckbox);
