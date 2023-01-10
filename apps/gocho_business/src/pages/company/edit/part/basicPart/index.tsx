import { FunctionComponent } from "react";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import { BiUserVoice } from "react-icons/bi";
import { FiMap, FiMapPin, FiUsers } from "react-icons/fi";

import { Spinner } from "shared-ui/common/atom/spinner";
import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";
import { COLORS } from "shared-style/color";

import { CommonRoundButton } from "@/components/common";
import { useCompanyDetail } from "@/apis/company/useCompanyDetail";
import { useUserState } from "@/globalStates/useUserState";
import { POSTCODE_SCRIPT_URL } from "@/constants/url";

import { KakaoMap } from "../../component/kakaoMap";
import { BasicPartProps } from "./type";
import { cssObj } from "./style";

export const BasicPart: FunctionComponent<BasicPartProps> = ({ companyForm }) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = companyForm;
  const { userInfoData } = useUserState();

  const { data: companyData } = useCompanyDetail({
    companyId: userInfoData?.companyId,
  });

  const openPostCodePopup = useDaumPostcodePopup(POSTCODE_SCRIPT_URL);

  if (!companyData) {
    return (
      <div css={cssObj.spinnerBox}>
        <Spinner />
      </div>
    );
  }

  const foundDate = new Intl.DateTimeFormat("ko", { dateStyle: "long" });

  return (
    <div css={cssObj.wrapper} data-testid="company/edit/BasicPart">
      <div css={cssObj.container()}>
        <strong css={cssObj.subTitle()}>기업 형태</strong>
        <p css={cssObj.textValue}>{companyData.size}</p>
      </div>
      <div css={cssObj.rowBox}>
        <div css={cssObj.container(30)}>
          <strong css={cssObj.subTitle()}>설립일</strong>
          <p css={cssObj.textValue}>{foundDate.format(new Date(companyData.foundNumber))}</p>
        </div>
        <div css={cssObj.container()}>
          <strong css={cssObj.subTitle()}>사업자 번호</strong>
          <p css={cssObj.textValue}>{companyData.businessNumber}</p>
        </div>
      </div>
      <div css={cssObj.rowBox}>
        <div css={cssObj.container(30)}>
          <strong css={cssObj.subTitle(errors.employee_number?.type === "required")}>사원수</strong>
          <label htmlFor="employee_number" css={cssObj.employeeNumber}>
            <FiUsers />
            <input
              type="number"
              onWheel={(event) => {
                event.currentTarget.blur();
              }}
              {...register("employee_number", { required: true })}
              css={cssObj.input(errors.employee_number?.type === "required")}
            />
            <p css={cssObj.unit}>명</p>
          </label>
        </div>
        <div css={cssObj.container(70)}>
          <strong css={cssObj.subTitle(errors.intro?.type === "required")}>기업 한줄 소개</strong>
          <input
            type="text"
            {...register("intro", { required: true, maxLength: 120 })}
            placeholder="기업 한줄 소개"
            css={cssObj.input(errors.intro?.type === "required")}
          />
        </div>
      </div>
      <div css={cssObj.container()}>
        <strong css={cssObj.subTitle(errors.address?.type === "required")}>기업 본사 주소</strong>
        <label htmlFor="address" css={cssObj.address}>
          <CommonRoundButton
            Icon={FiMap}
            text="주소찾기"
            onClickHandler={() =>
              openPostCodePopup({
                onComplete: (addressObj: Address) => {
                  setValue("address", addressObj.address);
                },
              })
            }
            backgroundColor={COLORS.GRAY80}
          />
          <div css={cssObj.inputBox(errors.address?.type === "required")}>
            <FiMapPin />
            <input
              type="button"
              {...register("address", { required: true })}
              placeholder="좌측 버튼을 눌러 기업 주소를 입력해주세요"
              onClick={() =>
                openPostCodePopup({
                  onComplete: (addressObj: Address) => {
                    setValue("address", addressObj.address);
                  },
                })
              }
            />
          </div>
        </label>
        <KakaoMap address={watch("address")} />
      </div>
      <div css={cssObj.container(80)}>
        <strong css={cssObj.subTitle(errors.nozo?.exists?.type === "required")}>노조</strong>
        <div css={cssObj.nozoBox}>
          <BiUserVoice />
          <SharedRadioButton registerObj={register("nozo.exists", { required: true })} value="true" id="nozoTrue">
            <p css={cssObj.unit}>있음</p>
          </SharedRadioButton>
          <SharedRadioButton registerObj={register("nozo.exists", { required: true })} value="false" id="nozoFalse">
            <p css={cssObj.unit}>없음</p>
          </SharedRadioButton>
        </div>
        <input
          type="text"
          {...register("nozo.desc", { maxLength: 70 })}
          placeholder="보충설명(선택)"
          css={cssObj.input(errors.nozo?.desc?.type === "maxLength")}
        />
      </div>
      <div css={cssObj.container(80)}>
        <strong css={cssObj.subTitle()}>연봉 정보</strong>
        <div css={cssObj.payContainer}>
          <div css={cssObj.payBox}>
            <strong css={cssObj.infoTitle(errors.pay_start?.type === "required")}>평균 초봉</strong>
            <div css={cssObj.payLabel}>
              <input
                type="number"
                {...register("pay_start", { required: true })}
                placeholder="평균 초봉"
                css={cssObj.input(errors.pay_start?.type === "required")}
              />
              <p css={cssObj.textValue}>만원</p>
            </div>
          </div>
          <div css={cssObj.payBox}>
            <strong css={cssObj.infoTitle(errors.pay_avg?.type === "required")}>평균 연봉</strong>
            <div css={cssObj.payLabel}>
              <input
                type="number"
                {...register("pay_avg", { required: true })}
                placeholder="평균 연봉"
                css={cssObj.input(errors.pay_avg?.type === "required")}
              />
              <p css={cssObj.textValue}>만원</p>
            </div>
          </div>
        </div>
        <div css={cssObj.container()}>
          <strong css={cssObj.infoTitle()}>기타 연봉 정보</strong>
          <input
            type="text"
            {...register("pay_desc", { maxLength: 120 })}
            placeholder="상여금, 성과급 등의 정보를 적어주세요"
            css={cssObj.input(errors.pay_desc?.type === "maxLength")}
          />
        </div>
      </div>
    </div>
  );
};
