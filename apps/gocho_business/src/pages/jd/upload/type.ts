import { RequestObjDef as AddJdRequestObjDef } from "@/apis/jd/useAddJd/type";

type AddJdDetail = AddJdRequestObjDef["detail"];
type AddJdQualification = AddJdRequestObjDef["qualification"];
type AddJdApply = AddJdRequestObjDef["apply"];

type AddJdDetailPlace = AddJdRequestObjDef["detail"]["place"];

interface AddJdDetailPlaceWithFactory extends Omit<AddJdDetailPlace, "data"> {
  data: (
    | {
        type: "일반";
        location: {
          address: string;
          x: number;
          y: number;
        };
      }
    | {
        type: "공장";
        factory: {
          id: number;
          name: string;
          address: string;
        };
      }
  )[];
}

interface AddJdFormDetail extends Omit<AddJdDetail, "task_description" | "pay" | "place"> {
  task_description: { value: string }[];
  pay: { value: string }[];
  place: AddJdDetailPlaceWithFactory;
}

interface AddJdFormQualification extends Omit<AddJdQualification, "required_etc" | "preferred_etc"> {
  required_etc: { value: string }[];
  preferred_etc: { value: string }[];
}

interface AddJdFormApply extends Omit<AddJdApply, "document" | "etc" | "process"> {
  document: { value: string }[];
  etc: { value: string }[];
  process: { value: string }[];
}

export interface AddJdFormValues {
  title: string;
  detail: AddJdFormDetail;
  qualification: AddJdFormQualification;
  apply: AddJdFormApply;
}
