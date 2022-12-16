import type { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { useModal } from "@/globalStates/useModal";
import { useToast } from "@/globalStates/useToast";
import { useUserStatus } from "@/globalStates/useUser";

const HomePage: NextPage = () => {
  const router = useRouter();
  const { currentModal, setModal } = useModal();
  const { currentToast, setToast } = useToast();
  const { isLogined } = useUserStatus();

  useEffect(() => {
    if (!isLogined) router.push("/login");
  }, [isLogined, router]);

  return (
    <main>
      <div>
        <button
          type="button"
          onClick={() => {
            setModal("hi");
          }}
        >
          modal button
        </button>
        {currentModal}
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            setToast("토스트 메시지");
          }}
        >
          toast button
        </button>
        {currentToast}
      </div>
      business service HomePage
    </main>
  );
};

export default HomePage;
