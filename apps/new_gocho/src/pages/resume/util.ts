import { useEffect, useRef, useState } from "react";

export const useDetectedPart = () => {
  const [currentPart, setCurrentPart] = useState("기본정보");

  const [profileRef, educationRef, careerRef, certificationRef, fluencyRef, activityRef] = [
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
        rootMargin: "-15% 0px -20% 0%",
        threshold: 0.4,
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
  }, [profileRef, educationRef, careerRef, certificationRef, fluencyRef, activityRef]);

  const handleClickScroll = (part: string) => {
    let myRef = null;

    setCurrentPart(part);

    switch (part) {
      case "기본정보": {
        myRef = profileRef;
        break;
      }
      case "학력": {
        myRef = educationRef;
        break;
      }
      case "경력": {
        myRef = careerRef;
        break;
      }
      case "자격증": {
        myRef = certificationRef;
        break;
      }
      case "어학": {
        myRef = fluencyRef;
        break;
      }
      case "대외활동": {
        myRef = activityRef;
        break;
      }
      default:
        myRef = profileRef;
        break;
    }
    if (myRef.current) {
      const headerHeight = 180;
      const element = myRef.current;
      const topPos = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: topPos,
      });
    }
  };

  return {
    currentPart,
    handleClickScroll,
    profileRef,
    educationRef,
    careerRef,
    certificationRef,
    fluencyRef,
    activityRef,
  };
};
