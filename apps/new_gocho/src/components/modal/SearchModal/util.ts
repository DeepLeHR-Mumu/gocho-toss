import { isStringArray } from "@/utils";

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
