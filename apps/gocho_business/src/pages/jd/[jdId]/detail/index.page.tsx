import { NextPage } from "next";

import { PageLayout } from "@/components";

import { JdPart } from "./part/JdPart";
import { JdStatisticsPart } from "./part/JdStatisticsPart";
import { ApplicantListPart } from "./part/ApplicantListPart";

/**
 * NOTE
 * isMine === false 인 유저도 url 을 통해 접근 가능함.
 * 이를 방지하는 코드 추가해야 할 수도
 */

const JdDetailPage: NextPage = () => (
  <PageLayout>
    <JdPart />
    <JdStatisticsPart />
    <ApplicantListPart />
  </PageLayout>
);

export default JdDetailPage;
