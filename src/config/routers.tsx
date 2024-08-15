// src/config/routers.ts
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

// Lazy load the components
const Home = lazy(() => import("../pages/Home"));
const GritCenter = lazy(() => import("../pages/GritCenter"));

const BASE_PATH = "/english-assistant-ui";

export const ROUTE_PATHS = {
  HOME: "/",
  GRIT_CENTER: `${BASE_PATH}/grit-center`,
};

export const routes: RouteObject[] = [
  {
    path: ROUTE_PATHS.HOME,
    element: <Home />,
  },
  {
    path: ROUTE_PATHS.GRIT_CENTER,
    element: <GritCenter />,
  },
];
