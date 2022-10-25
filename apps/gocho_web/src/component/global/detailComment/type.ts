export interface DetailCommentProps {
  jdId: number | null;
  detailData: {
    companyId: number;
    name: string;
    title: string | null;
    logoUrl: string;
  } | null;
}
