import { FunctionComponent } from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

import { JOBS_LIST_URL } from "shared-constant/internalURL";
import { Layout } from "@component/layout";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { JobCardList } from "./component/jobCardList";

import { linkButton, sectionContainer, title, titleBox } from "./style";

export const JobPart: FunctionComponent = () => {
  return (
    <section css={sectionContainer}>
      <Layout>
        <InvisibleH2 title="생산직 채용 공고" />
        <div css={titleBox}>
          <strong css={title}>실시간 채용 공고</strong>
          <Link
            href={{
              pathname: JOBS_LIST_URL,
              query: { page: 1, order: "recent" },
            }}
            passHref
          >
            <a css={linkButton}>
              전체 보기 <FiChevronRight />
            </a>
          </Link>
        </div>
        <JobCardList />
      </Layout>
    </section>
  );
};
