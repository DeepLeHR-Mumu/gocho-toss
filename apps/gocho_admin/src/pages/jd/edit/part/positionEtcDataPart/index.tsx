import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";

import { SharedButton } from "shared-ui/common/sharedButton";

import { ErrorMessage } from "../../component";
import { certificateArr } from "./constant";
import { PositionBoxProps } from "./type";
import { cssObj } from "./style";

export const PositionEtcDataPart: FunctionComponent<PositionBoxProps> = ({ jobForm, jobData }) => {
  const [certiSearchWord, setCertiSearchWord] = useState<string>("");
  const [certiArr, setCertiArr] = useState<string[]>([]);

  const {
    register,
    setValue,
    formState: { errors },
  } = jobForm;

  useEffect(() => {
    if (certiArr.length === 0) {
      setValue(`preferred_certi_arr`, null);
      return;
    }
    setValue(`preferred_certi_arr`, certiArr);
  }, [certiArr, setValue]);

  useEffect(() => {
    setCertiArr(jobData.preferredCertiArr);
  }, [jobData]);

  return (
    <div css={cssObj.wrapper}>
      <div css={cssObj.container}>
        <ul css={cssObj.formBox}>
          <li>
            <strong css={cssObj.requiredTitle}>채용 인원</strong>
            {errors?.hire_number?.message && <ErrorMessage msg={errors.hire_number.message} />}

            <div css={cssObj.gridBox}>
              <SharedButton
                buttonType="fillBlue"
                width={8}
                onClickHandler={() => {
                  setValue(`hire_number`, -1);
                }}
                text="0명 채용"
              />
              <SharedButton
                buttonType="fillBlue"
                width={8}
                onClickHandler={() => {
                  setValue(`hire_number`, -2);
                }}
                text="00명 채용"
              />
              <SharedButton
                buttonType="fillBlue"
                width={8}
                onClickHandler={() => {
                  setValue(`hire_number`, -3);
                }}
                text="000명 채용"
              />
              <input
                css={cssObj.inputCSS}
                type="number"
                {...register(`hire_number`, {
                  valueAsNumber: true,
                  required: "채용 인원을 작성해주세요.",
                })}
              />
            </div>
          </li>
          <li>
            <strong css={cssObj.requiredTitle}>급여</strong>
            {errors?.pay_arr?.message && <ErrorMessage msg={errors.pay_arr.message} />}
            <p css={cssObj.textareaWarning}>엔터로 구분해주세요.</p>
            <div css={cssObj.textareaBox}>
              <textarea
                css={cssObj.textarea}
                {...register(`pay_arr`, {
                  required: "급여 정보를 작성해주세요.",
                })}
              />
            </div>
          </li>
          <li>
            <strong css={cssObj.noRequiredTitle}>기타 우대사항</strong>
            <p css={cssObj.textareaWarning}>엔터로 구분해주세요.</p>
            <div css={cssObj.textareaBox}>
              <textarea css={cssObj.textarea} {...register(`preferred_etc_arr`)} />
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
                      key={certi}
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
                  key={certi}
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
