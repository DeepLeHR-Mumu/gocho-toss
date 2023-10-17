import { FunctionComponent } from "react";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";

import { CheckBox } from "shared-ui/common/checkbox";

import {
  addressInput,
  booleanInputBox,
  checkboxText,
  deleteFactoryButton,
  factoryContainer,
  factoryTitle,
  inputBox,
  inputContainer,
  inputLabel,
  inputTitle,
  welfareBox,
} from "./style";
import { FactoryBoxProps } from "./type";

export const FactoryBox: FunctionComponent<FactoryBoxProps> = ({ index, companyForm, remove }) => {
  const openPostCodePopup = useDaumPostcodePopup();

  return (
    <li css={factoryContainer}>
      <h3 css={factoryTitle}>공장 정보</h3>
      <div css={inputContainer}>
        <strong css={inputTitle}>공장 이름 *</strong>
        <input css={inputBox} {...companyForm.register(`factory_arr.${index}.factory_name`, { required: true })} />
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>공장 주소 *</strong>
        <input
          css={addressInput}
          type="button"
          onClick={() => {
            openPostCodePopup({
              onComplete: (addressObj: Address) => {
                companyForm.setValue(`factory_arr.${index}.address`, addressObj.address);
              },
            });
          }}
          {...companyForm.register(`factory_arr.${index}.address`, { required: true })}
        />
      </div>
      <div css={inputContainer}>
        <div css={welfareBox}>
          <strong css={inputTitle}>남자 임직원 *</strong>
          <input
            type="number"
            css={inputBox}
            {...companyForm.register(`factory_arr.${index}.male_number`, { required: true })}
          />
        </div>
        <div css={welfareBox}>
          <strong css={inputTitle}>여자 임직원 *</strong>
          <input
            type="number"
            css={inputBox}
            {...companyForm.register(`factory_arr.${index}.female_number`, { required: true })}
          />
        </div>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>생산품 *</strong>
        <input css={inputBox} {...companyForm.register(`factory_arr.${index}.product`, { required: true })} />
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>통근버스 *</strong>
        <label css={inputLabel} htmlFor={`버스유무${index}`}>
          <input
            type="checkbox"
            id={`버스유무${index}`}
            {...companyForm.register(`factory_arr.${index}.bus_bool`, {})}
          />
          <CheckBox isChecked={companyForm.watch("factory_arr")[index].bus_bool} /> <p css={checkboxText}>있음</p>
          <CheckBox isChecked={!companyForm.watch("factory_arr")[index].bus_bool} /> <p css={checkboxText}>없음</p>
        </label>
        <input
          css={booleanInputBox(!companyForm.watch("factory_arr")[index].bus_bool)}
          disabled={!companyForm.watch("factory_arr")[index].bus_bool}
          {...companyForm.register(`factory_arr.${index}.bus_etc`, {})}
        />
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>기숙사 *</strong>
        <label css={inputLabel} htmlFor={`기숙사유무${index}`}>
          <input
            type="checkbox"
            id={`기숙사유무${index}`}
            {...companyForm.register(`factory_arr.${index}.dormitory_bool`, {})}
          />
          <CheckBox isChecked={companyForm.watch("factory_arr")[index].dormitory_bool} /> <p css={checkboxText}>있음</p>
          <CheckBox isChecked={!companyForm.watch("factory_arr")[index].dormitory_bool} />{" "}
          <p css={checkboxText}>없음</p>
        </label>
        <input
          css={booleanInputBox(!companyForm.watch("factory_arr")[index].dormitory_bool)}
          disabled={!companyForm.watch("factory_arr")[index].dormitory_bool}
          {...companyForm.register(`factory_arr.${index}.dormitory_etc`, {})}
        />
      </div>
      <button css={deleteFactoryButton} type="button" onClick={() => remove(index)}>
        공장 삭제
      </button>
    </li>
  );
};
