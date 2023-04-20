// import { create } from "zustand";
// import { useEffect } from "react";

// import { managerTokenDecryptor } from "shared-util";

// import { UserStateInfoProps, UseUserStateDef } from "./type";

// const userStateInfo = create<UserStateInfoProps>((set) => ({
//   userState: null,
//   setUserState: (status) => set(() => ({ userState: status })),
// }));

// export const useUserState: UseUserStateDef = () => {
//   const { userState: userInfoData, setUserState: setUserInfoData } = userStateInfo();

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");

//     if (userInfoData === null && token) {
//       const { exp } = managerTokenDecryptor(token);

//       setUserInfoData({
//         id,
//         companyId: company_id,
//         exp,
//       });
//     }

//     if (userInfoData === null && !token) {
//       setUserInfoData(false);
//     }
//   }, [userInfoData, setUserInfoData]);

//   if (userInfoData) {
//     return { userInfoData, setUserInfoData };
//   }

//   return { setUserInfoData };
// };
