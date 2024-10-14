import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Color Your <span className="text-yellow-500">Vision</span>,
        <br />
        Transform Your <span className="text-yellow-500">Website</span>
      </h1>
      <p className="mt-4 text-lg max-w-prose text-muted-foreground">
        Try your color combinations on ready-to use templates{" "}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Link
          href="/events"
          className={buttonVariants({ variant: "outline" }, "p-4")}>
          Templates
        </Link>
        {/* <Button variant="ghost">
              <Link href="/tickets">Get your ticket! &rarr;</Link>
            </Button> */}
      </div>
    </div>
  );
}
