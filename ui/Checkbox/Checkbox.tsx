"use client";

import { cn, transformId } from "@/utils";
import { CheckIcon } from "@untitledui-icons/react/line";
import { useState } from "react";
import type { CheckboxProps } from "./Checkbox.d";

export const Checkbox = ({
  id,
  label,
  hideLabel,
  checked,
  defaultChecked,
  icon,
  size = "md",
  className,
  as,
  ...props
}: CheckboxProps) => {
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
        role="checkbox"
        aria-checked={isChecked === "indeterminate" ? "mixed" : isChecked}
        data-state={isChecked ? "checked" : ""}
        value={isChecked ? "on" : "off"}
        className={cn(
          "inline-flex rounded-md flex-none items-center justify-center border transition-colors duration-150 ease-in-out",
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
        onKeyDown={(event) => {
          if (props.onKeyDown) {
            props.onKeyDown(event);
          }
          // According to WAI ARIA, Checkboxes don't activate on enter keypress
          if (event.key === "Enter") event.preventDefault();
        }}
        onClick={(event) =>
          props.onChange ? props.onChange(event) : setCheckedState(!isChecked)
        }
        {...props}
      >
        {isChecked &&
          (icon ?? (
            <CheckIcon
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
        type="checkbox"
        aria-hidden="true"
        tabIndex={-1}
        value={isChecked ? "on" : "off"}
        className="-translate-x-full absolute opacity-0 size-4 pointer-events-none"
        checked={isChecked === "indeterminate" ? true : isChecked}
        onChange={() =>
          !props.onChange ? setCheckedState(!isChecked) : undefined
        }
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
