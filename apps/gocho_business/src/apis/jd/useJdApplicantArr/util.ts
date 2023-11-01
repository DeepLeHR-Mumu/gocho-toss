import { PageResultDef } from "shared-type/api/paginationType";

import { JdApplicant } from "../type";

export const selector = ({ data, page_result }: { data: JdApplicant[]; page_result: PageResultDef }) => {
  const pageResult = {
    totalElements: page_result?.total_elements,
    totalPages: page_result?.total_pages,
    page: page_result?.page,
    size: page_result?.size,
    isFirst: page_result?.is_first,
    isLast: page_result?.is_last,
  };

  const applicantArr = data.map((jd) => ({
    id: jd.id,
    applicant: {
      image: jd.applicant.image,
      name: jd.applicant.name,
      birthDate: jd.applicant.birth_date,
    },
    resume: {
      id: jd.resume.id,
      education: {
        educationType: jd.resume.education.education_type,
        name: jd.resume.education.name,
        graduateType: jd.resume.education.graduate_type,
      },
      career: {
        name: jd.resume.career.name,
        totalDuration: jd.resume.career.total_duration,
      },
    },
    isRead: jd.is_read,
  }));

  return { applicantArr, pageResult };
};
