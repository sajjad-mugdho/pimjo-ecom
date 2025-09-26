import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-[1200px] w-full mx-auto px-4">{children}</div>;
};

export default Container;
