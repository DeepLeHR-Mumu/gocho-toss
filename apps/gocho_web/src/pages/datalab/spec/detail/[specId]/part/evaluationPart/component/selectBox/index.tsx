import { FunctionComponent } from "react";
import { FiChevronUp } from "react-icons/fi";

import { STRONGPOINT_CHIP, WEAKNESSPOINT_CHIP } from "../../constant";
import { SelectBoxProps } from "./type";
import { closeButton, container, wrapper } from "./style";

export const SelectBox: FunctionComponent<SelectBoxProps> = ({
  register,
  watchArr,
  valueName,
  setValue,
  closeFunction,
}) => {
  const chipArr =
    valueName === "strength" ? STRONGPOINT_CHIP : WEAKNESSPOINT_CHIP;
  return (
    <div css={wrapper}>
      <button type="button" onClick={closeFunction} css={closeButton}>
        <FiChevronUp />
      </button>
      {/* TODO arrelement */}
      {chipArr.map((arrElement) => {
        return (
          <div key={`${valueName}_${arrElement}`} css={container}>
            <input
              type="checkbox"
              value={arrElement}
              {...register(valueName)}
              checked={watchArr.some((element) => {
                return arrElement === element;
              })}
              onChange={(e) => {
                if (e.target.value === "없음" && e.target.checked === true) {
                  setValue(valueName, ["없음"], { shouldDirty: true });
                  return;
                }
                if (watchArr?.length >= 3 && e.target.checked === true) {
                  return;
                }
                if (watchArr?.length > 0 && e.target.checked === true) {
                  setValue(valueName, [
                    ...watchArr.filter((watch) => {
                      return watch !== "없음";
                    }),
                    arrElement,
                  ]);
                  return;
                }
                if (e.target.checked === false) {
                  setValue(valueName, [
                    ...watchArr.filter((watch) => {
                      return watch !== e.target.value;
                    }),
                  ]);
                  return;
                }
                setValue(valueName, [arrElement], { shouldDirty: true });
              }}
            />
            <p>{arrElement}</p>
          </div>
        );
      })}
    </div>
  );
};
