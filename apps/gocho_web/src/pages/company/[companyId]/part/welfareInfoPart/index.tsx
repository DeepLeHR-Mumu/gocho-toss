import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { useCompanyDetail } from "shared-api/company";
import { InvisibleH3 } from "shared-ui/common/atom/invisibleH3";

import { setWelfareArr } from "./constant";
import { infoContainer, infoBox, infoPicture, infoTitle, textBox, infoText } from "./style";

export const WelfareInfoPart: FunctionComponent = () => {
  const router = useRouter();
  const { data: companyDetailData } = useCompanyDetail({ companyId: Number(router.query.companyId) });

  if (!companyDetailData) {
    return <section />;
  }

  return (
    <>
      <InvisibleH3 title="복지정보" />
      <div css={infoContainer}>
        {setWelfareArr(companyDetailData.welfare).map((welfare) => {
          if (welfare.value) {
            return (
              <div css={infoBox} key={`companyWelfareInfo${welfare.title}`}>
                <div css={infoPicture}>
                  <Image fill src={welfare.image} alt={`${companyDetailData.name} ${welfare.title} 복지`} />
                </div>
                <strong css={infoTitle}>{welfare.title}</strong>
                <ul css={textBox}>
                  {welfare.value?.map((data) => {
                    return (
                      <li key={data} css={infoText}>
                        {data}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
};
