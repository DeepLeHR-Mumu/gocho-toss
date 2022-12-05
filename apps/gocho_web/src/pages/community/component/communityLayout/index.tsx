import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineEdit } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

import { useUserInfo } from "shared-api/auth";
import { COMMUNITY_POSTINGS_LIST_URL, COMMUNITY_POSTING_WRITE_URL } from "shared-constant/internalURL";

import { Layout } from "@component/layout";
import { useModal } from "@recoil/hook/modal";
import { FilterDef, HashtagDef } from "@pages/community/type";

import {
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
  partContainer,
} from "./style";
import { CommunityLayoutProps, PostingValues } from "./type";
import { setPostingFilterButtonArr, setPostingHashtagButtonArr } from "./constant";

export const CommunityLayout: FunctionComponent<CommunityLayoutProps> = ({ children, isSidebar }) => {
  const router = useRouter();

  const { register, reset, handleSubmit } = useForm<PostingValues>({});

  const { setCurrentModal } = useModal();
  const { error: userError } = useUserInfo();

  const postingWriteHandler = () => {
    if (userError) return setCurrentModal("loginModal", { button: "close" });
    return router.push(COMMUNITY_POSTING_WRITE_URL);
  };

  const postingSearch: SubmitHandler<PostingValues> = (postingVal) => {
    router.push({ pathname: COMMUNITY_POSTINGS_LIST_URL, query: { ...router.query, keyword: postingVal.keyword } });
  };

  const changePostingFilter = (filter: FilterDef) => {
    router.push({ pathname: COMMUNITY_POSTINGS_LIST_URL, query: { order: "recent", filter } });
    reset();
  };

  const changePostingHashtag = (filter: HashtagDef) => {
    if (filter === router.query.hashTag) {
      router.push({ pathname: COMMUNITY_POSTINGS_LIST_URL, query: { hashTag: "recent" } });
      return;
    }
    router.push({ pathname: COMMUNITY_POSTINGS_LIST_URL, query: { ...router.query, hashTag: filter } });
  };

  return (
    <section css={partContainer}>
      <Layout>
        <p css={title}>
          커뮤니티 💬<span css={colorPoint}>게시판</span>
        </p>

        <div css={mainContainer}>
          {isSidebar && (
            <div css={buttonArrContainer}>
              <p css={buttonTitle}>💬 게시판</p>
              {setPostingFilterButtonArr.map((button) => {
                const isActivated = button.filter === router.query.filter;
                return (
                  <button
                    type="button"
                    key={button.text}
                    css={setPostingFilterButton(isActivated)}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      return changePostingFilter(button.filter);
                    }}
                  >
                    {button.text}
                  </button>
                );
              })}
              <button type="button" css={writePostingButton} onClick={postingWriteHandler}>
                글 남기기
                <AiOutlineEdit />
              </button>
            </div>
          )}

          <div css={listContainer}>
            {isSidebar && (
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
                      css={setPostingHashtagButton(button.hashtag === router.query.hashTag)}
                      onClick={() => {
                        changePostingHashtag(button.hashtag);
                      }}
                    >
                      #{button.text}
                    </button>
                  );
                })}
              </div>
            )}
            {children}
          </div>
        </div>
      </Layout>
    </section>
  );
};
