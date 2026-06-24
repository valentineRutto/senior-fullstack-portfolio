import React from "react";
import { ArrowRight } from "lucide-react";

export function ArrowLink({
  href,
  children,
  className = "",
  external = false,
  ...props
}) {
  return (
    <a
      className={`arrow-link ${className}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      {...props}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={15} strokeWidth={1.6} />
    </a>
  );
}
