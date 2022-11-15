export interface UserDataPartProps {
  dashboardData: {
    allUsers: number;
    todayUser: number;
    userGraphData: { month: string; value: number }[];
  };
}
