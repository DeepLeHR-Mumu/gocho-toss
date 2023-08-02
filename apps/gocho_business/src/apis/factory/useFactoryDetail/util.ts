import { ResponseObjDef } from "./type";

export const factoryDetailSelector = ({ data }: ResponseObjDef) => ({
  id: data.id,
  status: data.status,
  uploader: {
    name: data.uploader.name,
    isMine: data.uploader.is_mine,
    department: data.uploader.department,
  },
  name: data.name,
  address: data.address,
  maleNumber: data.male_number,
  femaleNumber: data.female_number,
  product: data.product,
  bus: {
    exists: data.bus.exists,
    desc: data.bus.desc,
  },
  dormitory: {
    exists: data.dormitory.exists,
    desc: data.dormitory.desc,
  },
  createdTime: data.created_time,
  updatedTime: data.updated_time,
});
