import { cn } from "@/utils";
import type { InputProps } from "./Input.d";

export const Input = ({ className, error, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        " focus:outline-indigo-100 focus:outline-offset-0 focus:outline-4 inline-flex w-full gap-x-2 rounded-lg border py-2 px-4 text-gray-600 no-underline placeholder:text-gray-400 dark:placeholder:text-gray-600 dark:text-gray-100",
        error ? "border-red-500" : "border-gray-300",
        className,
      )}
      {...props}
    />
  );
};
