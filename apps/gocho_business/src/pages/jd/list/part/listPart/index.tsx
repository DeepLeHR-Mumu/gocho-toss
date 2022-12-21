import { FunctionComponent } from "react";

import { useJdArr } from "@/api/jd/useJdArr";

import { JdCard } from "../../component/jdCard";

export const ListPart: FunctionComponent = () => {
  const { data: jdDataObj, isSuccess } = useJdArr(true, { order: "recent" });

  if (!isSuccess) {
    return null;
  }

  return (
    <section>
      {jdDataObj.jdDataArr.map((jd) => (
        <JdCard key={`BusinessJdCard${jd.id}`} jd={jd} />
      ))}
    </section>
  );
};
