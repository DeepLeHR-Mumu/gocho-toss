import { SpecObjDef } from "../type/specArr";

export const selector = (specDataArr: SpecObjDef[]) => {
  return specDataArr.map((specData) => {
    return {
      id: specData.id,
      profileImg: specData.image,
      score: specData.score,
      scoreCount: specData.score_count,
      user: {
        nickname: specData.user.nickname,
        badge: specData.user.badge,
        image: specData.user.image,
      },
      gender: specData.gender,
      age: specData.age,
      desiredTask: specData.desired_task,
      lastEducation: specData.last_education,
      isMine: specData.isMine,
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
      certificate:
        specData.certificate === null || specData.certificate === undefined
          ? null
          : {
              data: specData.certificate.data,
              level1: specData.certificate.level1,
              level2: specData.certificate.level2,
              level3: specData.certificate.level3,
            },
    };
  });
};
