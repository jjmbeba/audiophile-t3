"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";

const HeroImage = () => {
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const screen =
    windowSize.innerWidth >= 1024
      ? "desktop"
      : windowSize.innerWidth >= 768
        ? "tablet"
        : "mobile";

  console.log(screen);
  return (
    <Image
      src={`/home/${screen}/image-header.jpg`}
      priority
      className="absolute -z-10"
      fill
      alt="hero-image"
    />
  );
};

export default HeroImage;
