import { Rubik } from "next/font/google";
import ProgressBar from "../components/ProgressBar";
import "../app/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "../components/Footer/Footer";
import Copyright from "../components/Copyright/Copyright";
import Header from "../components/Header/Header";

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
        <SpeedInsights />
        <ProgressBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
