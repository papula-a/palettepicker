import Wrapper from "@/components/Wrapper";
import localFont from "next/font/local";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}>
        <Wrapper className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children} {/* Main content goes here */}
          </main>
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
