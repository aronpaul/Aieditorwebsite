import { ReactNode } from "react";

type ShellProps = {
  children: ReactNode;
  className?: string;
};

export default function Shell({ children, className = "" }: ShellProps) {
  return (
    <div className={`mx-auto w-full max-w-[88rem] px-12 md:px-20 lg:px-28 xl:px-32 ${className}`.trim()}>
      {children}
    </div>
  );
}
