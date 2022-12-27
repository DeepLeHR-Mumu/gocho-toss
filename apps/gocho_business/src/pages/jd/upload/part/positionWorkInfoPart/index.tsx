import { ChangeEvent, FunctionComponent, useState } from "react";
import { FiX } from "react-icons/fi";

import { CheckLabel } from "../../component/checkLabel";
import { PositionWorkInfoPartProps } from "./type";
import { rotationArr, placeTypeArr, certificateArr } from "./constant";
import { cssObj } from "./style";

export const PositionWorkInfoPart: FunctionComponent<PositionWorkInfoPartProps> = ({ id, index, jobForm }) => {
  const [certiSearchWord, setCertiSearchWord] = useState<string>("");

  return (
    <>
      <div css={cssObj.inputContainer}>
        <p>교대 형태</p>
        <select css={cssObj.inputLine} multiple {...jobForm.register(`position_arr.${index}.rotation_arr`)}>
          <option value="" disabled>
            교대형태 선택 ▼
          </option>
          {rotationArr.map((rotation) => (
            <option key={`${id}${rotation.data}`} value={rotation.data}>
              {rotation.name}
            </option>
          ))}
        </select>
      </div>
      <div css={cssObj.inputContainer}>
        <p>근무지 종류</p>
        <div css={cssObj.labelContainer}>
          {placeTypeArr.map((placeType) => (
            <CheckLabel
              key={`${placeType}${id}`}
              register={jobForm.register}
              index={index}
              field="place.type"
              value={placeType}
              watch={jobForm.watch("position_arr")[index].place.type}
            />
          ))}
        </div>
      </div>
      <div css={cssObj.inputContainer}>
        <p>급여</p>
        <input
          css={cssObj.inputLine}
          placeholder="급여 정보"
          {...jobForm.register(`position_arr.${index}.pay_arr`, { required: true })}
        />
      </div>
      <div css={cssObj.inputContainer}>
        <p>우대 자격증</p>
        <input
          css={cssObj.inputLine}
          type="text"
          onChange={(e) => {
            setCertiSearchWord(e.target.value);
          }}
        />
        <select
          value=""
          css={cssObj.inputLine}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            jobForm.setValue(`position_arr.${index}.preferred_certi_arr`, [
              ...(jobForm.watch("position_arr")[index].preferred_certi_arr || []),
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
          {jobForm.watch("position_arr")[index].preferred_certi_arr?.map((certi) => (
            <div key={`${id}${certi}`} css={cssObj.certiLabel}>
              {certi}
              <button
                type="button"
                css={cssObj.deleteCertiButton}
                onClick={() => {
                  jobForm.setValue(`position_arr.${index}.preferred_certi_arr`, [
                    ...(jobForm
                      .watch("position_arr")
                      [index].preferred_certi_arr?.filter((element) => element !== certi) || []),
                  ]);
                }}
              >
                <FiX />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div css={cssObj.inputContainer}>
        <p>기타 우대 사항(선택)</p>
        <input
          css={cssObj.inputLine}
          placeholder="기타 우대 사항"
          {...jobForm.register(`position_arr.${index}.preferred_etc_arr`, { required: true })}
        />
      </div>
    </>
  );
};
