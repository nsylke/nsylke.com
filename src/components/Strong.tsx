import clsx from "clsx";
import type React from "react";

export function Strong({ className, ...props }: React.ComponentPropsWithoutRef<"strong">) {
  return (
    <strong {...props} className={clsx(className, "font-medium text-zinc-950 dark:text-white")} />
  );
}
