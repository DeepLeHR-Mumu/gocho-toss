import { NextPage } from "next";
import { useEffect } from "react";

// import { dehydrate, QueryClient } from "@tanstack/react-query";

// import { specArrKeyObj } from "@constant/queryKeyFactory/spec/arrKeyObj";
// import { companyCommentArrKeyObj } from "@constant/queryKeyFactory/company/commentArrKeyObj";
// import { jobArrKeyObj } from "@constant/queryKeyFactory/job/jobArrKeyObj";
// import { communityPostingArrKeyObj } from "@constant/queryKeyFactory/community/postingArrKeyObj";
// import { tipArrKeyObj } from "@constant/queryKeyFactory/tip/arrKeyObj";
import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { homeFunnelEvent } from "shared-ga/home";

import { CompanyCommentPart } from "@pages/index/part/companyCommentPart";

import { MainCarouselPart } from "./index/part/mainCarouselPart";
import { JobPart } from "./index/part/jobPart";
import { CommunityPostingPart } from "./index/part/communityPostingPart";
import { SpecBestPart } from "./index/part/specBestPart";
import { TipPart } from "./index/part/tipPart";
import { PageHead } from "./index/pageHead";

// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(
//     jobArrKeyObj.jobArr({
//       filter: "valid",
//       order: "recent",
//       limit: 9,
//     }),
//     getJobArr
//   );
//   await queryClient.prefetchQuery(companyCommentArrKeyObj.commentArr({ companyId: 623 }), getCompanyComment);
//   await queryClient.prefetchQuery(companyCommentArrKeyObj.commentArr({ companyId: 87 }), getCompanyComment);
//   await queryClient.prefetchQuery(companyCommentArrKeyObj.commentArr({ companyId: 418 }), getCompanyComment);
//   await queryClient.prefetchQuery(companyCommentArrKeyObj.commentArr({ companyId: 585 }), getCompanyComment);
//   await queryClient.prefetchQuery(companyCommentArrKeyObj.commentArr({ companyId: 612 }), getCompanyComment);
//   await queryClient.prefetchQuery(companyCommentArrKeyObj.commentArr({ companyId: 334 }), getCompanyComment);

//   await queryClient.prefetchQuery(communityPostingArrKeyObj.postingArr({ limit: 6 }), getCommunityPostingArr);

//   await queryClient.prefetchQuery(tipArrKeyObj.tipArr({}), getTipArr);

//   await queryClient.prefetchQuery(specArrKeyObj.list({ order: "-score", limit: 9 }), getSpecArr);
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//     revalidate: 60,
//   };
// }

const Home: NextPage = () => {
  useEffect(() => {
    homeFunnelEvent();
  }, []);

  return (
    <main>
      <PageHead />
      <InvisibleH1 title="고초대졸닷컴 | 생산직 취업의 새로운 기준" />

      <MainCarouselPart />
      <JobPart />
      <CompanyCommentPart />
      <TipPart />
      <CommunityPostingPart />
      <SpecBestPart />
    </main>
  );
};

export default Home;
