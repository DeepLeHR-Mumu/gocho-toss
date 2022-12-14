export const recruiterArrKeyObj = {
  all: [{ data: "recruiterArr" }] as const,
  arr: () => {
    return [{ data: "recruiterArr" }] as const;
  },
};
