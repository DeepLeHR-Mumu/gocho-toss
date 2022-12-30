import { ChangeEvent, FunctionComponent, useState } from "react";
import { FiChevronUp, FiMinus, FiX } from "react-icons/fi";
import { useFieldArray } from "react-hook-form";

import { CheckBox } from "shared-ui/common/atom/checkbox";
import { CheckLabel } from "../../component/checkLabel";
import { PositionWorkInfoPartProps } from "./type";
import { rotationArr, placeTypeArr, certificateArr } from "./constant";
import { cssObj } from "./style";

export const PositionWorkInfoPart: FunctionComponent<PositionWorkInfoPartProps> = ({
  id,
  positionIndex,
  jobForm,
  control,
}) => {
  const [certiSearchWord, setCertiSearchWord] = useState<string>("");
  const [isRotationOpen, setIsRotationOpen] = useState<boolean>(false);

  const payArr = useFieldArray({
    control,
    name: `position_arr.${positionIndex}.pay_arr`,
  });

  const preferredEtcArr = useFieldArray({
    control,
    name: `position_arr.${positionIndex}.preferred_etc_arr`,
  });

  const rotationClickHandler = (rotation: string) => {
    const isInList = jobForm.watch("position_arr")[positionIndex].rotation_arr.includes(rotation);
    if (isInList) {
      jobForm.setValue(`position_arr.${positionIndex}.rotation_arr`, [
        ...jobForm.watch("position_arr")[positionIndex].rotation_arr.filter((element) => element !== rotation),
      ]);
    } else {
      jobForm.setValue(`position_arr.${positionIndex}.rotation_arr`, [
        ...jobForm.watch("position_arr")[positionIndex].rotation_arr,
        rotation,
      ]);
    }
  };

  return (
    <>
      <div css={cssObj.container}>
        <p>교대 형태</p>
        <div css={cssObj.rotationContainer}>
          <button
            css={cssObj.input(20)}
            type="button"
            onClick={() => {
              setIsRotationOpen((prev) => !prev);
            }}
          >
            교대형태 선택
            <FiChevronUp />
          </button>
          <div css={cssObj.rotationList(isRotationOpen)}>
            {rotationArr.map((rotation) => (
              <button
                type="button"
                css={cssObj.option}
                key={`${id}${rotation}`}
                value={rotation.data}
                onClick={() => {
                  rotationClickHandler(rotation.data);
                }}
              >
                <CheckBox
                  isChecked={
                    jobForm.watch("position_arr")[positionIndex].rotation_arr?.includes(rotation.data) || false
                  }
                />
                {rotation.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div css={cssObj.container}>
        <p>근무지 종류</p>
        <div css={cssObj.labelContainer}>
          {placeTypeArr.map((placeType) => (
            <CheckLabel
              key={`${placeType}${id}`}
              register={jobForm.register}
              index={positionIndex}
              field="place.type"
              value={placeType}
              watch={jobForm.watch("position_arr")[positionIndex].place.type}
            />
          ))}
        </div>
      </div>
      <div css={cssObj.container}>
        <p>급여</p>
        <div css={cssObj.inputContainer}>
          {payArr.fields.map((item, index) => (
            <label css={cssObj.inputLabel(47)} key={`payArr${item.id}`} htmlFor={`payArr${item.id}`}>
              <input
                id={`payArr${item.id}`}
                css={cssObj.inputWithButton}
                placeholder="급여 정보"
                {...jobForm.register(`position_arr.${positionIndex}.pay_arr.${index}.value`)}
              />
              <button
                type="button"
                css={cssObj.deleteInputButton}
                onClick={() => {
                  payArr.remove(positionIndex);
                }}
              >
                <FiMinus />
              </button>
            </label>
          ))}
          <button
            type="button"
            onClick={() => {
              payArr.append({ value: "" });
            }}
          >
            + 입력칸 추가
          </button>
        </div>
      </div>
      <div css={cssObj.container}>
        <p>우대 자격증</p>
        <input
          css={cssObj.input(10)}
          type="text"
          onChange={(e) => {
            setCertiSearchWord(e.target.value);
          }}
        />
        <select
          value=""
          css={cssObj.input(47)}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            jobForm.setValue(`position_arr.${positionIndex}.preferred_certi_arr`, [
              ...(jobForm.watch("position_arr")[positionIndex].preferred_certi_arr || []),
              e.target.value,
            ]);
            setCertiSearchWord("");
          }}
        >
          <option value="" disabled>
            자격증 선택 ▼
          </option>
          {certificateArr
            .filter((prevCerti) => prevCerti.includes(certiSearchWord))
            .map((certi) => (
              <option key={`${id}${certi}`} value={certi}>
                {certi}
              </option>
            ))}
        </select>
        <div css={cssObj.selectedCertiContainer}>
          {jobForm.watch("position_arr")[positionIndex].preferred_certi_arr?.map((certi) => (
            <div key={`${id}${certi}`} css={cssObj.certiLabel}>
              {certi}
              <button
                type="button"
                css={cssObj.deleteCertiButton}
                onClick={() => {
                  jobForm.setValue(`position_arr.${positionIndex}.preferred_certi_arr`, [
                    ...(jobForm
                      .watch("position_arr")
                      [positionIndex].preferred_certi_arr?.filter((element) => element !== certi) || []),
                  ]);
                }}
              >
                <FiX />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div css={cssObj.container}>
        <p>기타 우대 사항(선택)</p>
        <div css={cssObj.inputContainer}>
          {preferredEtcArr.fields.map((item, index) => (
            <label css={cssObj.inputLabel(47)} key={`preferredEtcArr${item.id}`} htmlFor={`preferredEtcArr${item.id}`}>
              <input
                id={`preferredEtcArr${item.id}`}
                css={cssObj.inputWithButton}
                placeholder="기타 우대 사항"
                {...jobForm.register(`position_arr.${positionIndex}.preferred_etc_arr.${index}.value`)}
              />
              <button
                type="button"
                css={cssObj.deleteInputButton}
                onClick={() => {
                  preferredEtcArr.remove(positionIndex);
                }}
              >
                <FiMinus />
              </button>
            </label>
          ))}
          <button
            type="button"
            onClick={() => {
              preferredEtcArr.append({ value: "" });
            }}
          >
            + 입력칸 추가
          </button>
        </div>
      </div>
    </>
  );
};
