import { FunctionComponent } from "react";
import { BiUserVoice } from "react-icons/bi";
import { FiMap, FiMapPin, FiUsers } from "react-icons/fi";

import { Spinner } from "shared-ui/common/atom/spinner";
import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";

import { useCompanyDetail } from "@/apis/company/useCompanyDetail";
import { useUserState } from "@/globalStates/useUserState";

import { BasicPartProps } from "./type";
import { cssObj } from "./style";

export const BasicPart: FunctionComponent<BasicPartProps> = ({ companyForm }) => {
  const { register } = companyForm;
  const { userInfoData } = useUserState();

  const { data: companyData, isLoading: isCompanyDataLoading } = useCompanyDetail({
    companyId: userInfoData?.companyId,
  });

  // useEffect(() => {
  //   if (companyData) {
  //     reset({
  //       // employee_number: companyData.employeeNumber,
  //       intro: companyData.intro || "",
  //       address: companyData.address,
  //       nozo: {
  //         exists: companyData.nozo.exists ? "true" : "false",
  //         desc: companyData.nozo.desc || "",
  //       },
  //       pay_avg: companyData.payAvg,
  //       pay_start: companyData.payStart,
  //       pay_desc: companyData.payDesc || "",
  //     });
  //   }
  // }, [companyData, reset, router]);

  if (!companyData || isCompanyDataLoading) {
    return (
      <div css={cssObj.spinnerBox}>
        <Spinner />
      </div>
    );
  }

  const foundDate = new Intl.DateTimeFormat("ko", { dateStyle: "long" });

  return (
    <div css={cssObj.wrapper}>
      <div css={cssObj.lineBox()}>
        <strong css={cssObj.subTitle}>기업 형태</strong>
        <p css={cssObj.textValue}>{companyData.size}</p>
      </div>
      <div css={cssObj.flexStartBox}>
        <div css={cssObj.lineBox(30)}>
          <strong css={cssObj.subTitle}>설립일</strong>
          <p css={cssObj.textValue}>{foundDate.format(new Date(companyData.foundNumber))}</p>
        </div>
        <div css={cssObj.lineBox()}>
          <strong css={cssObj.subTitle}>사업자 번호</strong>
          <p css={cssObj.textValue}>{companyData.businessNumber}</p>
        </div>
      </div>
      <div css={cssObj.flexStartBox}>
        <div css={cssObj.lineBox(30)}>
          <strong css={cssObj.subTitle}>사원수</strong>
          <label htmlFor="employee_number" css={cssObj.employeeNumber}>
            <FiUsers />
            <input
              type="number"
              onWheel={(event) => {
                event.currentTarget.blur();
              }}
              {...register("employee_number")}
              css={cssObj.inputLine}
            />
            <p css={cssObj.unit}>명</p>
          </label>
        </div>
        <div css={cssObj.lineBox(70)}>
          <strong css={cssObj.subTitle}>기업 한줄 소개</strong>
          <input type="text" {...register("intro")} placeholder="기업 한줄 소개" css={cssObj.inputLine} />
        </div>
      </div>
      <div css={cssObj.lineBox()}>
        <strong css={cssObj.subTitle}>기업 본사 주소</strong>
        <label htmlFor="address" css={cssObj.address}>
          <button type="button" css={cssObj.findAddressButton}>
            <FiMap /> 주소찾기
          </button>
          <div css={cssObj.inputLineBox}>
            <FiMapPin />
            <input type="text" {...register("address")} placeholder="placeHolder" />
          </div>
        </label>
        <div css={cssObj.mapBox}>map</div>
      </div>
      <div css={cssObj.lineBox(80)}>
        <strong css={cssObj.subTitle}>노조</strong>
        <div css={cssObj.nozoBox}>
          <BiUserVoice />
          <SharedRadioButton registerObj={register("nozo.exists")} value="true" id="nozoTrue">
            <p css={cssObj.unit}>있음</p>
          </SharedRadioButton>
          <SharedRadioButton registerObj={register("nozo.exists")} value="false" id="nozoFalse">
            <p css={cssObj.unit}>없음</p>
          </SharedRadioButton>
        </div>
        <input type="text" {...register("nozo.desc")} placeholder="보충설명(선택)" css={cssObj.inputLine} />
      </div>
      <div css={cssObj.lineBox(80)}>
        <strong css={cssObj.subTitle}>연봉 정보</strong>
        <div css={cssObj.flexBox}>
          <div css={cssObj.payBox}>
            <strong css={cssObj.infoTitle}>평균 초봉</strong>
            <div css={cssObj.flexCenterBox}>
              <input type="number" {...register("pay_start")} placeholder="평균 초봉" css={cssObj.inputLine} />
              <p css={cssObj.textValue}>만원</p>
            </div>
          </div>
          <div css={cssObj.payBox}>
            <strong css={cssObj.infoTitle}>평균 연봉</strong>
            <div css={cssObj.flexCenterBox}>
              <input type="number" {...register("pay_avg")} placeholder="평균 연봉" css={cssObj.inputLine} />
              <p css={cssObj.textValue}>만원</p>
            </div>
          </div>
        </div>
        <div css={cssObj.lineBox()}>
          <strong css={cssObj.infoTitle}>기타 연봉 정보</strong>
          <input
            type="text"
            {...register("pay_desc")}
            placeholder="상여금, 성과급 등의 정보를 적어주세요"
            css={cssObj.inputLine}
          />
        </div>
      </div>
    </div>
  );
};
