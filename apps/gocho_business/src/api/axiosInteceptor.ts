import axios from "axios";
import { BUSINESS_BACKEND_URL } from "shared-constant/externalURL";

export const axiosInstance = axios.create({
  timeout: 10000,
  baseURL: BUSINESS_BACKEND_URL,
  headers: {
    "x-access-token":
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYW5hZ2VySW5mbyIsImlkIjowLCJjb21wYW55X2lkIjo5NjgsImNvbXBhbnlfbmFtZSI6IuqzoOy0iOuMgOyhuOuLt-y7tCIsImNvbXBhbnlfbG9nbyI6Imh0dHBzOi8vY2RuLmdvY2hvLWJhY2suY29tL2NvbXBhbmllcy85NjgvbG9nby5wbmciLCJlbWFpbCI6InRlZW1vQGRlZXBsZWhyLmNvbSIsIm5hbWUiOiLti7DrqqgiLCJkZXBhcnRtZW50Ijoi6rCc67Cc7YyAIiwicm9sZSI6IlJPTEVfTUFOQUdFUiIsInR5cGUiOjIsImlhdCI6MTY3MTYwODA0MywiZXhwIjoxNjcyODE3NjQzLCJpc3MiOiLqs6DstIjrjIDsobguY29tIn0.lQWFIMx68-bvxdShHN0exZaeE2dBUTztLIWYLA0GyKOJyYNJ1wcZr9ZRrHE_5tqPqOIyT0HLZhn5y92t_XBeQQ",
  },
});
