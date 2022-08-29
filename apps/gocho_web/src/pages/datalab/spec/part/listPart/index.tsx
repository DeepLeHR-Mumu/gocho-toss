import { FunctionComponent, useState } from "react";
import Link from "next/link";

import { Layout } from "@component/layout";
import { useUserInfo } from "@api/auth";
import { ProfileImg } from "@component/common/atom/profileImg";
import { SPEC_MY_URL, SPEC_REGISTER_URL } from "@constant/internalURL";

import { SpecCardList } from "../../component/specCardList";
import { setSpecOrderButtonArr } from "./constant";
import { OrderDef, changeOrderDef } from "./type";
import {
  partContainer,
  title,
  colorPoint,
  mainContainer,
  menu,
  asideProfile,
  loginNickname,
  asideButton,
  listContainer,
  OrderButtonContainer,
  setSpecOrderButton,
} from "./style";

export const ListPart: FunctionComponent = () => {
  const [activeButtonOrder, setActiveButtonOrder] =
    useState<OrderDef>("recent");
  const { data: userInfoData, error } = useUserInfo();

  const changeOrder: changeOrderDef = (newOrder: OrderDef) => {
    setActiveButtonOrder(newOrder);
  };

  if (!userInfoData || error) {
    return <section css={partContainer} />;
  }

  return (
    <section css={partContainer}>
      <Layout>
        <h2 css={title}>
          <span css={colorPoint}>All </span>
          스펙 리스트
        </h2>
        <div css={mainContainer}>
          <aside css={menu}>
            <div css={asideProfile}>
              <ProfileImg imageStr="default" size="S" />
              <p css={loginNickname}>{userInfoData?.nickname}</p>
            </div>
            <Link href={`${SPEC_REGISTER_URL}`} passHref>
              <a>
                <button css={asideButton} type="button">
                  스펙
                  <br />
                  등록하기
                </button>
              </a>
            </Link>
            <Link href={`${SPEC_MY_URL}`} passHref>
              <a>
                <button css={asideButton} type="button">
                  등록한
                  <br />
                  스펙 내역
                </button>
              </a>
            </Link>
          </aside>
          <div css={listContainer}>
            <div css={OrderButtonContainer}>
              필터
              {setSpecOrderButtonArr.map((button) => {
                return (
                  <button
                    type="button"
                    key={button.text}
                    css={setSpecOrderButton(
                      button.filter === activeButtonOrder
                    )}
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
      </Layout>
    </section>
  );
};
