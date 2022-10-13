export interface DetailCommentProps {
  jdId: number | null;
  detailData: {
    companyId: number;
    name: string;
    logoUrl: string;
  } | null;
}
