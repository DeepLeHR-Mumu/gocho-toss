import { useEffect } from "react";

interface UseViewCountProps {
  id: number | undefined;
}

export const useViewCount = ({ id }: UseViewCountProps) => {
  useEffect(() => {
    // localStorage.setItem("jobViewArr", 3);
    const jobViewStr = sessionStorage.getItem("jobViewArr");
    if (!id) return;

    const isViewed = jobViewStr?.includes(String(id));
    if (isViewed) return;

    if (jobViewStr) {
      const jobViewArr: number[] = JSON.parse(jobViewStr);
      jobViewArr.push(id);
      sessionStorage.setItem("jobViewArr", JSON.stringify(jobViewArr));
      return;
    }
    if (!isViewed) {
      sessionStorage.setItem("jobViewArr", JSON.stringify([id]));
    }
  }, [id]);
};
// interface UseViewCountProps {
//   id: number | undefined;
//   viewCounter: ({ elemId }: { elemId: number }) => void;
// }

// export const useViewCount = ({ id }: UseViewCountProps) => {
//   useEffect(() => {
//     const jobViewStr = sessionStorage.getItem("jobViewArr");
//     if (!id) return;

//     const isViewed = jobViewStr?.includes(String(id));
//     if (isViewed) return;

//     if (jobViewStr) {
//       const jobViewArr: number[] = JSON.parse(jobViewStr);
//       jobViewArr.push(id);
//       sessionStorage.setItem("jobViewArr", JSON.stringify(jobViewArr));
//       viewCounter({ elemId: id });
//       return;
//     }
//     if (!isViewed) {
//       sessionStorage.setItem("jobViewArr", JSON.stringify([id]));
//       viewCounter({ elemId: id });
//     }
//   }, [id, viewCounter]);
// };
