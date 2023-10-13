import { FunctionComponent } from "react";
import { FiLock, FiXCircle } from "react-icons/fi";
import dayjs from "dayjs";

import { Spinner } from "shared-ui/common/spinner";
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

  const isWaiting = companyDetailData.status.name.includes("대기");

  if (companyDetailData.status.name === "등록대기" || companyDetailData.status.name === "수정대기") {
    return (
      <div css={cssObj.wrapper(isWaiting)}>
        <div css={cssObj.infoTitle(isWaiting)}>
          <FiLock />
          <p>기업정보 수정 검수중</p>
        </div>
        <div css={cssObj.infoContainer}>
          <div css={cssObj.userInfo}>
            <p css={cssObj.infoBox}>
              등록자
              <span>{companyDetailData.uploader.name}</span>
            </p>
            <div css={cssObj.contour} />
            <p css={cssObj.infoBox}>
              수정요청일
              <span>{dayjs(companyDetailData.uploader.updatedTime).format("YYYY.MM.DD")}</span>
            </p>
          </div>
          <p css={cssObj.email}>
            고객센터<span>cs@deeplehr.com</span>
          </p>
        </div>
      </div>
    );
  }

  if (companyDetailData.status.name === "수정반려" || companyDetailData.status.name === "등록반려") {
    return (
      <div css={cssObj.wrapper(isWaiting)}>
        <div css={cssObj.infoTitle(isWaiting)}>
          <FiXCircle />
          <p>기업정보 수정요청 반려됨</p>
        </div>
        <div css={cssObj.infoContainer}>
          <div css={cssObj.userInfo}>
            <p css={cssObj.infoBox}>
              등록자
              <span>{companyDetailData.uploader.name}</span>
            </p>
            <div css={cssObj.contour} />
            <p css={cssObj.infoBox}>
              수정요청일
              <span>{dayjs(companyDetailData.uploader.updatedTime).format("YYYY.MM.DD")}</span>
            </p>
          </div>
          <p css={cssObj.email}>
            고객센터<span>cs@deeplehr.com</span>
          </p>
        </div>
        <div css={cssObj.reasonContainer}>
          <p css={cssObj.reasonTitle}>
            반려사유 {companyDetailData.status.reason?.length}건{" "}
            <span>* 아래 반려 사유를 확인하시고 수정 후 재 검수 요청해 주세요</span>
          </p>
          {companyDetailData.status.reason?.map((reason) => (
            <p key={`rejectReason${reason}`} css={cssObj.reason}>
              {reason}
            </p>
          ))}
        </div>
      </div>
    );
  }

  return <div />;
};
