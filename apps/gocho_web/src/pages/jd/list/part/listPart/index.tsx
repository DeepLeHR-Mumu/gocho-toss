import { FunctionComponent, useState } from "react";

import { Layout } from "@component/layout";

import { JobCardList } from "../../component/jobCardList";
import { setJobOrderButtonArr } from "./constant";
import { changeOrderDef, OrderDef } from "./type";
import {
  partContainer,
  title,
  colorPoint,
  buttonArrContainer,
  setJobOrderButton,
} from "./style";

export const ListPart: FunctionComponent = () => {
  const [activeOrder, setActiveOrder] = useState<OrderDef>("recent");

  const changeOrder: changeOrderDef = (newId) => {
    setActiveOrder(newId);
  };
  return (
    <section css={partContainer}>
      <Layout>
        <h2 css={title}>
          <span css={colorPoint}>Now</span> 채용공고
        </h2>
        <div css={buttonArrContainer}>
          {setJobOrderButtonArr.map((button) => {
            return (
              <button
                type="button"
                key={`jobCardArr${button.text}`}
                css={setJobOrderButton(button.order === activeOrder)}
                onClick={() => {
                  return changeOrder(button.order);
                }}
              >
                {button.text}
              </button>
            );
          })}
        </div>
        <JobCardList listOrder={activeOrder} />
      </Layout>
    </section>
  );
};
