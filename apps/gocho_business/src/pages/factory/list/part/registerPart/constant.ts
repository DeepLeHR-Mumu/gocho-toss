export const defaultInput = {
  factory_name: "",
  address: "",
  product: "",
  male_number: "" as unknown as number,
  female_number: "" as unknown as number,
  bus_bool: null as unknown as "true" | "false",
  bus_etc: "",
  dormitory_bool: null as unknown as "true" | "false",
  dormitory_etc: "",
};

export const FACTORY_MESSSAGE_OBJ = {
  REGISTER: "최종 공장 업로드 요청 하시겠습니까? 영업일 기준 검수 완료까지 1시간 정도 소요됩니다.",
  DELETE: "삭제시 해당 공장은 더이상 고초대졸닷컴에 노출되지 않으며, 삭제 복구는 불가능합니다",
};
