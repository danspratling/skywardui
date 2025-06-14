"use client";

import { cn, transformId } from "@/utils";
import { CircleIcon } from "@untitledui-icons/react/line";
import { useState } from "react";
import type { RadioProps } from "./Radio.d";

export const Radio = ({
  id,
  name,
  label,
  hideLabel,
  checked,
  defaultChecked,
  icon,
  size = "md",
  className,
  as,
  ...props
}: RadioProps) => {
  // Uncontrolled (internal) component state - see "checked" for controlled component state
  const [checkedState, setCheckedState] = useState(defaultChecked || false);

  const formattedId = id ? id : label ? transformId(label) : undefined;
  const isChecked = checked !== undefined ? checked : checkedState;

  const Component = as ?? "button";

  return (
    <div className={cn("flex gap-3 items-center flex-nowrap", className)}>
      <Component
        id={formattedId}
        type="button"
        role="radio"
        aria-checked={isChecked}
        data-state={isChecked ? "checked" : ""}
        value={isChecked ? "on" : "off"}
        className={cn(
          "inline-flex rounded-full flex-none items-center justify-center border transition-colors duration-150 ease-in-out",
          isChecked
            ? "border-indigo-500 bg-indigo-500 text-white"
            : "border-gray-700 dark:border-gray-300 bg-transparent",
          // size
          size === "sm" && "size-4",
          size === "md" && "size-5",
          size === "lg" && "size-6",
          // overrides
          // className
        )}
        onClick={(event) =>
          props.onClick ? props.onClick(event) : setCheckedState(!isChecked)
        }
        onChange={() =>
          !props.onChange ? setCheckedState(!isChecked) : undefined
        }
        {...props}
      >
        {isChecked &&
          (icon ?? (
            <CircleIcon
              className={cn(
                "pointer-events-none text-inherit",
                size === "sm" && "size-3",
                size === "md" && "size-4",
                size === "lg" && "size-5",
              )}
              strokeWidth={3}
            />
          ))}
        <span className="sr-only">{label}</span>
      </Component>
      <input
        type="radio"
        id={formattedId}
        name={name}
        className="-translate-x-full absolute opacity-0 size-4 pointer-events-none"
        checked={isChecked}
        tabIndex={-1}
        aria-hidden="true"
      />
      {!hideLabel && label && (
        <label
          htmlFor={formattedId}
          className={cn(
            "inline-block text-gray-800 dark:text-gray-200 cursor-pointer", // size
            size === "sm" && "text-xs",
            size === "md" && "text-sm",
            size === "lg" && "text-md",
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};
