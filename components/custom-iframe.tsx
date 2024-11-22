import { cn } from "@/lib/utils";
import React from "react";

type CustomIframeProps = {} & React.IframeHTMLAttributes<HTMLIFrameElement>;

export default function CustomIframe({
  className,
  src,
  ...props
}: CustomIframeProps) {
  return (
    <iframe
      className={cn("w-full h-[800px]", className)}
      src={src}
      {...props}
    ></iframe>
  );
}
