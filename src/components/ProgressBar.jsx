"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/nprogress.css";

// Configure NProgress (optional)
NProgress.configure({ showSpinner: false, trickleSpeed: 100 });

const ProgressBar = () => {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
    NProgress.set(0.4); // Initial progress

    const timer = setTimeout(() => {
      NProgress.done();
    }, 500);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname]);

  return null; // NProgress renders itself
};

export default ProgressBar;
