import { FocusEvent, FunctionComponent } from "react";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
// import { FiCalendar } from "react-icons/fi";

import { Spinner } from "shared-ui/common/atom/spinner";
import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";
import { NUMBER_REGEXP } from "shared-constant";

import { useCompanyDetail, useManagerProfile } from "@/apis";

import { MAX_LENGTH_ERROR_TEXT, ONLY_INT_ERROR_TEXT } from "./constant";
import { BasicPartProps } from "./type";
import { commonCssObj } from "../style";
import { cssObj } from "./style";

export const BasicPart: FunctionComponent<BasicPartProps> = ({ companyForm }) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = companyForm;
  const { data: userInfoData } = useManagerProfile();

  const { data: companyDetailData } = useCompanyDetail({
    companyId: userInfoData?.company.id,
  });

  const openPostCodePopup = useDaumPostcodePopup();

  const onClickAddress = () => {
    openPostCodePopup({
      onComplete: (addressObj: Address) => {
        setValue("location.address", addressObj.address, { shouldDirty: true });
      },
    });
  };

  if (!companyDetailData) {
    return (
      <div css={cssObj.spinnerBox}>
        <Spinner />
      </div>
    );
  }

  return (
    <section css={commonCssObj.partContainer} data-testid="company/edit/BasicPart">
      <h3 css={commonCssObj.partTitle}>일반 정보</h3>
      <div css={commonCssObj.container}>
        <strong css={commonCssObj.inputTitle(false)}>주소</strong>
        <label htmlFor="address" css={cssObj.addressWrapper}>
          <input
            type="button"
            disabled
            {...register("location.address", { required: true })}
            placeholder="좌측 버튼을 눌러 기업 주소를 입력해주세요"
            css={commonCssObj.input(38, true)}
          />
          <button type="button" onClick={onClickAddress} css={cssObj.addAddressButton}>
            주소찾기
          </button>
        </label>
      </div>
      <div css={commonCssObj.container}>
        <strong css={commonCssObj.inputTitle(false)}>사원수</strong>
        <div css={cssObj.inputWrapper}>
          <input
            type="number"
            css={commonCssObj.input(7.5, !companyDetailData.uploader.isMine)}
            onWheel={(event) => {
              event.currentTarget.blur();
            }}
            {...register("employee_number", {
              required: true,
              min: 1,
              pattern: NUMBER_REGEXP,
              disabled: !companyDetailData.uploader.isMine,
            })}
          />
          <p>명</p>
        </div>
      </div>
      <div css={commonCssObj.container}>
        <strong css={commonCssObj.inputTitle(false)}>평균 초봉</strong>
        <div css={cssObj.inputWrapper}>
          <input
            type="number"
            css={commonCssObj.input(7.5, !companyDetailData.uploader.isMine)}
            {...register("pay_start", {
              required: true,
              min: 1000,
              pattern: {
                value: NUMBER_REGEXP,
                message: ONLY_INT_ERROR_TEXT,
              },
              disabled: !companyDetailData.uploader.isMine,
              onBlur: (onBlurEvent: FocusEvent<HTMLInputElement>) => {
                if (Number(onBlurEvent.target.value) <= 999) {
                  window.alert("월급이 아닌 연봉 기준입니다. 입력하신 정보가 맞나요?");
                }
              },
            })}
            placeholder="숫자만 입력해주세요"
          />
          <p>만원</p>
        </div>
        <p css={commonCssObj.errorMessage}>{errors.pay_start?.message}</p>
      </div>
      <div css={commonCssObj.container}>
        <strong css={commonCssObj.inputTitle(false)}>평균 연봉</strong>
        <div css={cssObj.inputWrapper}>
          <input
            type="number"
            css={commonCssObj.input(7.5, !companyDetailData.uploader.isMine)}
            {...register("pay_avg", {
              required: true,
              min: 1000,
              pattern: NUMBER_REGEXP,
              disabled: !companyDetailData.uploader.isMine,
              onBlur: (onBlurEvent: FocusEvent<HTMLInputElement>) => {
                if (Number(onBlurEvent.target.value) <= 999) {
                  window.alert("월급이 아닌 연봉 기준입니다. 입력하신 정보가 맞나요?");
                }
              },
            })}
            placeholder="숫자만 입력해주세요"
          />
          <p>만원</p>
        </div>
        <p css={commonCssObj.errorMessage}>{errors.pay_avg?.message}</p>
      </div>
      <div css={commonCssObj.container}>
        <strong css={commonCssObj.inputTitle(false)}>기타 연봉 정보</strong>
        <input
          type="text"
          {...register("pay_desc", {
            maxLength: {
              value: 120,
              message: MAX_LENGTH_ERROR_TEXT,
            },
            disabled: !companyDetailData.uploader.isMine,
            onBlur: (onBlurEvent: FocusEvent<HTMLInputElement>) => {
              if (onBlurEvent.target.value.trim().length === 0) {
                setValue("pay_desc", "");
              }
            },
          })}
          placeholder="상여금, 성과급 등의 정보를 적어주세요"
          css={commonCssObj.input(30, !companyDetailData.uploader.isMine)}
        />
        <p css={commonCssObj.errorMessage}>{errors.pay_desc?.message}</p>
      </div>
      <div css={commonCssObj.longContainer}>
        <div css={cssObj.titleWrapper}>
          <strong css={commonCssObj.inputTitle(false)}>노조</strong>
        </div>
        <div>
          <div css={commonCssObj.labelContainer}>
            <SharedRadioButton
              registerObj={register("nozo.exists", { required: true })}
              isDisabled={!companyDetailData.uploader.isMine}
              value="true"
              id="nozoTrue"
            >
              <p css={cssObj.radioLabel}>있음</p>
            </SharedRadioButton>
            <SharedRadioButton
              registerObj={register("nozo.exists", { disabled: !companyDetailData.uploader.isMine, required: true })}
              isDisabled={!companyDetailData.uploader.isMine}
              value="false"
              id="nozoFalse"
            >
              <p css={cssObj.radioLabel}>없음</p>
            </SharedRadioButton>
          </div>
          <input
            type="text"
            {...register("nozo.desc", {
              maxLength: {
                value: 70,
                message: MAX_LENGTH_ERROR_TEXT,
              },
              disabled: !companyDetailData.uploader.isMine,
              onBlur: (onBlurEvent: FocusEvent<HTMLInputElement>) => {
                if (onBlurEvent.target.value.trim().length === 0) {
                  setValue("nozo.desc", "");
                }
              },
            })}
            placeholder="보충설명(선택)"
            css={commonCssObj.input(47, !companyDetailData.uploader.isMine)}
          />
          <p css={commonCssObj.errorMessage}>{errors.nozo?.desc?.message}</p>
        </div>
      </div>
    </section>
  );
};
