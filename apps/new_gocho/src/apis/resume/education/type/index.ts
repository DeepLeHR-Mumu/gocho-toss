export interface ResumeEducationBase {
  id: number;
  name: string;
  start_date: string;
  end_date: string | null;
  major: string | null;
}

export interface ResumeEducationDef extends ResumeEducationBase {
  education_type: string;
  is_uturn: boolean;
}

export interface ResumeCollegeDef extends ResumeEducationBase {
  end_date: string;
  graduate_type: string;
  grade: number;
  max_grade: number;
  etc: string | null;
}

export interface ResumeUniversityDef extends ResumeEducationBase {
  end_date: string;
  graduate_type: string;
  is_uturn: boolean;
  grade: number;
  max_grade: number;
  etc: string | null;
}

export interface ResumeExtrasDef extends ResumeEducationBase {
  end_date: string;
  graduate_type: string;
  grade: number;
  max_grade: number;
  etc: string | null;
}

export interface HighSchoolAttendance {
  disease_school_absent: number;
  disease_tardy: number;
  disease_leave: number;
  disease_subject_absent: number;
  unauthorized_school_absent: number;
  unauthorized_tardy: number;
  unauthorized_leave: number;
  unauthorized_subject_absent: number;
  extra_school_absent: number;
  extra_tardy: number;
  extra_leave: number;
  extra_subject_absent: number;
  total_class_days: number;
  is_perfect: number;
  description: string;
}

export interface ResumeHighSchoolDef extends ResumeEducationBase {
  end_date: string;
  graduate_type: string;
  is_alternative_test: boolean;
  first_attendance?: HighSchoolAttendance;
  second_attendance?: HighSchoolAttendance;
  third_attendance?: HighSchoolAttendance;
  grade: number | null;
  etc: string | null;
}
