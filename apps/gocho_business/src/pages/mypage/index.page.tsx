import { ReactElement } from "react";

import { GlobalLayout } from "@/components/global/layout";

import { NextPageWithLayout } from "../_app.page";

const MyPage: NextPageWithLayout = () => <>MyPage</>;

MyPage.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;
export default MyPage;
