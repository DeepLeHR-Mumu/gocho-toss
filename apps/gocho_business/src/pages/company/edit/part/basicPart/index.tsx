import { FocusEvent, FunctionComponent, useState } from "react";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";
import { NUMBER_REGEXP } from "shared-constant";

import { commonCssObj } from "@/styles";

import { MAX_LENGTH_ERROR_TEXT, ONLY_INT_ERROR_TEXT, INDUSTRY_ARR, SIZE_ARR } from "./constant";
import { BasicPartProps } from "./type";
import { cssObj } from "./style";

export const BasicPart: FunctionComponent<BasicPartProps> = ({ companyForm, isOtherEdit }) => {
  const [isIndustryOpen, setIsIndustryOpen] = useState<boolean>(false);
  const [isSizeOpen, setIsSizeOpen] = useState<boolean>(false);

  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = companyForm;

  const openPostCodePopup = useDaumPostcodePopup();

  const onClickAddress = () => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=0687bed33c060c4758f582d26ff44e16&libraries=services&libraries=services&autoload=false`;
    document.head.appendChild(mapScript);

    openPostCodePopup({
      onComplete: (addressObj: Address) => {
        setValue("location.address", addressObj.address, { shouldDirty: true });
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
            required: "* 업종을 입력해주세요.",
          })}
        />
        <strong css={commonCssObj.inputTitle(false)}>업종</strong>
        <div css={cssObj.inputWrapper}>
          <button
            css={commonCssObj.select(17, Boolean(errors.industry))}
            type="button"
            onClick={() => {
              setIsIndustryOpen((prev) => !prev);
            }}
            disabled={isOtherEdit}
          >
            {watch("industry")}
            {isIndustryOpen ? <FiChevronUp /> : <FiChevronDown />}
          </button>
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
            required: "* 기업 규모를 입력해주세요.",
          })}
        />
        <strong css={commonCssObj.inputTitle(false)}>기업 규모</strong>
        <div css={cssObj.inputWrapper}>
          <button
            css={commonCssObj.select(17, Boolean(errors.size))}
            type="button"
            onClick={() => {
              setIsSizeOpen((prev) => !prev);
            }}
            disabled={isOtherEdit}
          >
            {watch("size")}
            {isSizeOpen ? <FiChevronUp /> : <FiChevronDown />}
          </button>
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
        <input
          css={commonCssObj.input(12.5, Boolean(errors.found_date))}
          type="date"
          {...register("found_date", {
            required: "* 설립일을 입력해주세요.",
          })}
          disabled={isOtherEdit}
        />
        <div css={cssObj.errorMessageWrapper}>
          <p css={commonCssObj.errorMessage}>{errors.found_date?.message}</p>
        </div>
      </div>
      <div css={commonCssObj.container}>
        <strong css={commonCssObj.inputTitle(false)}>주소</strong>
        <label htmlFor="address" css={cssObj.addressWrapper}>
          <input
            type="button"
            disabled
            {...register("location.address", { required: true })}
            placeholder="좌측 버튼을 눌러 기업 주소를 입력해주세요"
            css={commonCssObj.input(38, false)}
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
            css={commonCssObj.input(7.5, Boolean(errors.employee_number))}
            onWheel={(event) => {
              event.currentTarget.blur();
            }}
            {...register("employee_number", {
              required: "* 사원수를 입력해주세요.",
              min: 1,
              pattern: NUMBER_REGEXP,
              disabled: isOtherEdit,
            })}
            disabled={isOtherEdit}
          />
          <p>명</p>
        </div>
        <div css={cssObj.errorMessageWrapper}>
          <p css={commonCssObj.errorMessage}>{errors.employee_number?.message}</p>
        </div>
      </div>
      <div css={commonCssObj.container}>
        <strong css={commonCssObj.inputTitle(false)}>평균 초봉</strong>
        <div css={cssObj.inputWrapper}>
          <input
            type="number"
            css={commonCssObj.input(7.5, Boolean(errors.pay_start))}
            {...register("pay_start", {
              required: "* 평균 초봉을 입력해주세요.",
              min: 1000,
              pattern: {
                value: NUMBER_REGEXP,
                message: ONLY_INT_ERROR_TEXT,
              },
              disabled: isOtherEdit,
            })}
            placeholder="숫자만 입력해주세요"
            disabled={isOtherEdit}
          />
          <p>만원</p>
        </div>
        <div css={cssObj.errorMessageWrapper}>
          <p css={commonCssObj.errorMessage}>{errors.pay_start?.message}</p>
        </div>
      </div>
      <div css={commonCssObj.container}>
        <strong css={commonCssObj.inputTitle(false)}>평균 연봉</strong>
        <div css={cssObj.inputWrapper}>
          <input
            type="number"
            css={commonCssObj.input(7.5, Boolean(errors.pay_avg))}
            {...register("pay_avg", {
              required: "* 평균 연봉을 입력해주세요.",
              min: 1000,
              pattern: NUMBER_REGEXP,
              disabled: isOtherEdit,
            })}
            placeholder="숫자만 입력해주세요"
            disabled={isOtherEdit}
          />
          <p>만원</p>
        </div>
        <div css={cssObj.errorMessageWrapper}>
          <p css={commonCssObj.errorMessage}>{errors.pay_avg?.message}</p>
        </div>
      </div>
      <div css={commonCssObj.container}>
        <strong css={commonCssObj.optionalInputTitle(false)}>기타 연봉 정보</strong>
        <input
          type="text"
          css={commonCssObj.input(30, Boolean(errors.pay_desc))}
          maxLength={120}
          {...register("pay_desc", {
            maxLength: {
              value: 120,
              message: MAX_LENGTH_ERROR_TEXT,
            },
            disabled: isOtherEdit,
            onBlur: (onBlurEvent: FocusEvent<HTMLInputElement>) => {
              if (onBlurEvent.target.value.trim().length === 0) {
                setValue("pay_desc", "");
              }
            },
          })}
          placeholder="상여금, 성과급 등의 정보를 적어주세요"
          disabled={isOtherEdit}
        />
      </div>
      <div css={commonCssObj.longContainer}>
        <div css={cssObj.titleWrapper}>
          <strong css={commonCssObj.inputTitle(false)}>노조</strong>
        </div>
        <div>
          <div css={cssObj.nozoLabelContainer}>
            <SharedRadioButton
              registerObj={register("nozo.exists", { disabled: isOtherEdit, required: true })}
              isDisabled={isOtherEdit}
              value="true"
              id="nozoTrue"
            >
              <p css={cssObj.radioLabel}>있음</p>
            </SharedRadioButton>
            <SharedRadioButton
              registerObj={register("nozo.exists", { disabled: isOtherEdit, required: true })}
              isDisabled={isOtherEdit}
              value="false"
              id="nozoFalse"
            >
              <p css={cssObj.radioLabel}>없음</p>
            </SharedRadioButton>
          </div>
          <input
            type="text"
            maxLength={70}
            css={commonCssObj.input(47, Boolean(errors.nozo?.desc))}
            {...register("nozo.desc", {
              maxLength: {
                value: 70,
                message: MAX_LENGTH_ERROR_TEXT,
              },
              disabled: isOtherEdit,
              onBlur: (onBlurEvent: FocusEvent<HTMLInputElement>) => {
                if (onBlurEvent.target.value.trim().length === 0) {
                  setValue("nozo.desc", "");
                }
              },
            })}
            placeholder="보충설명(선택)"
            disabled={isOtherEdit}
          />
          <div css={cssObj.errorMessageWrapper}>
            <p css={commonCssObj.errorMessage}>{errors.nozo?.desc?.message}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
