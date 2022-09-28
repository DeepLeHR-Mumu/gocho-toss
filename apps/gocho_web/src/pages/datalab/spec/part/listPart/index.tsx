import { FunctionComponent, useState } from "react";

import { SpecCardList } from "../../component/specCardList";
import { setSpecOrderButtonArr } from "./constant";
import { OrderDef, changeOrderDef } from "./type";
import { partContainer, listContainer, OrderButtonContainer, setSpecOrderButton, desc } from "./style";

export const ListPart: FunctionComponent = () => {
  const [activeButtonOrder, setActiveButtonOrder] = useState<OrderDef>("recent");

  const changeOrder: changeOrderDef = (newOrder: OrderDef) => {
    setActiveButtonOrder(newOrder);
  };

  return (
    <section css={partContainer}>
      <div css={listContainer}>
        <div css={OrderButtonContainer}>
          <p css={desc}>정렬</p>
          {setSpecOrderButtonArr.map((button) => {
            const isActiveButtonOrder = button.filter === activeButtonOrder;

            return (
              <button
                type="button"
                key={button.text}
                css={setSpecOrderButton(isActiveButtonOrder)}
                onClick={() => {
                  return changeOrder(button.filter);
                }}
              >
                {button.text}
              </button>
            );
          })}
        </div>
        <SpecCardList order={activeButtonOrder} />
      </div>
    </section>
  );
};
