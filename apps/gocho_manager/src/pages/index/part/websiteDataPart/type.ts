interface graphData {
  month: string;
  value: number;
}

export interface WebsiteDataPartProps {
  dashboardData: {
    todayJds: number;
    todayComments: number;
    todayJdBookmarks: number;
    todayCompanyBookmarks: number;
    commentGraphData: graphData[];
    jdBookmarkGraphData: graphData[];
    companyBookmarkGraphData: graphData[];
  };
}
