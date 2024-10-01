import clsx from "clsx";
import type React from "react";

export function Text({ className, ...props }: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p
      data-slot="text"
      {...props}
      className={clsx(className, "text-sm text-zinc-500 sm:text-base dark:text-zinc-400")}
    />
  );
}
