import { Resolver, FieldError, FieldName, get } from "react-hook-form";
import { JobFormValues } from "./type";

export const getFieldArrayValue = (arrData: { value: string }[]) => arrData.map((item) => item.value);

export const getFieldArrayValueWithNull = (arrData: { value: string }[]) => {
  if (arrData.length === 0) {
    return null;
  }
  return arrData.map((item) => item.value);
};

function validate(
  name: FieldName<JobFormValues>,
  value: unknown,
  errors: Record<string, FieldError>,
  allValues: JobFormValues
) {
  // Perform a custom validation depending on field name
  const positionIndex = Number(name.split(".")[1]);

  const singleInputName = ["title", "start_time", "end_time", "apply_url", "task_main", "place.etc"];
  const fieldArrayName = ["process_arr", "apply_route_arr", "task_detail_arr", "required_etc_arr", "pay_arr"];

  if (singleInputName.some((element) => name.includes(element)) && value === "") {
    return {
      ...errors,
      [name]: {
        type: "required",
        message: "필수 입력 사항입니다",
      },
    };
  }

  if (fieldArrayName.some((element) => name.includes(element)) && value === "") {
    const errorField = fieldArrayName.find((element) => element.includes(name));
    if (errorField) {
      return {
        ...errors,
        [errorField]: {
          type: "required",
          message: "추가한 모든 칸이 채워져야 합니다",
        },
        [name]: {
          type: "asdf",
          message: "추가한 모든 칸이 채워져야 합니다",
        },
      };
    }

    return {
      ...errors,
      [name]: {
        type: "asdf",
        message: "추가한 모든 칸이 채워져야 합니다",
      },
    };
  }

  if (name === "title" && typeof value === "string" && value.length > 20) {
    return {
      ...errors,
      [name]: {
        type: "maxLength",
        message: "제목의 최대 길이는 20자입니다",
      },
    };
  }

  if (name.includes("hire_number") && value !== 0 && !value) {
    return {
      ...errors,
      [name]: {
        type: "required",
        message: "채용 인원은 필수 입력 사항입니다",
      },
    };
  }

  if (
    name.includes("conversion_rate") &&
    value === 0 &&
    (allValues.position_arr[positionIndex].contract_type === "계약>정규" ||
      allValues.position_arr[positionIndex].contract_type === "인턴")
  ) {
    return {
      ...errors,
      [name]: {
        type: "required",
        message: "전환률은 필수 입력 사항입니다",
      },
    };
  }

  if (
    (name.includes("min_year") || name.includes("max_year")) &&
    !value &&
    (allValues.position_arr[positionIndex].required_exp === "경력" ||
      allValues.position_arr[positionIndex].required_exp === "신입/경력")
  ) {
    return {
      ...errors,
      [name]: {
        type: "required",
        message: "최소/최대 경력은 필수 입력 사항입니다",
      },
    };
  }

  return errors;
}

export const customResolver: Resolver<JobFormValues> = (allValues, _context, { names }) => {
  let errors = {};
  if (names) {
    // Validate only changed fields
    errors = names.reduce((acc, selectedName) => {
      const selectedValue = get(allValues, selectedName);
      return validate(selectedName, selectedValue, acc, allValues);
    }, {});
  } else {
    // Validate all fields on submit event
    errors = Object.entries(allValues).reduce(
      (acc, [selectedName, selectedValue]) => validate(selectedName, selectedValue, acc, allValues),
      {}
    );
  }

  return { values: allValues, errors };
};
