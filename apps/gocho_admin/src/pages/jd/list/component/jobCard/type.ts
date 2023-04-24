export interface JobCardProps {
  job: {
    id: number;
    applyUrl: string;
    companyName: string;
    title: string;
    startTime: string;
    endTime: string;
    taskArr: string[];
  };
}
