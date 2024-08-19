// src/config/routers.ts
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

// Lazy load the components
const Home = lazy(() => import("../pages/Home"));
const GritCenter = lazy(() => import("../pages/GritCenter"));
const K12English = lazy(() => import("../pages/K12English"));

const BASE_PATH = "/english-assistant-ui";

export const ROUTE_PATHS = {
  HOME: "/",
  GRIT_CENTER: `${BASE_PATH}/grit-center`,
  ENGLISH: `${BASE_PATH}/k12-english`,
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
  {
    path: ROUTE_PATHS.ENGLISH,
    element: <K12English />,
  },
];
