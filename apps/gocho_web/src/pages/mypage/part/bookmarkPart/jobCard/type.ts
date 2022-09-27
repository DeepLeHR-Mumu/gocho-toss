export interface JobCardProps {
  jobData: {
    id: number;
    endTime: number;
    title: string;
    cut: boolean;
    companyName: string;
    companyLogo: string;
  };
}
