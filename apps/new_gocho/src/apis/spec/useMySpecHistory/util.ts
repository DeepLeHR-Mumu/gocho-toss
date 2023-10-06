import { getMySpecHistoryDef } from "../type/mySpecHistory";

export const selector = (mySpecHistoryData: getMySpecHistoryDef) => ({
  evalCount: mySpecHistoryData.eval_count,
  specArr: mySpecHistoryData.spec_arr.map((mySpec) => ({
    age: mySpec.age,
    award: mySpec.award,
    career: mySpec.career,
    certificate: mySpec.certificate,
    college: {
      department: mySpec.college?.department,
      grade: mySpec.college?.grade,
      maxGrade: mySpec.college?.max_grade,
      uturn: mySpec.college?.uturn,
    },
    createdTime: mySpec.created_time,
    desiredIndustry: mySpec.desired_industry,
    desiredTask: mySpec.desired_task,
    etc: mySpec.etc,
    gender: mySpec.gender,
    highSchool: {
      type: mySpec.highSchool.type,
      naesin: mySpec.highSchool.naesin,
      absent: mySpec.highSchool.absent,
      tardy: mySpec.highSchool.tardy,
      leaveEarly: mySpec.highSchool.leave_early,
      classMiss: mySpec.highSchool.class_miss,
    },
    id: mySpec.id,
    image: mySpec.image,
    language: mySpec.language,
    lastEducation: mySpec.last_education,
    military: mySpec.military,
    nickname: mySpec.nickname,
    score: mySpec.score,
    scoreCount: mySpec.score_count,
    secret: mySpec.secret,
  })),
});
