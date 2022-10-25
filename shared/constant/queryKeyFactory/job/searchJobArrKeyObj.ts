export interface SearchJobRequestObj {
  page: string | string[] | undefined;
  searchWord: string | string[] | undefined;
}

export const searchJobArrKeyObj = {
  all: [{ data: "searchJobArr" }] as const,
  searchArr: (requestObj: SearchJobRequestObj) => {
    return [{ data: "searchJobArr", requestObj }] as const;
  },
};
