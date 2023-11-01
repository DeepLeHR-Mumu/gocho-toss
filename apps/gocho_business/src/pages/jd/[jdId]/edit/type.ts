import { RequestObjDef as EditJdRequestObjDef } from "@/apis/jd/useEditJd/type";

type EditJdDetail = EditJdRequestObjDef["detail"];
type EditJdQualification = EditJdRequestObjDef["qualification"];
type EditJdApply = EditJdRequestObjDef["apply"];

type EditJdDetailPlace = EditJdRequestObjDef["detail"]["place"];

interface EditJdDetailPlaceWithFactory extends Omit<EditJdDetailPlace, "data"> {
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

interface EditJdFormDetail extends Omit<EditJdDetail, "task_description" | "pay" | "place"> {
  task_description: { value: string }[];
  pay: { value: string }[];
  place: EditJdDetailPlaceWithFactory;
}

interface EditJdFormQualification extends Omit<EditJdQualification, "required_etc" | "preferred_etc"> {
  required_etc: { value: string }[];
  preferred_etc: { value: string }[];
}

interface EditJdFormApply extends Omit<EditJdApply, "document" | "etc" | "process"> {
  document: { value: string }[];
  etc: { value: string }[];
  process: { value: string }[];
}

export interface EditJdFormValues {
  title: string;
  detail: EditJdFormDetail;
  qualification: EditJdFormQualification;
  apply: EditJdFormApply;
}
