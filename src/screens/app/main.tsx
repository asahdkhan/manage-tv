import React from "react";
import { Outlet } from "react-router-dom";
import AppLayout from "../../layouts/appLayout";

type mainProps = {
  nav: Array<{
    path: string;
    element: React.ReactNode;
  }>;
};

const Main = ({ nav }: mainProps) => {
  console.log(nav);
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default Main;
