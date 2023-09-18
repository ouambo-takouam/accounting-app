import SideNavigation from "@components/navigation/sidenav.component";
import TopNavigation from "@components/navigation/topnav.component";
import { ReactNode } from "react";

export default function OnBoardingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <SideNavigation />
      <TopNavigation />
      {children}
    </>
  );
}
