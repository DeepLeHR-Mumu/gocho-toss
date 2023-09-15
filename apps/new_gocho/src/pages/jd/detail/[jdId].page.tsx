import { useEffect, useRef } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { dummyArrCreator } from "shared-util";

import { Layout, JdRow } from "@/components";
import { useJdDetail, useJdArr } from "@/apis/jd";
import { isQueryString } from "@/utils";
import { useAddJdViewCount } from "@/apis/viewCount";

import { TitlePart } from "./part/TitlePart";
import { SummaryPart } from "./part/SummaryPart";
import { DetailPart } from "./part/DetailPart";
import { ReviewPart } from "./part/ReviewPart";
import { cssObj } from "./style";

const JdDetailPage: NextPage = () => {
  const isFirstRender = useRef(false);
  const router = useRouter();
  const jdId = isQueryString(router.query.jdId) ? Number(router.query.jdId) : null;

  const { data: jdDetailData } = useJdDetail({ id: jdId, isStatic: false });
  const { data: jdArrData } = useJdArr({ order: "rand", size: 3, filter: "valid" });
  const { mutate: addJdViewCount } = useAddJdViewCount();

  useEffect(() => {
    if (jdId && !isFirstRender.current) {
      isFirstRender.current = true;
      addJdViewCount({ jdId: Number(jdId) });
    }
  }, [addJdViewCount, jdId]);

  return (
    <main>
      <TitlePart
        jd={
          jdDetailData
            ? {
                jdId: jdDetailData.id,
                companyName: jdDetailData.company.name,
                title: jdDetailData.title,
                isBookmark: jdDetailData.is_bookmark,
                applyUrl: jdDetailData.apply_url,
              }
            : undefined
        }
      />
      <SummaryPart
        jd={
          jdDetailData
            ? {
                company: {
                  id: jdDetailData.company.id,
                  logoUrl: jdDetailData.company.logo_url,
                  name: jdDetailData.company.name,
                  industry: jdDetailData.company.industry,
                  size: jdDetailData.company.size,
                },
                title: jdDetailData.title,
                endTime: jdDetailData.end_time,
                view: jdDetailData.view,
              }
            : undefined
        }
      />
      <div css={cssObj.background}>
        <Layout>
          <div css={cssObj.contentsWrapper}>
            <DetailPart />
            <div css={cssObj.reviewWrapper}>
              {jdDetailData && (
                <ReviewPart
                  company={{
                    id: jdDetailData.company.id,
                    logoUrl: jdDetailData.company.logo_url,
                    name: jdDetailData.company.name,
                  }}
                  title={jdDetailData.title}
                  jdId={jdDetailData.id}
                />
              )}
            </div>
          </div>
        </Layout>
      </div>
      <Layout>
        <div css={cssObj.similarJdWrapper}>
          <h3 css={cssObj.similarJdTitle}>이 공고와 비슷한 공고들도 둘러보세요.</h3>
          <div css={cssObj.similarJdList}>
            {jdArrData
              ? jdArrData.jdDataArr.map((jd) => (
                  <JdRow
                    key={jd.id}
                    jd={{
                      jdId: jd.id,
                      companyName: jd.company.name,
                      jdTitle: jd.title,
                      dueDate: jd.endTime,
                      bookmarked: jd.isBookmark,
                      cut: jd.cut,
                    }}
                  />
                ))
              : dummyArrCreator(3).map((dummy) => <JdRow key={`jdDetailPage${dummy}`} />)}
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default JdDetailPage;
