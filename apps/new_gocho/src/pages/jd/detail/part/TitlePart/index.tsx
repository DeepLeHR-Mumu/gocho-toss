import { useState } from "react";

import { Button } from "shared-ui/deeple-ds";
import { dDayCalculator } from "shared-util";

import { Layout, JdBookmark, SkeletonBox, EmailApplyModal } from "@/components";

import { TitlePartProps } from "./type";
import { cssObj } from "./style";

export const TitlePart = ({ jd }: TitlePartProps) => {
  const [emailApplyModal, setEmailApplyModal] = useState(false);

  if (!jd) {
    return (
      <section css={cssObj.skeletonWrapper}>
        <SkeletonBox color="GRAY50" />
      </section>
    );
  }

  const handleApplyButtonClick = (url: string) => {
    if (url.includes("@")) {
      setEmailApplyModal(true);
      return;
    }
    const newWindow = window.open(url, "_blank", "noopener, noreferrer");
    if (newWindow !== null) newWindow.opener = null;
  };

  const isExpired = dDayCalculator(jd.endTime) === "만료";

  return (
    <>
      <section css={cssObj.background}>
        <Layout>
          <div css={cssObj.wrapper}>
            <span css={cssObj.companyName}>{jd.companyName}</span>
            <h3 css={cssObj.jdTitle}>{jd.title}</h3>
            <div css={cssObj.bookmarkWrapper(jd.isBookmark)}>
              <JdBookmark jdId={jd.jdId} isBookmarked={jd.isBookmark} /> <span>{jd.bookmarkCount}</span>
            </div>
            <Button
              size="small"
              color={isExpired ? "disable" : "active"}
              onClick={() => handleApplyButtonClick(jd.applyUrl)}
            >
              {isExpired ? "만료공고" : "지원하기"}
            </Button>
          </div>
        </Layout>
      </section>
      {emailApplyModal && (
        <EmailApplyModal
          email={jd.applyUrl.replace("mailto:", "")}
          close={() => {
            setEmailApplyModal(false);
          }}
        />
      )}
    </>
  );
};
