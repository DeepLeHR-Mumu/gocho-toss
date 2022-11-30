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

  if (!companyDetailData.data.catchUrl && !companyDetailData.data.youtubeUrl) {
    return null;
  }

  return (
    <section css={hrLine}>
      <Layout>
        <div css={container}>
          <div css={linkBox}>
            {companyDetailData.data.catchUrl && (
              <a href={companyDetailData.data.catchUrl} target="_blank" rel="noopener noreferrer">
                캐치 기업정보 더보기
              </a>
            )}
            {companyDetailData.data.youtubeUrl && (
              <a href={companyDetailData.data.youtubeUrl} target="_blank" rel="noopener noreferrer">
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
