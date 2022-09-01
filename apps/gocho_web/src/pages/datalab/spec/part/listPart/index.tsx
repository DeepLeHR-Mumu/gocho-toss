import { FunctionComponent, useState } from "react";

import { SpecCardList } from "../../component/specCardList";
import { setSpecOrderButtonArr } from "./constant";
import { OrderDef, changeOrderDef } from "./type";
import {
  partContainer,
  mainContainer,
  listContainer,
  OrderButtonContainer,
  setSpecOrderButton,
} from "./style";

export const ListPart: FunctionComponent = () => {
  const [activeButtonOrder, setActiveButtonOrder] =
    useState<OrderDef>("recent");

  const changeOrder: changeOrderDef = (newOrder: OrderDef) => {
    setActiveButtonOrder(newOrder);
  };

  return (
    <section css={partContainer}>
      <div css={mainContainer}>
        <div css={listContainer}>
          <div css={OrderButtonContainer}>
            필터
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
      </div>
    </section>
  );
};
