import { cn } from "@/lib/utils";

const Wrapper = ({ className, children }) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-xl px-1 md:px-5", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
