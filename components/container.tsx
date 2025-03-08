import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-full md:w-[90%] mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
