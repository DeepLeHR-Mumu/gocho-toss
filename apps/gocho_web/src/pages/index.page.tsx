import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// import { dehydrate, QueryClient } from "@tanstack/react-query";

// import { specArrKeyObj } from "@constant/queryKeyFactory/spec/arrKeyObj";
// import { companyCommentArrKeyObj } from "@constant/queryKeyFactory/company/commentArrKeyObj";
// import { jobArrKeyObj } from "@constant/queryKeyFactory/job/jobArrKeyObj";
// import { communityPostingArrKeyObj } from "@constant/queryKeyFactory/community/postingArrKeyObj";
// import { tipArrKeyObj } from "@constant/queryKeyFactory/tip/arrKeyObj";
import { MainPageMeta } from "shared-ui/common/meta";
import { homeFunnelEvent } from "shared-ga/home";
import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL } from "shared-constant/internalURL";

import { CompanyCommentPart } from "@pages/indexComponent/part/companyCommentPart";

import { MainCarouselPart } from "./indexComponent/part/mainCarouselPart";
import { JobPart } from "./indexComponent/part/jobPart";
import { CommunityPostingPart } from "./indexComponent/part/communityPostingPart";
import { SpecBestPart } from "./indexComponent/part/specBestPart";
import { TipPart } from "./indexComponent/part/tipPart";

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
  const router = useRouter();

  useEffect(() => {
    homeFunnelEvent();
  }, []);
  return (
    <main>
      <Head>
        <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.asPath.split("?")[0]}`} />
        <link
          rel="alternate"
          media="only screen and (max-width: 640px)"
          href={`${GOCHO_MOBILE_URL}${router.asPath.split("?")[0]}`}
        />
      </Head>
      <MainPageMeta />
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
