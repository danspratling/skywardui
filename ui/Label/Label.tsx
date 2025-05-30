import { cn } from "@/utils";

export const Label = ({
  htmlFor,
  children,
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "mb-2 block text-base font-semibold text-gray-600 dark:text-gray-400",
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
};
