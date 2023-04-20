import { FunctionComponent } from "react";
import Image from "next/image";

import { Spinner } from "shared-ui/common/atom/spinner";

import { useManagerProfile } from "@/apis";

import { cssObj } from "./style";

export const HeaderPart: FunctionComponent = () => {
  const { data: managerProfile } = useManagerProfile();

  if (!managerProfile) {
    return (
      <div css={cssObj.spinner}>
        <Spinner />
      </div>
    );
  }

  return (
    <section css={cssObj.wrapper} data-testid="company/edit/headerPart">
      <p css={cssObj.name}>
        <div css={cssObj.companyLogo}>
          <Image fill src={managerProfile.company.logoUrl} alt={managerProfile.company.name} />
        </div>
        {`${managerProfile.name}(${managerProfile.department})`}
      </p>
      <button
        css={cssObj.deleteUserButton}
        type="button"
        onClick={() => {
          window.alert("홈페이지 우측 하단 채널톡을 이용해 문의해주세요.");
        }}
      >
        회원탈퇴
      </button>
    </section>
  );
};
