import { cn } from "@/utils";
import type {
  ButtonElementProps,
  ButtonLinkProps,
  ButtonProps,
} from "./Button.d";

// A "button" can be both a <button> and an <a> element depending on the props passed. This lines up with the design system terminology moreso than the HTML spec where buttons and links are often visually indistinguishable.
export const Button = ({
  variant = "primary",
  size = "lg",
  ...props
}: ButtonProps) => {
  const className = generateButtonClasses({
    variant,
    size,
    className: props.className,
  });

  // if the href prop is present, render an a element - this could be expanded to better support anchor links
  if (props.href) {
    const { href, ...rest } = props as ButtonLinkProps;
    return <a href={href} className={className} {...rest} />;
  }

  // otherwise, render a button element
  return <button className={className} {...(props as ButtonElementProps)} />;
};

// Helper function to create the class names for the button
const generateButtonClasses = ({ variant, size, className }: ButtonProps) =>
  cn(
    // layout
    "rounded-lg relative no-underline inline-flex items-center justify-center overflow-hidden whitespace-nowrap font-semibold tracking-wide outline-none transition duration-200 ease-in-out disabled:pointer-events-none [&>*]:inline-flex [&>*]:items-center",

    // variants
    variant === "primary" &&
      "border border-indigo-500 bg-indigo-500 text-white hover:bg-indigo-400 focus:ring-4 focus:ring-indigo-500/40 focus:ring-offset-2 focus:ring-offset-indigo-200",
    variant === "outline" &&
      "border border-gray-400 text-gray-700 hover:text-gray-950 dark:border-gray-700 hover:bg-gray-400/20 hover:border-gray-500 dark:text-gray-100 dark:hover:text-white dark:focus:bg-gray-400/20 dark:focus:border-gray-200 dark:focus:text-white focus:ring-4 focus:ring-indigo-500/40 dark:focus:ring-offset-1 dark:focus:ring-offset-gray-200",
    variant === "ghost" &&
      "border border-transparent text-gray-700 hover:text-gray-950 hover:bg-gray-400/20 dark:text-gray-100 dark:hover:text-white dark:focus:bg-gray-400/20 dark:focus:border-gray-200 dark:focus:text-white focus:ring-4 focus:ring-indigo-500/40 dark:focus:ring-offset-1 dark:focus:ring-offset-gray-200",
    variant === "text" &&
      "border border-transparent justify-start text-gray-900 underline-offset-2 hover:underline focus:underline dark:text-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-gray-400/40",
    variant === "destructive" &&
      "border border-red-600 bg-red-600 text-red-50 hover:bg-red-500 hover:text-white focus:ring-4 focus:ring-red-500/40 focus:ring-offset-2 focus:ring-offset-red-200",

    // sizing
    size === "xs" && "gap-2 text-xs px-2 py-1 [&>*]:gap-2",
    size === "sm" && "gap-2 text-sm px-3 py-1.5 [&>*]:gap-2",
    size === "md" && "gap-2 text-md px-3.5 py-1 [&>*]:gap-2",
    size === "lg" && "gap-2 text-lg px-4 py-1.5 [&>*]:gap-2",
    size === "xl" && "gap-2.5 text-xl px-5 py-2 [&>*]:gap-2.5",
    size === "2xl" && "gap-3 text-2xl px-5 py-2 [&>*]:gap-3",

    // Icon classes
    size === "xs" && "has-[>.sr-only]:p-1.5",
    size === "sm" && "has-[>.sr-only]:p-2",
    size === "md" && "has-[>.sr-only]:p-2.5",
    size === "lg" && "has-[>.sr-only]:p-3",
    size === "xl" && "has-[>.sr-only]:p-3.5",
    size === "2xl" && "has-[>.sr-only]:p-4",

    // icon classes - applies to child svgs
    size === "xs" && "[&>svg]:size-3 [&>*>svg]:size-3",
    size === "sm" && "[&>svg]:size-4 [&>*>svg]:size-4",
    size === "md" && "[&>svg]:size-5 [&>*>svg]:size-5",
    size === "lg" && "[&>svg]:size-6 [&>*>svg]:size-6",
    size === "xl" && "[&>svg]:size-7 [&>*>svg]:size-7",
    size === "2xl" && "[&>svg]:size-8 [&>*>svg]:size-8",

    // any of the above classes can be overridden by passing a className prop
    className,
  );
