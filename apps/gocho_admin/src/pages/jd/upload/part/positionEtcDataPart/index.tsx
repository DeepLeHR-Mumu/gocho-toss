import { ChangeEvent, FunctionComponent, useState } from "react";
import { RiCloseFill } from "react-icons/ri";

import { NormalButton } from "shared-ui/common/atom/button/normalButton";
import { CheckBoxWithDesc } from "shared-ui/common/atom/checkbox_desc";

import { cssObj } from "./style";
import { certificateArr } from "./constant";
import { PositionBoxProps } from "./type";

export const PositionEtcDataPart: FunctionComponent<PositionBoxProps> = ({ id, index, jobForm, append, remove }) => {
  const [certiSearchWord, setCertiSearchWord] = useState<string>("");

  return (
    <div css={cssObj.wrapper}>
      <div css={cssObj.container}>
        <ul css={cssObj.formBox}>
          <li>
            <strong css={cssObj.requiredTitle}>채용 인원</strong>
            <div css={cssObj.gridBox}>
              <NormalButton
                buttonClick={() => {
                  jobForm.setValue(`position_arr.${index}.hire_number`, -1);
                }}
                text="0명 채용"
                wide={false}
                variant="text"
              />
              <NormalButton
                buttonClick={() => {
                  jobForm.setValue(`position_arr.${index}.hire_number`, -2);
                }}
                text="00명 채용"
                wide={false}
                variant="text"
              />
              <NormalButton
                buttonClick={() => {
                  jobForm.setValue(`position_arr.${index}.hire_number`, -3);
                }}
                text="000명 채용"
                wide={false}
                variant="text"
              />
              {/* TODO : 표기 정상화 */}
              <input
                css={cssObj.inputCSS}
                type="number"
                {...jobForm.register(`position_arr.${index}.hire_number`, { valueAsNumber: true, required: true })}
              />
            </div>
          </li>
          <li>
            <strong css={cssObj.requiredTitle}>급여</strong>
            <p css={cssObj.textareaWarning}>엔터로 구분해주세요.</p>
            <div css={cssObj.textareaBox}>
              <textarea
                css={cssObj.textarea}
                {...jobForm.register(`position_arr.${index}.pay_arr`, { required: true })}
              />
            </div>
          </li>
          <li>
            <strong css={cssObj.noRequiredTitle}>기타 우대사항</strong>
            <p css={cssObj.textareaWarning}>엔터로 구분해주세요.</p>
            <div css={cssObj.textareaBox}>
              <textarea css={cssObj.textarea} {...jobForm.register(`position_arr.${index}.preferred_etc_arr`)} />
            </div>
          </li>
        </ul>
        <ul css={cssObj.formBox}>
          <li>
            <strong css={cssObj.noRequiredTitle}>우대 자격증</strong>
            <div css={cssObj.flexBox}>
              <input
                css={cssObj.inputCSS}
                type="text"
                onChange={(onChangeEvent: ChangeEvent<HTMLInputElement>) => {
                  setCertiSearchWord(onChangeEvent.target.value);
                }}
              />
            </div>
            <div css={cssObj.flexBox}>
              {certificateArr
                .filter((prevCerti) => prevCerti.includes(certiSearchWord))
                .map((certi) => {
                  if (certiSearchWord === "") return null;
                  return (
                    <CheckBoxWithDesc
                      key={`${id}${certi}`}
                      registerObj={{ ...jobForm.register(`position_arr.${index}.preferred_certi_arr`) }}
                      desc={certi}
                      value={certi}
                      id={`${id}${certi}`}
                    />
                  );
                })}
            </div>
            <div css={cssObj.flexBox}>
              {jobForm.watch("position_arr")[index].preferred_certi_arr?.map((certi) => (
                <button
                  key={`${id}${certi}`}
                  css={cssObj.deleteButton}
                  type="button"
                  aria-label={`${certi} 삭제`}
                  onClick={() => {
                    jobForm.setValue(`position_arr.${index}.preferred_certi_arr`, [
                      ...(jobForm
                        .watch("position_arr")
                        [index].preferred_certi_arr?.filter((element) => element !== certi) || []),
                    ]);
                  }}
                >
                  {certi} <RiCloseFill />
                </button>
              ))}
            </div>
          </li>
        </ul>
      </div>
      <div css={cssObj.buttonBox}>
        <NormalButton
          buttonClick={() => append({ ...jobForm.watch("position_arr")[index] })}
          text="해당 직무 복사"
          wide={false}
          variant="outlined"
        />
        <NormalButton buttonClick={() => remove(index)} text="해당 직무 제거" wide={false} variant="filled" />
      </div>
    </div>
  );
};
