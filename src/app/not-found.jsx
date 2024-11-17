import { Button } from "@/components/ui/button"; // Adjust import based on your setup
import { redirect } from "next/navigation";

export default function NotFoundPage() {
  // Function to handle redirecting to the home page
  const handleRedirect = async () => {
    "use server";
    redirect("/"); // This will redirect the user to the home page
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-6 bg-white dark:bg-gray-900 text-center px-4">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Sorry, the page you are looking for does not exist.
      </p>
      <form action={handleRedirect}>
        <Button
          type="submit"
          className="bg-[#C084FC] hover:bg-transparent-[#C084FC] text-black"
        >
          Go Back Home
        </Button>
      </form>
    </div>
  );
}
