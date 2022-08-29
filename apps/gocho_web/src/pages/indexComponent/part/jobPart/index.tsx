import { FunctionComponent, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";

import { Layout } from "@component/layout";
import { JOBS_LIST_URL } from "@constant/internalURL";

import { setJobOrderButtonArr } from "./constant";
import {
  partContainer,
  headerContainer,
  buttonArrContainer,
  title,
  setJobOrderButton,
  showMoreJobButton,
  colorPoint,
} from "./style";
import { changeOrderDef, OrderDef } from "./type";
import { JobCardList } from "./component/jobCardList";

export const JobPart: FunctionComponent = () => {
  const [activeOrder, setActiveOrder] = useState<OrderDef>("recent");

  const changeOrder: changeOrderDef = (newId) => {
    setActiveOrder(newId);
  };

  return (
    <section css={partContainer}>
      <Layout>
        <header css={headerContainer}>
          <h2 css={title}>
            실시간 채용 공고 <span css={colorPoint}>NEW</span>
          </h2>
          <div css={buttonArrContainer}>
            {setJobOrderButtonArr.map((button) => {
              return (
                <button
                  type="button"
                  key={`JobCardList${button.text}`}
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
        </header>
        <JobCardList listOrder={activeOrder} />
        <Link href={JOBS_LIST_URL} passHref>
          <a css={showMoreJobButton}>
            실시간 채용공고
            <span>
              더보기 <BsChevronRight />
            </span>
          </a>
        </Link>
      </Layout>
    </section>
  );
};
