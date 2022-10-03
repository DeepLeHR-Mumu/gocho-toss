import { NextPage } from "next";
import { useRouter } from "next/router";

const KakaoLogin: NextPage = () => {
  const router = useRouter();
  const { code } = router.query;
  return <main>{code}</main>;
};

export default KakaoLogin;
