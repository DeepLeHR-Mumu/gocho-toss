import { FunctionComponent } from "react";
import { FiYoutube } from "react-icons/fi";
import { useRouter } from "next/router";

import { useCompanyDetail } from "shared-api/company";

import { Layout } from "@component/layout";

import { container, hrLine, linkBox, youtubeIconBox } from "./style";

export const CatchLinkPart: FunctionComponent = () => {
  const router = useRouter();

  const { data: companyDetailData, isLoading } = useCompanyDetail({
    companyId: Number(router.query.companyId),
  });

  if (!companyDetailData || isLoading) {
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
                  <FiYoutube /> 기업 정보영상 보기
                </div>
              </a>
            )}
          </div>
        </div>
      </Layout>
    </section>
  );
};
