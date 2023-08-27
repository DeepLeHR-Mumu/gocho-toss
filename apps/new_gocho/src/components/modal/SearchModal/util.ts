import { useRouter } from "next/router";

import { isStringArray } from "@/utils";
import { URL } from "@/pages/constants";

import { RECENT_SEARCH_WORD_KEY, RECENT_SEARCH_WORD_MAX_NUMBER } from "./constant";

export const getRecentSearchWordFromStorage = (): string[] => {
  const savedRecentSearchWords = localStorage.getItem(RECENT_SEARCH_WORD_KEY);

  if (savedRecentSearchWords) {
    const parsedRecentSearchWordArr = JSON.parse(savedRecentSearchWords);

    if (!isStringArray(parsedRecentSearchWordArr)) {
      return [];
    }

    return parsedRecentSearchWordArr;
  }

  return [];
};

export const saveRecentWordToStorage = (text: string) => {
  const savedRecentSearchWordArr = getRecentSearchWordFromStorage();

  // eslint-disable-next-line arrow-body-style
  const filteredRecentSearchWordArr = savedRecentSearchWordArr.filter((word) => word !== text);
  filteredRecentSearchWordArr.unshift(text);

  if (filteredRecentSearchWordArr.length > RECENT_SEARCH_WORD_MAX_NUMBER) {
    filteredRecentSearchWordArr.pop();
  }

  localStorage.setItem(RECENT_SEARCH_WORD_KEY, JSON.stringify(filteredRecentSearchWordArr));
};

export const removeRecentWordFromStorage = (text: string) => {
  const savedRecentSearchWordArr = getRecentSearchWordFromStorage();

  // eslint-disable-next-line arrow-body-style
  const filteredRecentSearchWordArr = savedRecentSearchWordArr.filter((word) => word !== text);

  localStorage.setItem(RECENT_SEARCH_WORD_KEY, JSON.stringify(filteredRecentSearchWordArr));
};

export const removeAllRecentWord = () => {
  localStorage.removeItem(RECENT_SEARCH_WORD_KEY);
};

export const useSearch = () => {
  const router = useRouter();

  const searchAndSave = (text: string) => {
    router.push({ pathname: URL.SEARCH, query: { q: text } });
    saveRecentWordToStorage(text);
  };

  return { searchAndSave };
};
