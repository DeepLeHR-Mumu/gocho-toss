import { FunctionComponent } from "react";
import { Layout } from "@component/layout";
import { FiYoutube } from "react-icons/fi";
import { useRouter } from "next/router";
import { useCompanyDetail } from "shared-api/company";
import { container, hrLine, linkBox, youtubeIconBox } from "./style";

export const LinkPart: FunctionComponent = () => {
  const router = useRouter();
  const { companyId } = router.query;
  const {
    data: companyDetailData,
    isLoading,
    isSuccess,
  } = useCompanyDetail({ companyId: Number(companyId) as number });
  if (isLoading || !isSuccess) {
    return <>loading</>;
  }

  if (!companyDetailData.catchUrl && !companyDetailData.youtubeUrl) {
    return null;
  }

  return (
    <section css={hrLine}>
      <Layout>
        <div css={container}>
          <div css={linkBox}>
            {companyDetailData.catchUrl && (
              <a href={companyDetailData.catchUrl} target="_blank" rel="noopener noreferrer">
                캐치 기업정보 더보기
              </a>
            )}
            {companyDetailData.youtubeUrl && (
              <a href={companyDetailData.youtubeUrl} target="_blank" rel="noopener noreferrer">
                <div css={youtubeIconBox}>
                  <FiYoutube />
                </div>
              </a>
            )}
          </div>
        </div>
      </Layout>
    </section>
  );
};
