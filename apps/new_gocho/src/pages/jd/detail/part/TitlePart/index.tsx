import { Button } from "shared-ui/deeple-ds";

import { Layout, JdBookmark } from "@/components";

import { TitlePartProps } from "./type";
import { cssObj } from "./style";

export const TitlePart = ({ jdId, companyName, title, isBookmark, applyUrl }: TitlePartProps) => (
    <section css={cssObj.background}>
      <Layout>
        <div css={cssObj.wrapper}>
          <span css={cssObj.companyName}>{companyName}</span>
          <h3 css={cssObj.jdTitle}>{title}</h3>
          <JdBookmark jdId={jdId} marked={isBookmark} css={cssObj.bookmarkWrapper} />
          <Button size="small">
            <a href={applyUrl || ""} target="_blank" rel="noreferrer">
              지원하기
            </a>
          </Button>
        </div>
      </Layout>
    </section>
  );
