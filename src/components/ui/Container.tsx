import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Max-width container — 1280px, centered, with responsive horizontal padding.
 * Use as the inner wrapper for every section.
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`container-page ${className}`}>
      {children}
    </div>
  );
}
