import { FunctionComponent, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";

import { Layout } from "@component/layout";

import { TipCardList } from "../../component/tipCardList";
import { setTipCompanyButtonArr } from "./constant";
import { TipValues } from "./type";
import {
  partContainer,
  colorPoint,
  title,
  mainContainer,
  listContainer,
  formCSS,
  searchWrapper,
  searchBox,
  searchButton,
  setTipsFilterButton,
  buttonArrContainer,
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
      <Layout>
        <h2 css={title}>
          <span css={colorPoint}>고수들의 💬 취업꿀팁</span> by. 고초대졸닷컴
        </h2>
        <div css={mainContainer}>
          <div css={buttonArrContainer}>
            <h3>💬 글 종류</h3>
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
                <button type="submit" css={searchButton}>
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
