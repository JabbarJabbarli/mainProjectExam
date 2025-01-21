import React, { useEffect, useRef } from "react";
import "./index.css";
import gsap from "gsap";
const Loading = () => {
  const loaderRef = useRef();
  const tl = gsap.timeline({ default: { duration: 1 } });
  useEffect(() => {
    tl.fromTo(loaderRef.current, { opacity: 0 }, { opacity: 1 });
  }, []);
  return (
    <div
      ref={loaderRef}
      className="loader-wrapper min-h-[100vh] flex items-center justify-center"
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loading;