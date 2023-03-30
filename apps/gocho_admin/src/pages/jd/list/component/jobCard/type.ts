export interface JobCardProps {
  job: {
    id: number;
    applyUrl: string;
    companyName: string;
    title: string;
    startTime: number;
    endTime: number;
    taskArr: string[];
  };
}
