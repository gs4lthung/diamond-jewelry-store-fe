"use client";

import React, { useEffect, useState } from "react";
import styles from "../../styles/button.module.css";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopBtn() {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <button
      className={`${styles.scrollToTop} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
}
