import LeftSidebar from "@/components/Custom/LeftSidebar";
import React from "react";

const LogoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex items-start h-screen">
        <LeftSidebar />
        <main className="w-full ">{children}</main>
      </div>
    </>
  );
};

export default LogoLayout;
