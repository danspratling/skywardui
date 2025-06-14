"use client";

import { cn, transformId } from "@/utils";
import { useState } from "react";
import type { SwitchProps } from "./Switch.d";

export const Switch = ({
  id,
  label,
  detail,
  hideLabel = false,
  reverse,
  size = "md",
  checked = false,
  disabled = false,
  className,
}: SwitchProps) => {
  const [enabled, setEnabled] = useState(checked);

  const handleChange = () => {
    if (disabled) return;
    setEnabled(!enabled);
  };

  id = id ? id : label ? transformId(label) : undefined;

  return (
    <div
      className={cn(
        "flex gap-2 rounded-lg p-2.5",
        detail ? "items-start" : "items-center",
        reverse && "flex-row-reverse",
        className,
      )}
    >
      <button
        id={id}
        className={cn(
          "relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-4 focus:ring-indigo-500/40 focus:ring-offset-2 focus:outline-indigo-500",
          enabled ? "bg-indigo-500" : "bg-gray-200 dark:bg-gray-700",
          size === "sm" && "h-4 w-8",
          size === "md" && "h-6 w-11",
          size === "lg" && "h-8 w-14",
        )}
        onClick={handleChange}
        type="button"
        role="switch"
        aria-checked={enabled}
      >
        {label && hideLabel ? <span className="sr-only">{label}</span> : null}
        <span
          className={cn(
            "pointer-events-none inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
            size === "sm" && "size-3",
            size === "md" && "size-5",
            size === "lg" && "size-7",
            enabled
              ? {
                  "translate-x-4": size === "sm",
                  "translate-x-5": size === "md",
                  "translate-x-6": size === "lg",
                }
              : "translate-x-0",
          )}
        />
      </button>

      {label && !hideLabel ? (
        <div className={cn("-my-1.5", !reverse ? "text-left" : "text-right")}>
          <label htmlFor={id} className="font-semibold">
            {label}
          </label>
          {detail ? (
            <p className="text-sm text-gray-600 dark:text-gray-400">{detail}</p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
