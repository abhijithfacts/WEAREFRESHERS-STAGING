import { Rubik } from "next/font/google";
import ProgressBar from "../components/ProgressBar";
import "../app/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "We are freshers",
  description: "we are freshers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {/* Main content */}
        <SpeedInsights />
        <ProgressBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
