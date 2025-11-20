"use client";
import React, { useEffect } from "react";
import StickyMenu from "../components/StickyMenu/StickyMenu";
import HeroBanner from "../sections/landing/HeroBanner/HeroBanner";
import About from "../sections/landing/AboutSection/About";
import CTAsection from "../sections/landing/CTAsection/CTAsection";
import LookingFresher from "../sections/landing/LookingFresher/LookingFresher";
import SignUpToday from "../sections/landing/SignUpToday/SignUpToday";
import FresherVoice from "../sections/landing/FresherVoice/FresherVoice";
import NeedHelp from "../sections/landing/NeedHelp/NeedHelp";

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

const page = () => {
  useEffect(() => {
    const subscribeUser = async () => {
      if (!("serviceWorker" in navigator)) return;

      const registration = await navigator.serviceWorker.register("/sw.js");

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
        ),
      });

      await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify(subscription),
      });
    };

    subscribeUser();
  }, []);

  useEffect(() => {
    const sendNotification = async () => {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "🎉 Flash Sale!",
          body: "Get 50% off on selected items today only!",
        }),
      });

      const result = await response.json();
      console.log(result); // { success: true }
    };

    sendNotification();
  }, []);
  return (
    <div className="page-wrap">
      <StickyMenu />
      <HeroBanner />
      <About />
      <CTAsection />
      <LookingFresher />
      <SignUpToday />
      <FresherVoice />
      <NeedHelp />
    </div>
  );
};

export default page;
