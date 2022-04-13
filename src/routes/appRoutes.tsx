import React, { memo } from "react";
import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";

import LoginScreen from "../screens/login/login.screen";
import Main from "../screens/app/main";

import MyAccountScreen from "../screens/app/my-account/myAccount.screen";
import BillsScreen from "../screens/app/bills/bills.screen";

export const AppRoutes = [
  {
    path: "my-account",
    element: <MyAccountScreen />,
  },
  {
    path: "bills",
    element: <BillsScreen />,
  },
];

const mainRoutes: RouteObject[] = [
  {
    path: "login",
    element: <LoginScreen />,
  },
  {
    path: "app",
    element: <Main nav={AppRoutes} />,
    children: [...AppRoutes],
  },
];

const Route = () => useRoutes([...mainRoutes]);

export default memo(Route);
