import LeftSidebar from "@/components/Custom/LeftSidebar";
import RightSideBar from "@/components/Custom/RightSideBar";
import React from "react";

const LogoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex items-start h-screen">
        <LeftSidebar />
        <main className="flex-1 w-full">{children}</main>
        <RightSideBar />
      </div>
    </>
  );
};

export default LogoLayout;
