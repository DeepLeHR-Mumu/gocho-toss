export const factoryDetailKeyObj = {
  all: [{ data: "factoryDetail" }] as const,
  detail: (factoryId: number) => [{ data: "factoryDetail", factoryId }] as const,
};
