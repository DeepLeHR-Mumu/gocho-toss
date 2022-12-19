import type { NextPage } from "next";
import { useRouter } from "next/router";

const JdEditPage: NextPage = () => {
  const router = useRouter();
  return (
    <main>
      <p>{router.query.jdId}</p>
      <p>Jd Edit Page</p>
    </main>
  );
};

export default JdEditPage;
