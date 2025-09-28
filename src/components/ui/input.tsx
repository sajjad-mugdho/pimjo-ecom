import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // width: max 400px, full width within container; padding: 10px 16px; radius: 12px
        "file:text-foreground placeholder:text-gray-400 placeholder:opacity-70 dark:placeholder:text-gray-400/60 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full max-w-[400px] min-w-0 rounded-[12px] border bg-transparent px-[16px] py-[10px] text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };
