import { FunctionComponent, useState } from "react";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { NUMBER_REGEXP } from "shared-constant";

import { SharedRadioButton } from "shared-ui/common/sharedRadioButton/sharedRadioButton";
import { commonCssObj } from "@/styles";

import { companyAuthUnionClickEvent } from "@/ga";
import { ONLY_INT_ERROR_TEXT, INDUSTRY_ARR, SIZE_ARR } from "./constant";
import { AuthBasicPartProps } from "./type";
import { cssObj } from "./style";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

export const BasicPart: FunctionComponent<AuthBasicPartProps> = ({ companyAuthForm }) => {
  const [isIndustryOpen, setIsIndustryOpen] = useState<boolean>(false);
  const [isSizeOpen, setIsSizeOpen] = useState<boolean>(false);

  const {
    register,
    setValue,
    watch,
    formState: { errors },
    clearErrors,
  } = companyAuthForm;

  const openPostCodePopup = useDaumPostcodePopup();

  const onClickAddress = () => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=0687bed33c060c4758f582d26ff44e16&libraries=services&libraries=services&autoload=false`;
    document.head.appendChild(mapScript);

    openPostCodePopup({
      onComplete: (addressObj: Address) => {
        setValue("location.address", addressObj.address, { shouldDirty: true });
        clearErrors("location.address");
        window.kakao.maps.load(() => {
          const geocoder = new window.kakao.maps.services.Geocoder();
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          geocoder.addressSearch(addressObj.address, (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const { x, y } = result[0];
              setValue("location.x", x);
              setValue("location.y", y);
            }
          });
        });
      },
    });
  };

  return (
    <section css={commonCssObj.partContainer} data-testid="company/edit/BasicPart">
      <h3 css={commonCssObj.partTitle}>일반 정보</h3>
      <div css={commonCssObj.container}>
        <input
          css={cssObj.hiddenInput}
          {...register("industry", {
            required: { value: true, message: "* 업종을 선택해 주세요." },
          })}
        />
        <strong css={commonCssObj.inputTitle(false)}>업종</strong>
        <div css={cssObj.inputWrapper}>
          <button
            // eslint-disable-next-line no-unneeded-ternary
            css={commonCssObj.select(17, errors.industry ? true : false)}
            type="button"
            onClick={() => {
              setIsIndustryOpen((prev) => !prev);
            }}
          >
            {watch("industry")}
            {isIndustryOpen ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          {errors.industry && <p css={cssObj.errorMessageRight}>{errors.industry.message}</p>}
          <div css={commonCssObj.optionList(isIndustryOpen, 26)}>
            {INDUSTRY_ARR.map((industry) => (
              <button
                type="button"
                css={commonCssObj.option}
                key={industry}
                value={industry}
                onMouseDown={() => {
                  setValue(`industry`, industry);
                  setIsIndustryOpen((prev) => !prev);
                  clearErrors("industry");
                }}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div css={commonCssObj.container}>
        <input
          css={cssObj.hiddenInput}
          {...register("size", {
            required: { value: true, message: "* 기업 규모를 선택해 주세요." },
          })}
        />
        <strong css={commonCssObj.inputTitle(false)}>기업 규모</strong>
        <div css={cssObj.inputWrapper}>
          <button
            css={commonCssObj.select(17, !!errors.size)}
            type="button"
            onClick={() => {
              setIsSizeOpen((prev) => !prev);
            }}
          >
            {watch("size")}
            {isSizeOpen ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          {errors.size && <p css={cssObj.errorMessageRight}>{errors.size.message}</p>}
          <div css={commonCssObj.optionList(isSizeOpen, 26)}>
            {SIZE_ARR.map((size) => (
              <button
                type="button"
                css={commonCssObj.option}
                key={size}
                value={size}
                onMouseDown={() => {
                  setValue(`size`, size);
                  setIsSizeOpen((prev) => !prev);
                  clearErrors("size");
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div css={commonCssObj.container}>
        <strong css={commonCssObj.inputTitle(false)}>설립일</strong>
        <div css={cssObj.inputWrapper}>
          <input
            css={commonCssObj.input(12.5, !!errors.found_date)}
            type="date"
            {...register("found_date", {
              required: { value: true, message: "* 공고 시작 날짜를 선택해 주세요" },
            })}
          />
          {errors.found_date && <p css={cssObj.errorMessageRight}>{errors.found_date.message}</p>}
        </div>
      </div>
      <div css={commonCssObj.container}>
        <strong css={commonCssObj.inputTitle(false)}>주소</strong>
        <label htmlFor="address" css={cssObj.addressWrapper}>
          <div css={cssObj.inputWrapper}>
            <input
              disabled
              placeholder="사업자등록증 상의 주소를 입력해 주세요."
              css={cssObj.customInput(38, !!errors.location?.address)}
              {...register("location.address", { required: { value: true, message: "* 주소를 입력해 주세요." } })}
            />
            {errors.location?.address && <p css={cssObj.errorMessageBottom}>{errors.location.address.message}</p>}
          </div>
          <button type="button" onClick={() => onClickAddress()} css={cssObj.addAddressButton}>
            주소찾기
          </button>
        </label>
      </div>
      <div css={commonCssObj.container}>
        <strong css={commonCssObj.inputTitle(false)}>사원수</strong>
        <div css={cssObj.inputWrapper}>
          <input
            type="number"
            css={commonCssObj.input(7.5, !!errors.employee_number)}
            onWheel={(event) => {
              event.currentTarget.blur();
            }}
            {...register("employee_number", {
              required: { value: true, message: "* 사원 수를 입력해 주세요." },
              min: { value: 1, message: "* 사원 수는 1명 이상 입력해 주세요." },
              pattern: NUMBER_REGEXP,
            })}
          />
          <p>명</p>
          {errors.employee_number && <p css={cssObj.errorMessageRight}>{errors.employee_number.message}</p>}
        </div>
      </div>
      <div css={commonCssObj.container}>
        <strong css={commonCssObj.inputTitle(false)}>평균 초봉</strong>
        <div css={cssObj.inputWrapper}>
          <input
            type="number"
            css={commonCssObj.input(7.5, !!errors.pay_start)}
            {...register("pay_start", {
              required: { value: true, message: "* 평균 초봉을 입력해 주세요." },
              min: { value: 1000, message: "* 평균 초봉은 1000만원 이상으로 입력해주세요" },
              pattern: {
                value: NUMBER_REGEXP,
                message: ONLY_INT_ERROR_TEXT,
              },
            })}
            placeholder="숫자만 입력해주세요"
          />
          <p>만원</p>
        </div>
        {errors.pay_start && <p css={cssObj.errorMessageRight}>{errors.pay_start.message}</p>}
      </div>
      <div css={commonCssObj.container}>
        <strong css={commonCssObj.inputTitle(false)}>평균 연봉</strong>
        <div css={cssObj.inputWrapper}>
          <input
            type="number"
            css={commonCssObj.input(7.5, !!errors.pay_avg)}
            {...register("pay_avg", {
              required: { value: true, message: "* 평균 연봉을 입력해 주세요." },
              min: { value: 1000, message: "* 평균 연봉은 1000만원 이상으로 입력해주세요" },
              pattern: NUMBER_REGEXP,
            })}
            placeholder="숫자만 입력해주세요"
          />
          <p>만원</p>
        </div>
        {errors.pay_avg && <p css={cssObj.errorMessageRight}>{errors.pay_avg.message}</p>}
      </div>
      <div css={commonCssObj.container}>
        <strong css={commonCssObj.optionalInputTitle(false)}>기타 연봉 정보</strong>
        <input
          type="text"
          maxLength={120}
          placeholder="상여금, 성과급 등의 정보를 적어주세요"
          css={commonCssObj.input(47, false)}
          {...register("pay_desc")}
        />
      </div>
      <div css={commonCssObj.longContainer}>
        <div css={cssObj.titleWrapper}>
          <strong css={commonCssObj.inputTitle(false)}>노조</strong>
        </div>
        <div>
          <div css={commonCssObj.labelContainer}>
            <SharedRadioButton
              registerObj={register("nozo.exists", {
                required: { value: true, message: "* 노조 유무를 선택해 주세요." },
              })}
              isDisabled={false}
              value="true"
              id="nozoTrue"
              onClick={() => companyAuthUnionClickEvent()}
              additionalStyle={errors.nozo?.exists ? cssObj.errorRadioButton : ""}
            >
              <p css={cssObj.radioLabel}>있음</p>
            </SharedRadioButton>
            <SharedRadioButton
              registerObj={register("nozo.exists", {
                required: { value: true, message: "* 노조 유무를 선택해 주세요." },
              })}
              isDisabled={false}
              value="false"
              id="nozoFalse"
              onClick={() => companyAuthUnionClickEvent()}
              additionalStyle={errors.nozo?.exists ? cssObj.errorRadioButton : ""}
            >
              <p css={cssObj.radioLabel}>없음</p>
            </SharedRadioButton>
            {errors.nozo?.exists && <p css={cssObj.errorMessageRight}>{errors.nozo.exists.message}</p>}
          </div>
          <input
            type="text"
            maxLength={50}
            placeholder="보충설명(선택)"
            css={commonCssObj.input(47, false)}
            {...register("nozo.desc")}
          />
        </div>
      </div>
    </section>
  );
};
