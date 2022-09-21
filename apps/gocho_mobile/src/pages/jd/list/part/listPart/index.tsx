import { FunctionComponent, useState } from "react";
import { Layout } from "@component/layout";
import { FiChevronDown } from "react-icons/fi";

import { setJobOrderButtonArr } from "./constant";
import { partContainer, titleContainer, filterButton, sortButtonList, setJobOrderButton } from "./style";
import { OrderDef } from "./type";

export const ListPart: FunctionComponent = () => {
  const [activeOrder, setActiveOrder] = useState<OrderDef>("recent");

  return (
    <section css={partContainer}>
      <Layout>
        <div css={titleContainer}>
          <h2>채용 공고</h2>
          <button css={filterButton} type="button">
            필터 <FiChevronDown />
          </button>
        </div>
        <div css={sortButtonList}>
          {setJobOrderButtonArr.map((button) => {
            const isActive = button.order === activeOrder;
            return (
              <button
                type="button"
                key={`jobCardArr${button.text}`}
                css={setJobOrderButton(isActive)}
                onClick={() => {
                  return setActiveOrder(button.order);
                }}
              >
                {button.text}
              </button>
            );
          })}
        </div>
      </Layout>
    </section>
  );
};
