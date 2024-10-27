import localFont from "next/font/local";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import { Fredoka } from "next/font/google";
import { cn } from "@/lib/utils";

const fredoka = Fredoka({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// const geistSans = localFont({
//   src: "../fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "../fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
        className={cn(fredoka.className, "antialiased bg-gray-100")}
      >
        <Header />
        <main className="flex-grow">
          {children} {/* Main content goes here */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
