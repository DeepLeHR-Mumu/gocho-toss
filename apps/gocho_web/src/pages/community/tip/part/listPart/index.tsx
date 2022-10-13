import { FunctionComponent, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";

import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { Layout } from "@component/layout";
import { META_COMMUNITY_TIP } from "shared-constant/meta";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { TipCardList } from "../../component/tipCardList";

import { setTipCompanyButtonArr } from "./constant";
import { TipValues } from "./type";
import {
  partContainer,
  weightPoint,
  title,
  mainContainer,
  listContainer,
  formCSS,
  searchWrapper,
  searchBox,
  searchButton,
  setTipsFilterButton,
  buttonArrContainer,
  buttonTitle,
} from "./style";

export const ListPart: FunctionComponent = () => {
  const [companyId, setCompanyId] = useState<number>();

  // LATER 좀더 명시적인 변수명으로 변경
  const [q, setQ] = useState("");

  const { register, reset, handleSubmit } = useForm<TipValues>({});
  const tipSearch: SubmitHandler<TipValues> = (tipVal) => {
    setQ(tipVal.q);
  };

  const changeTipCompany = (newCompanyId: number | undefined) => {
    setCompanyId(newCompanyId);
    setQ("");
    reset();
  };

  return (
    <section css={partContainer}>
      <MetaHead metaData={META_COMMUNITY_TIP} />
      <Layout>
        <InvisibleH2 title="생산/기능직 취업 꿀팁" />
        <p css={title}>
          고수들의 🍯취업꿀팁
          <span css={weightPoint}> by.고초대졸 닷컴</span>
        </p>
        <div css={mainContainer}>
          <div css={buttonArrContainer}>
            <strong css={buttonTitle}>💬 글 종류</strong>
            {setTipCompanyButtonArr.map((button) => {
              return (
                <button
                  type="button"
                  key={button.text}
                  css={setTipsFilterButton(button.companyId === companyId)}
                  onClick={() => {
                    return changeTipCompany(button.companyId);
                  }}
                >
                  {button.text}
                </button>
              );
            })}
          </div>
          <div css={listContainer}>
            <form css={formCSS} onSubmit={handleSubmit(tipSearch)}>
              <div css={searchWrapper}>
                <input
                  {...register("q", {
                    required: true,
                  })}
                  css={searchBox}
                  placeholder="검색어를 입력해주세요"
                />
                <button type="submit" css={searchButton} aria-label="꿀팁 검색">
                  <FiSearch />
                </button>
              </div>
            </form>
            <TipCardList q={q} companyId={companyId} />
          </div>
        </div>
      </Layout>
    </section>
  );
};
