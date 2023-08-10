import React from "react";
import Avatar from "@/components/Avatar";
import Logo from "@/components/ui/Logo";

const DashboardHeader = () => {
  return (
    <header className="flex justify-between p-4">
      <Logo />
      <Avatar />
    </header>
  );
};

export default DashboardHeader;
