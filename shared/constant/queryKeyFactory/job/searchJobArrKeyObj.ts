export interface SearchJobRequestObj {
  page: string | string[] | undefined;
  searchWord: string | string[] | undefined;
  limit: number;
}

export const searchJobArrKeyObj = {
  all: [{ data: "searchJobArr" }] as const,
  searchArr: (requestObj: SearchJobRequestObj) => {
    return [{ data: "searchJobArr", requestObj }] as const;
  },
};
