import { SpecDetailObjDef } from "../type/specDetail";

export const selector = (data: SpecDetailObjDef) => ({
  id: data.id,
  profileImg: data.image,
  uploader: {
    nickname: data.uploader.nickname,
    badge: data.uploader.badge,
    image: data.uploader.image,
  },
  gender: data.gender,
  age: data.age,
  military: data.military,
  desiredTask: data.desired_task,
  desiredIndustry: data.desired_industry,
  lastEducation: data.last_education,
  highschool: {
    type: data.highschool.type,
    naesin: data.highschool.naesin,
    absent: data.highschool.absent,
    tardy: data.highschool.tardy,
    leaveEarly: data.highschool.leave_early,
    classMiss: data.highschool.class_miss,
  },
  // NOTMYFAULT undefined 수정하기 - null로 와야함
  certificate:
    data.certificate === undefined || data.certificate === null
      ? null
      : {
          data: data.certificate.data ?? null,
          level1: data.certificate.level1,
          level2: data.certificate.level2,
          level3: data.certificate.level3,
        },
  // NOTMYFAULT undefined 수정하기 - null로 와야함
  college:
    data.college === undefined || data.college === null
      ? null
      : {
          department: data.college?.department,
          grade: data.college?.grade,
          maxGrade: data.college?.max_grade,
          isUturn: data.college?.uturn,
        },
  language: data.language,
  award: data.award,
  career: data.career,
  etc: data.etc,
  score: data.score,
  scoreCount: data.score_count,
  evals:
    data.evals === null
      ? null
      : {
          strongPointArr: data.evals.strength_count_arr,
          weakPointArr: data.evals.weakness_count_arr,
          feedbackArr: data.evals.feedback_arr,
        },
  isMine: data.is_mine,
  didEval: data.did_eval,
  evalCount: data.eval_count,
});
