import localFont from "next/font/local";
import "./globals.css";
import HeaderBanner from "./components/HeaderBanner";
import NavBar from "./components/NavBar";

import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const jost100 = localFont({
  src: "./fonts/Jost100Hairline.otf",
  variable: "--font-jost100",

});
const jost200 = localFont({
  src: "./fonts/Jost200Thin.otf",
  variable: "--font-jost200",

});
const jost300 = localFont({
  src: "./fonts/Jost300Light.otf",
  variable: "--font-jost300",

});
const jost400 = localFont({
  src: "./fonts/Jost400Book.otf",
  variable: "--font-jost400",

});
const jost500 = localFont({
  src: "./fonts/Jost500Medium.otf",
  variable: "--font-jost500",

});
const jost600 = localFont({
  src: "./fonts/Jost600Semi.otf",
  variable: "--font-jost600",

});

export const metadata = {
  title: "Ringz&Thingz",
  description: "Ringz&Thingz shop app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${jost100.variable}  ${jost200.variable} ${jost300.variable} ${jost400.variable} ${jost500.variable} ${jost600.variable} antialiased font-[family-name:var(--font-jost300)] `}
      >
        <HeaderBanner />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
