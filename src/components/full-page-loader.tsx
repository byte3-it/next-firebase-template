import { Loader2 } from "lucide-react";

export const FullPageLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4 text-2xl">
      <Loader2 className="size-20 animate-spin" />
    </div>
  );
};
