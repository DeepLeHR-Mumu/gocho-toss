import { SpecObjDef } from "../type/specArr";

export const selector = (specDataArr: SpecObjDef[]) =>
  specDataArr.map((specData) => ({
    id: specData.id,
    profileImg: specData.image,
    score: specData.score,
    scoreCount: specData.score_count,
    uploader: {
      nickname: specData.uploader.nickname,
      badge: specData.uploader.badge,
      image: specData.uploader.image,
    },
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
    highSchool: {
      naesin: specData.highSchool.naesin,
      type: specData.highSchool.type,
      absent: specData.highSchool.absent,
      classMiss: specData.highSchool.class_miss,
      tardy: specData.highSchool.tardy,
      leaveEarly: specData.highSchool.leave_early,
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
  }));
