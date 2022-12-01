import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { useCompanyDetail } from "shared-api/company";
import { InvisibleH3 } from "shared-ui/common/atom/invisibleH3";

import { WorkingNotice } from "../../../component/workingNotice";
import { MenuButtonList } from "../../../component/menuButtonList";
import { setWelfareArr } from "./constant";
import { wrapper, infoContainer, infoBox, infoPicture, infoTitle, textBox, infoText } from "./style";

export const WelfareInfoPart: FunctionComponent = () => {
  const router = useRouter();
  const { companyId } = router.query;

  const { data: companyDetailData } = useCompanyDetail({ companyId: Number(companyId) });

  if (!companyDetailData) {
    return <section css={wrapper} />;
  }

  return (
    <>
      <WorkingNotice info="복지" />
      <section css={wrapper} id="welfareInfo">
        <InvisibleH3 title="복지정보" />
        <MenuButtonList activeMenu="복지 정보" />

        <div css={infoContainer}>
          {setWelfareArr(companyDetailData.welfare).map((welfare) => {
            return (
              <div css={infoBox} key={`companyWelfareInfo${welfare.title}`}>
                <div css={infoPicture}>
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src={welfare.image}
                    alt={`${companyDetailData.name} ${welfare.title} 복지`}
                  />
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
          })}
        </div>
      </section>
    </>
  );
};
