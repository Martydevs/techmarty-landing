import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/shadcn/tooltip";

import { type ComponentPropsWithoutRef } from "react";

interface TooltipProps extends ComponentPropsWithoutRef<"div"> {
  text: string;
}

export default function ToolTip({ text, children }: TooltipProps) {
  return (
    <Tooltip delayDuration={100}>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent>
        {text}
      </TooltipContent>
    </Tooltip>
  );
}
