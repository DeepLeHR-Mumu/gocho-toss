export interface JobCardProps {
  jobData: {
    company: { id: number; name: string };
    title: string;
    endTime: number;
  };
}
