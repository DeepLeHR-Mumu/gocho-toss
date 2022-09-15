interface dummyArrCreatorDef {
  (length: number): number[];
}

export const dummyArrCreator: dummyArrCreatorDef = (length) => {
  return Array.from(Array(length).keys());
};
