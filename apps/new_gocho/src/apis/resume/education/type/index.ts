interface ResumeEducationBase {
  id: number;
  name: string;
  start_date: string;
  end_date: string | null;
  major: string;
}

interface PostEducationBase {
  name: string;
  start_date: string;
  end_date: string | null;
  major: string;
}

export interface PostEducationDef extends PostEducationBase {
  education_type: string;
  is_uturn: boolean;
}

export interface ResumeCollegeDef extends ResumeEducationBase {
  end_date: string | null;
  graduate_type: string | null;
  grade: number | null;
  max_grade: number | null;
  etc: string | null;
}

export interface PostCollegeDef extends PostEducationBase {
  end_date: string | null;
  graduate_type: string | null;
  grade: number | null;
  max_grade: number | null;
  etc?: string;
}

export interface ResumeUniversityDef extends ResumeEducationBase {
  end_date: string;
  graduate_type: string;
  is_uturn: boolean;
  grade: number | null;
  max_grade: number | null;
  etc: string | null;
}

export interface PostUniversityDef extends PostEducationBase {
  end_date: string | null;
  graduate_type: string;
  is_uturn: boolean;
  grade: number | null;
  max_grade: number | null;
  etc: string | null;
}
export interface ResumeExtraDef extends ResumeEducationBase {
  end_date: string;
  graduate_type: string;
  grade: number | null;
  max_grade: number | null;
  etc: string | null;
}

export interface PostExtraDef extends PostEducationBase {
  end_date: string | null;
  graduate_type: string;
  grade: number | null;
  max_grade: number | null;
  etc: number | null;
}

export interface HighSchoolAttendance {
  disease_school_absent: number | null;
  disease_tardy: number | null;
  disease_leave: number | null;
  disease_subject_absent: number | null;
  unauthorized_school_absent: number | null;
  unauthorized_tardy: number | null;
  unauthorized_leave: number | null;
  unauthorized_subject_absent: number | null;
  extra_school_absent: number | null;
  extra_tardy: number | null;
  extra_leave: number | null;
  extra_subject_absent: number | null;
  total_class_days: number;
  is_perfect: boolean;
  description: string | null;
}

export interface ResumeHighSchoolDef extends ResumeEducationBase {
  end_date: string | null;
  graduate_type: string;
  is_alternative_test: boolean | null;
  first_attendance: HighSchoolAttendance | null;
  second_attendance: HighSchoolAttendance | null;
  third_attendance: HighSchoolAttendance | null;
  grade: number | null;
  etc: string | null;
}

export interface PostHighSchoolDef extends PostEducationBase {
  end_date: string | null;
  graduate_type: string;
  is_alternative_test: boolean;
  first_attendance: HighSchoolAttendance | null;
  second_attendance: HighSchoolAttendance | null;
  third_attendance: HighSchoolAttendance | null;
  grade: number | null;
  etc: string | null;
}
export interface ResumeEducationDef extends ResumeEducationBase {
  education_type: string;
  graduate_type: string;
  is_alternative_test: boolean | null;
  is_uturn: boolean;
  first_attendance: HighSchoolAttendance | null;
  second_attendance: HighSchoolAttendance | null;
  third_attendance: HighSchoolAttendance | null;
  grade: string | null;
  max_grade: string | null;
  etc: string | null;
}
