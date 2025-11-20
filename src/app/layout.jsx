import { Rubik } from "next/font/google";
import ProgressBar from "../components/ProgressBar";
import "../app/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Footer from "../components/Footer/Footer";
import Copyright from "../components/Copyright/Copyright";
import Header from "../components/Header/Header";


const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "We are freshers",
  description:
    "At Fresher, we're passionate about bringing the beauty of fresh flowers directly from the farm to your doorstep. We bridge the gap between flower shops, online retailers, and the source, offering a seamless and reliable supply chain for the freshest blooms available.",
};

// const registerSW = async () => {
//   if (!("serviceWorker" in navigator)) return;

//   try {
//     const registration = await navigator.serviceWorker.register("/sw.js");
//     console.log("Service Worker registered", registration);
//   } catch (err) {
//     console.error("SW registration failed", err);
//   }
// };

export default function RootLayout({ children }) {
  // registerSW();

  return (
      <html lang="en">
        <body className={rubik.className}>
          <SpeedInsights />
          <Analytics />
          <ProgressBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <Copyright />
        </body>
      </html>
  );
}
