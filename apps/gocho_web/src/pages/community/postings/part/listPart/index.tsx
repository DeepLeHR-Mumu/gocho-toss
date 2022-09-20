import { FunctionComponent, useState } from "react";
import { AiOutlineEdit, AiOutlineWechat } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";

import { useUserInfo } from "shared-api/auth";

import { useModal } from "@recoil/hook/modal";
import { Layout } from "@component/layout";

import { PostingCardList } from "../../component/postingCardList";
import { changeFilterDef, changeHashtagDef, FilterDef, HashtagDef, PostingValues } from "./type";
import { setPostingFilterButtonArr, setPostingHashtagButtonArr } from "./constant";
import {
  partContainer,
  colorPoint,
  title,
  mainContainer,
  listContainer,
  tempContainer,
  setPostingHashtagButton,
  formCSS,
  searchWrapper,
  searchBox,
  searchButton,
  buttonArrContainer,
  setPostingFilterButton,
  writePostingButton,
} from "./style";

export const ListPart: FunctionComponent = () => {
  const [activeButtonFilter, setActiveButtonFilter] = useState<FilterDef>();
  const [activeButtonHashtag, setActiveButtonHashtag] = useState<HashtagDef>("recent");
  const [keyword, setKeyword] = useState("");

  const { setCurrentModal } = useModal();
  const { error: userError } = useUserInfo();

  const changeFilter: changeFilterDef = (newFilter: FilterDef) => {
    setActiveButtonFilter(newFilter);
  };

  const changeHashtag: changeHashtagDef = (newHashtag: HashtagDef) => {
    setActiveButtonHashtag(newHashtag);
  };

  const openWritePostingModal = () => {
    if (userError) return setCurrentModal("loginModal", { button: "home" });
    return setCurrentModal("writePostingModal");
  };

  const { register, reset, handleSubmit } = useForm<PostingValues>({});
  const postingSearch: SubmitHandler<PostingValues> = (postingVal) => {
    setKeyword(postingVal.keyword);
  };

  const changePostingFilter = (filter: FilterDef) => {
    changeFilter(filter);
    changeHashtag("recent");
    setKeyword("");
    reset();
  };

  const changePostingHashtag = (filter: HashtagDef) => {
    if (filter === activeButtonHashtag) changeHashtag("recent");
    changeHashtag(filter);
  };

  return (
    <section css={partContainer}>
      <Layout>
        <h2 css={title}>
          자유게시판 <AiOutlineWechat /> <span css={colorPoint}>We Talk</span>
        </h2>
        <div css={mainContainer}>
          <div css={buttonArrContainer}>
            <h3>💬 글 종류</h3>
            {setPostingFilterButtonArr.map((button) => {
              return (
                <button
                  type="button"
                  key={button.text}
                  css={setPostingFilterButton(button.filter === activeButtonFilter)}
                  onClick={() => {
                    return changePostingFilter(button.filter);
                  }}
                >
                  {button.text}
                </button>
              );
            })}
            <button type="button" css={writePostingButton} onClick={openWritePostingModal}>
              글 남기기
              <br />
              <AiOutlineEdit />
            </button>
          </div>
          <div css={listContainer}>
            <div css={tempContainer}>
              <form css={formCSS} onSubmit={handleSubmit(postingSearch)}>
                <div css={searchWrapper}>
                  <input
                    {...register("keyword", {
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
              {setPostingHashtagButtonArr.map((button) => {
                return (
                  <button
                    type="button"
                    key={button.text}
                    css={setPostingHashtagButton(button.hashtag === activeButtonHashtag)}
                    onClick={() => {
                      return changePostingHashtag(button.hashtag);
                    }}
                  >
                    {button.text}
                  </button>
                );
              })}
            </div>
            <PostingCardList keyword={keyword} hashTag={activeButtonHashtag} activeButtonFilter={activeButtonFilter} />
          </div>
        </div>
      </Layout>
    </section>
  );
};
