export interface JobCardProps {
  jobData: {
    id: number;
    endTime: number;
    title: string;
    cut: boolean;
    companyLogo: string;
    companyName: string;
  };
}
