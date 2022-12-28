import { ReactElement } from "react";
import { FiEdit } from "react-icons/fi";
import { useForm } from "react-hook-form";

import { useAddCompanyDetail } from "@/apis/company/useAddCompany";
import { CompanyInfoPart } from "@/components/global/companyInfoPart";
import { CommonStatusChip } from "@/components/common";
import { PageLayout, GlobalLayout, Footer } from "@/components/global/layout";
import { NextPageWithLayout } from "@/pages/_app.page";
import { useUserState } from "@/globalStates/useUserState";

import { BasicPart } from "./part/basicPart";
import { WelfalePart } from "./part/welfarePart";
import { PostSubmitValues } from "./type";
import { cssObj } from "./style";

const CompanyEditPage: NextPageWithLayout = () => {
  const { userInfoData } = useUserState();
  const { mutate: putCompanyDetail } = useAddCompanyDetail();

  const companyForm = useForm<PostSubmitValues>({
    mode: "onChange",
  });
  const { handleSubmit } = companyForm;

  const addCompanyDetail = (formData: PostSubmitValues) => {
    if (window.confirm("수정하쉴?")) {
      putCompanyDetail({
        companyId: Number(userInfoData?.companyId),
        dto: {
          ...formData,
          nozo: {
            exists: formData.nozo.exists === "true",
            desc: formData.nozo.desc,
          },
        },
      });
    }
  };

  if (!userInfoData) {
    return null;
  }

  return (
    <main css={cssObj.wrapper}>
      <PageLayout>
        <form css={cssObj.container} onSubmit={handleSubmit(addCompanyDetail)}>
          <header css={cssObj.header}>
            <div>
              <h2 css={cssObj.title}>기업정보</h2>
              <p css={cssObj.desc}>기업 정보에 변화가 있다면 작성 후 수정완료를 눌러주세요</p>
            </div>
            <div css={cssObj.flexBox}>
              <CommonStatusChip status="승인됨" />
              <button type="submit">
                <FiEdit /> 기업 정보 수정완료
              </button>
            </div>
          </header>
          <section css={cssObj.companyInfoBox}>
            <BasicPart userInfoData={userInfoData} companyForm={companyForm} />
            <WelfalePart userInfoData={userInfoData} companyForm={companyForm} />
          </section>
          <button type="submit">기업 정보 수정완료</button>
        </form>
      </PageLayout>
    </main>
  );
};

CompanyEditPage.getLayout = (page: ReactElement) => (
  <GlobalLayout>
    <CompanyInfoPart />
    {page}
    <Footer />
  </GlobalLayout>
);

export default CompanyEditPage;
