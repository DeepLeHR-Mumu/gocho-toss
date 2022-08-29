import { SpecObjDef } from "../type/specArr";

export const selector = (specDataArr: SpecObjDef[]) => {
  return specDataArr.map((specData) => {
    return {
      id: specData.id,
      profileImg: specData.image,
      nickname: specData.nickname,
      score: specData.score,
      scoreCount: specData.score_count,
      gender: specData.gender,
      age: specData.age,
      desiredTask: specData.desired_task,
      lastEducation: specData.last_education,
      // NOTMYFAULT undefined 해결 예정
      college:
        specData.college === null || specData.college === undefined
          ? null
          : {
              department: specData.college.department,
              grade: specData.college.grade,
              maxGrade: specData.college.max_grade,
            },
      highschool: {
        naesin: specData.highschool.naesin,
        type: specData.highschool.type,
        absent: specData.highschool.absent,
        classMiss: specData.highschool.class_miss,
        tardy: specData.highschool.tardy,
        leaveEarly: specData.highschool.leave_early,
      },
      // NOTMYFAULT undefined 해결 예정
      certificate:
        specData.certificate === null || specData.certificate === undefined
          ? null
          : specData.certificate,
    };
  });
};
