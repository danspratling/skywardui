import { cn } from "@/utils";
import type { NotificationProps } from "./Notification.d";

export function Notification({
  count,
  max = 99,
  showNumber = true,
  showZero,
  showPlus = true,
  children,
  className,
}: NotificationProps) {
  if ((count === 0 && !showZero) || count === undefined) return children;

  return (
    <div className="relative inline-block">
      <div
        className={cn(
          "absolute top-0 right-0 z-10 translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-[0.6875rem] font-semibold text-white bg-red-500 rounded-full px-1 py-px shadow-lg",
          showNumber ? "min-w-[21px] min-h-[21px]" : "size-4",
          className,
        )}
      >
        {showNumber && (
          <>
            {
              count > max
                ? `${max.toLocaleString("en-US")}${showPlus ? "+" : ""}` // 99+
                : count === 0 && !showZero // 0
                  ? ""
                  : count // 99
            }
          </>
        )}
      </div>
      {children}
    </div>
  );
}
