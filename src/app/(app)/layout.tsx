import Header from "@/components/common/Header/Header";
import React, { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <Header />
      <div className="container">{children}</div>
    </div>
  );
};

export default AppLayout;
