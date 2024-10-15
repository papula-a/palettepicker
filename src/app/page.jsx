import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-orange-100 to-white">
      {/* Left shape */}
      <svg
        className="absolute left-0 top-0 h-full w-1/2"
        viewBox="0 0 200 800"
        preserveAspectRatio="none">
        <path fill="#FED7AA" d="M0,0 L100,0 Q200,400 100,800 L0,800 Z" />
      </svg>
      {/* Right shapes */}
      <svg
        className="absolute right-0 top-0 h-full w-1/2"
        viewBox="0 0 200 800"
        preserveAspectRatio="none">
        <path fill="#FED7AA" d="M100,0 Q0,400 100,800 L200,800 L200,0 Z" />
        <path fill="#FDBA74" d="M150,0 Q50,400 150,800 L200,800 L200,0 Z" />
      </svg>
      {/* Content container */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="text-center px-4">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Color Your <span className="text-yellow-500">Vision</span>,
            <br />
            Transform Your <span className="text-yellow-500">Website</span>
          </h1>
          <p className="mt-4 text-lg max-w-prose text-muted-foreground mx-auto">
            Try your color combinations on ready-to-use templates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
            <Link
              href="/events"
              className={buttonVariants({ variant: "outline" }, "p-4")}>
              Templates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
