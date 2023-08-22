import { FunctionComponent } from "react";

import { useJdArr } from "@/apis/jd";

export const JdPart: FunctionComponent = () => {
  const { data: jdDataArr } = useJdArr({
    order: "popular",
    filter: "valid",
    page: 1,
    size: 9,
  });

  return (
    <section>
      <h2>오늘의 HOT 공고</h2>
      {jdDataArr?.jdDataArr.map((jd) => {
        return <p key={jd.id}>{jd.title}</p>;
      })}
    </section>
  );
};
