import { FunctionComponent, useState } from "react";

import { JOBS_LIST_URL } from "shared-constant";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { LinkButton } from "shared-ui/common/atom/button";
import { changeHomeJdListSortingEvent } from "shared-ga/home";

import { Layout } from "@component/layout";

import { setJobOrderButtonArr } from "./constant";
import { partContainer, buttonArrContainer, title, setJobOrderButton, showMoreJobBox, colorPoint } from "./style";
import { changeOrderDef, OrderDef } from "./type";
import { JobCardList } from "./component/jobCardList";

export const JobPart: FunctionComponent = () => {
  const [activeOrder, setActiveOrder] = useState<OrderDef>("recent");

  const changeOrder: changeOrderDef = (newId) => {
    setActiveOrder(newId);
  };

  return (
    <section css={partContainer}>
      <InvisibleH2 title="생산직 채용 공고" />
      <Layout>
        <header>
          <p css={title}>
            <span css={colorPoint}>NEW</span> 실시간 채용 공고 📮
          </p>
          <div css={buttonArrContainer}>
            {setJobOrderButtonArr.map((button) => {
              return (
                <button
                  type="button"
                  key={`JobCardList${button.text}`}
                  css={setJobOrderButton(Boolean(button.order === activeOrder))}
                  onClick={() => {
                    changeHomeJdListSortingEvent(button.text);
                    changeOrder(button.order);
                  }}
                >
                  {button.text}
                </button>
              );
            })}
          </div>
        </header>

        <JobCardList listOrder={activeOrder} />

        <div css={showMoreJobBox}>
          <LinkButton
            variant="filled"
            text="실시간 채용공고 더보기"
            linkTo={`${JOBS_LIST_URL}?page=1&order=${activeOrder}`}
          />
        </div>
      </Layout>
    </section>
  );
};
