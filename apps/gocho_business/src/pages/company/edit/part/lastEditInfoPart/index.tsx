import { FunctionComponent } from "react";
import { FiUser, FiInfo } from "react-icons/fi";
import { MdWarningAmber } from "react-icons/md";
import dayjs from "dayjs";

import { Spinner } from "shared-ui/common/atom/spinner";

import { useCompanyDetail, useManagerProfile } from "@/apis";

import { cssObj } from "./style";

export const LastEditInfoPart: FunctionComponent = () => {
  const { data: userInfoData } = useManagerProfile();
  const { data: companyDetailData } = useCompanyDetail({
    companyId: userInfoData?.company.id,
  });

  if (!companyDetailData) {
    return (
      <div css={cssObj.spinnerBox}>
        <Spinner />
      </div>
    );
  }

  if (companyDetailData.status.name === "수정반려" || companyDetailData.status.name === "등록반려") {
    return (
      <div css={cssObj.companionWrapper}>
        <MdWarningAmber />
        <p css={cssObj.companionDesc}>기업정보 수정요청 반려됨</p>
        <p css={cssObj.userInfo}>
          등록자
          <FiUser />
          {companyDetailData.uploader.name}({companyDetailData.uploader.department})
        </p>
      </div>
    );
  }

  if (companyDetailData.status.name === "등록대기" || companyDetailData.status.name === "수정대기") {
    return (
      <div css={cssObj.companionWrapper}>
        <MdWarningAmber />
        <p css={cssObj.companionDesc}>기업정보 수정요청 대기중</p>
        <p css={cssObj.userInfo}>
          등록자
          <FiUser />
          {companyDetailData.uploader.name === "없음"
            ? "없음"
            : `${companyDetailData.uploader.name}(${companyDetailData.uploader.department})`}
        </p>
      </div>
    );
  }

  return (
    <div css={cssObj.wrapper}>
      <FiInfo />
      <p css={cssObj.desc}>
        기업정보 수정 등록일
        <span css={cssObj.dateInfo}>
          {companyDetailData.uploader.updatedTime
            ? dayjs(companyDetailData.uploader.updatedTime).format("YY.MM.DD")
            : "-"}
        </span>
      </p>
      <p css={cssObj.userInfo}>
        등록자
        <FiUser />
        {companyDetailData.uploader.name === "없음"
          ? "없음"
          : `${companyDetailData.uploader.name}(${companyDetailData.uploader.department})`}
      </p>
    </div>
  );
};
