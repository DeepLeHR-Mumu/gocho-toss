import { FunctionComponent, useState } from "react";
import { FiChevronUp, FiMinus, FiX } from "react-icons/fi";
import { useFieldArray } from "react-hook-form";

import { CheckBox } from "shared-ui/common/atom/checkbox";
import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";
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

  const certiClickHandler = (certi: string) => {
    const isInList = jobForm.watch("position_arr")[positionIndex].preferred_certi_arr?.includes(certi);
    if (isInList) {
      jobForm.setValue(`position_arr.${positionIndex}.preferred_certi_arr`, [
        ...(jobForm.watch("position_arr")[positionIndex].preferred_certi_arr?.filter((element) => element !== certi) ||
          []),
      ]);
    } else {
      jobForm.setValue(`position_arr.${positionIndex}.preferred_certi_arr`, [
        ...(jobForm.watch("position_arr")[positionIndex].preferred_certi_arr || []),
        certi,
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
            // TODO: 밖에 padding을 씌워서 가장자리는 클릭이 되지 않음
            <div
              key={`${placeType.name}${positionIndex}`}
              css={cssObj.placeTypeLabel(placeType.name === jobForm.watch("position_arr")[positionIndex].place.type)}
            >
              <SharedRadioButton
                value={placeType.name}
                id={`${placeType.name}${positionIndex}`}
                registerObj={jobForm.register(`position_arr.${positionIndex}.place.type`)}
              >
                <p css={cssObj.placeTypeLabelData}>
                  {placeType.name}
                  <span css={cssObj.placeTypeLabelIcon}>
                    <placeType.icon />
                  </span>
                </p>
              </SharedRadioButton>
            </div>
          ))}
        </div>
        <div css={cssObj.placeInputContainer}>
          {jobForm.watch("position_arr")[positionIndex].place.type === "공장 근무지" && (
            <>
              <p>공장 근무지</p>
              <div>asdf</div>
            </>
          )}
          {jobForm.watch("position_arr")[positionIndex].place.type === "해외 근무지" && (
            <>
              <p>해외 근무지</p>
              <input
                css={cssObj.input(47)}
                placeholder="근무지를 작성해주세요"
                {...jobForm.register(`position_arr.${positionIndex}.place.etc`, { required: true })}
              />
            </>
          )}
          {jobForm.watch("position_arr")[positionIndex].place.type === "기타 근무지" && (
            <>
              <p>기타 근무지</p>
              <input
                css={cssObj.input(47)}
                placeholder="전국 순환, 입사 후 근무지 배정 등 특수 근무지를 작성해주세요"
                {...jobForm.register(`position_arr.${positionIndex}.place.etc`, { required: true })}
              />
            </>
          )}
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
        <div css={cssObj.rotationContainer}>
          <input
            css={cssObj.input(20)}
            type="text"
            placeholder="자격증 검색"
            onChange={(e) => {
              setCertiSearchWord(e.target.value);
            }}
          />
          <div css={cssObj.rotationList(certiSearchWord !== "")}>
            {certificateArr
              .filter((prevCerti) => prevCerti.includes(certiSearchWord))
              .map((certi) => (
                <button
                  type="button"
                  css={cssObj.option}
                  key={`${id}${certi}`}
                  value={certi}
                  onClick={() => {
                    certiClickHandler(certi);
                  }}
                >
                  <CheckBox
                    isChecked={
                      jobForm.watch("position_arr")[positionIndex].preferred_certi_arr?.includes(certi) || false
                    }
                  />
                  {certi}
                </button>
              ))}
          </div>
        </div>

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
