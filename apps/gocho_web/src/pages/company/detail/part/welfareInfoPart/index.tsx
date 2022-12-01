import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { useCompanyDetail } from "shared-api/company";
import { InvisibleH3 } from "shared-ui/common/atom/invisibleH3";

import { WorkingNotice } from "../../../component/workingNotice";
import { MenuButtonList } from "../../../component/menuButtonList";
import { menuPictureList, menuNameList } from "./constant";
import { wrapper, infoContainer, infoBox, infoPicture, infoTitle, textBox, infoText } from "./style";

export const WelfareInfoPart: FunctionComponent = () => {
  const router = useRouter();
  const { companyId } = router.query;

  const { data: companyDetailData } = useCompanyDetail({ companyId: Number(companyId) });

  if (!companyDetailData) {
    return <section css={wrapper} />;
  }

  const menuDescList = [
    companyDetailData.welfare.money,
    companyDetailData.welfare.health,
    companyDetailData.welfare.life,
    companyDetailData.welfare.holiday,
    companyDetailData.welfare.facility,
    companyDetailData.welfare.vacation,
    companyDetailData.welfare.growth,
    companyDetailData.welfare.etc,
  ];

  return (
    <>
      <WorkingNotice info="복지" />
      <section css={wrapper} id="welfareInfo">
        <InvisibleH3 title="복지정보" />
        <MenuButtonList activeMenu="복지 정보" />

        <div css={infoContainer}>
          {menuPictureList.map((pic, index) => {
            return (
              menuDescList[index] && (
                <div css={infoBox} key={`companyWelfareInfo${menuNameList[index]}`}>
                  <div css={infoPicture}>
                    <Image layout="fill" objectFit="contain" src={pic} alt="급여 복지 관련 로고" />
                  </div>
                  <strong css={infoTitle}>{menuNameList[index]}</strong>
                  <ul css={textBox}>
                    {menuDescList[index]?.map((data) => {
                      return (
                        <li key={data} css={infoText}>
                          {data}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )
            );
          })}
        </div>
      </section>
    </>
  );
};
