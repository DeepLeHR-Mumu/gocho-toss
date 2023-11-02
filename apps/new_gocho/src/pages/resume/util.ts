import { useEffect, useRef, useState } from "react";

export const useDetectedPart = () => {
  const [currentPart, setCurrentPart] = useState("기본정보");

  const [rootRef, profileRef, educationRef, careerRef, certificationRef, fluencyRef, activityRef] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { target } = entry;

            switch (target) {
              case profileRef.current: {
                setCurrentPart("기본정보");
                break;
              }
              case educationRef.current: {
                setCurrentPart("학력");
                break;
              }
              case careerRef.current: {
                setCurrentPart("경력");
                break;
              }
              case certificationRef.current: {
                setCurrentPart("자격증");
                break;
              }
              case fluencyRef.current: {
                setCurrentPart("어학");
                break;
              }
              case activityRef.current: {
                setCurrentPart("대외활동");
                break;
              }
              default:
                break;
            }
          }
        });
      },
      {
        root: rootRef.current,
        rootMargin: "-18% 0px 20% 0%",
        threshold: 0.75,
      }
    );
    const refs = [profileRef, educationRef, careerRef, certificationRef, fluencyRef, activityRef];

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [rootRef, profileRef, educationRef, careerRef, certificationRef, fluencyRef, activityRef]);

  return { currentPart, rootRef, profileRef, educationRef, careerRef, certificationRef, fluencyRef, activityRef };
};
