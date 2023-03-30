import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";

import { NormalButton } from "shared-ui/common/atom/button/normalButton";

import { ErrorMessage } from "../../component";
import { certificateArr } from "./constant";
import { PositionBoxProps } from "./type";
import { cssObj } from "./style";

export const PositionEtcDataPart: FunctionComponent<PositionBoxProps> = ({ id, index, jobForm, jobData }) => {
  const [certiSearchWord, setCertiSearchWord] = useState<string>("");
  const [certiArr, setCertiArr] = useState<string[]>([]);

  const {
    register,
    setValue,
    formState: { errors },
  } = jobForm;

  const positionError = errors.position_arr && errors.position_arr[index];

  useEffect(() => {
    if (certiArr.length === 0) {
      setValue(`position_arr.${index}.preferred_certi_arr`, null);
      return;
    }
    setValue(`position_arr.${index}.preferred_certi_arr`, certiArr);
  }, [certiArr, index, setValue]);

  useEffect(() => {
    setCertiArr(jobData.positionArr[index].preferredCertiArr);
  }, [index, jobData.positionArr]);

  return (
    <div css={cssObj.wrapper}>
      <div css={cssObj.container}>
        <ul css={cssObj.formBox}>
          <li>
            <strong css={cssObj.requiredTitle}>채용 인원</strong>
            {positionError?.hire_number?.message && <ErrorMessage msg={positionError.hire_number.message} />}

            <div css={cssObj.gridBox}>
              <NormalButton
                buttonClick={() => {
                  setValue(`position_arr.${index}.hire_number`, -1);
                }}
                text="0명 채용"
                wide={false}
                variant="text"
              />
              <NormalButton
                buttonClick={() => {
                  setValue(`position_arr.${index}.hire_number`, -2);
                }}
                text="00명 채용"
                wide={false}
                variant="text"
              />
              <NormalButton
                buttonClick={() => {
                  setValue(`position_arr.${index}.hire_number`, -3);
                }}
                text="000명 채용"
                wide={false}
                variant="text"
              />
              <input
                css={cssObj.inputCSS}
                type="number"
                {...register(`position_arr.${index}.hire_number`, {
                  valueAsNumber: true,
                  required: "채용 인원을 작성해주세요.",
                })}
              />
            </div>
          </li>
          <li>
            <strong css={cssObj.requiredTitle}>급여</strong>
            {positionError?.pay_arr?.message && <ErrorMessage msg={positionError.pay_arr.message} />}
            <p css={cssObj.textareaWarning}>엔터로 구분해주세요.</p>
            <div css={cssObj.textareaBox}>
              <textarea
                css={cssObj.textarea}
                {...register(`position_arr.${index}.pay_arr`, {
                  required: "급여 정보를 작성해주세요.",
                })}
              />
            </div>
          </li>
          <li>
            <strong css={cssObj.noRequiredTitle}>기타 우대사항</strong>
            <p css={cssObj.textareaWarning}>엔터로 구분해주세요.</p>
            <div css={cssObj.textareaBox}>
              <textarea css={cssObj.textarea} {...register(`position_arr.${index}.preferred_etc_arr`)} />
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
                  const isHaveCerti = certiArr.includes(certi);
                  return (
                    <button
                      type="button"
                      css={isHaveCerti ? cssObj.isHaveCertiButton : cssObj.certiButton}
                      key={`${id}${certi}`}
                      onClick={() => {
                        setCertiArr((prevCerti) => {
                          const multipleCertiBlockArr = prevCerti.filter((currentCerti) => currentCerti !== certi);
                          return [...multipleCertiBlockArr, certi];
                        });
                      }}
                    >
                      <div />
                      {certi}
                    </button>
                  );
                })}
            </div>
            <div css={cssObj.flexBox}>
              {certiArr.map((certi) => (
                <button
                  key={`${id}${certi}`}
                  css={cssObj.deleteButton}
                  type="button"
                  aria-label={`${certi} 삭제`}
                  onClick={() => {
                    setCertiArr((prevCerti) => {
                      const filterCertiArr = prevCerti.filter((currentCerti) => currentCerti !== certi);
                      return filterCertiArr;
                    });
                  }}
                >
                  {certi} <RiCloseFill />
                </button>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
