import { FunctionComponent, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";

import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_COMMUNITY_POSTING } from "shared-constant/meta";
import { useUserInfo } from "shared-api/auth";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
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
  buttonTitle,
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
    if (userError) return setCurrentModal("loginModal", { button: "close" });
    return setCurrentModal("writePostingModal", { title: "", description: "" });
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
    if (filter === activeButtonHashtag) {
      changeHashtag("recent");
      return;
    }
    changeHashtag(filter);
  };

  return (
    <section css={partContainer}>
      <MetaHead metaData={META_COMMUNITY_POSTING} />
      <InvisibleH2 title="생산/기능직 자유게시판" />
      <Layout>
        <p css={title}>
          커뮤니티 💬<span css={colorPoint}>게시판</span>
        </p>

        <div css={mainContainer}>
          <div css={buttonArrContainer}>
            <p css={buttonTitle}>💬 게시판</p>
            {setPostingFilterButtonArr.map((button) => {
              return (
                <button
                  type="button"
                  key={button.text}
                  css={setPostingFilterButton(button.filter === activeButtonFilter)}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    return changePostingFilter(button.filter);
                  }}
                >
                  {button.text}
                </button>
              );
            })}
            <button type="button" css={writePostingButton} onClick={openWritePostingModal}>
              글 남기기
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
                  <button type="submit" css={searchButton} aria-label="검색하기">
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
                      changePostingHashtag(button.hashtag);
                    }}
                  >
                    #{button.text}
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
