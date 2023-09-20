import { Button } from "shared-ui/deeple-ds";
import { dDayCalculator } from "shared-util";

import { Layout, JdBookmark, SkeletonBox } from "@/components";

import { TitlePartProps } from "./type";
import { cssObj } from "./style";

export const TitlePart = ({ jd }: TitlePartProps) => {
  if (!jd) {
    return (
      <section css={cssObj.skeletonWrapper}>
        <SkeletonBox color="GRAY50" />
      </section>
    );
  }

  const isExpired = dDayCalculator(jd.endTime) === "만료";

  return (
    <section css={cssObj.background}>
      <Layout>
        <div css={cssObj.wrapper}>
          <span css={cssObj.companyName}>{jd.companyName}</span>
          <h3 css={cssObj.jdTitle}>{jd.title}</h3>
          <JdBookmark jdId={jd.jdId} marked={jd.isBookmark} css={cssObj.bookmarkWrapper} />
          <Button size="small" color={isExpired ? "disable" : undefined}>
            {isExpired ? (
              <p>만료공고</p>
            ) : (
              <a href={jd.applyUrl || ""} target="_blank" rel="noreferrer">
                지원하기
              </a>
            )}
          </Button>
        </div>
      </Layout>
    </section>
  );
};
