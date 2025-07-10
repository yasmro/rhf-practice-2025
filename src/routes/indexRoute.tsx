import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";

export const indexRoute = createRoute({
  path: "/",
  getParentRoute: () => rootRoute,
  component: () => <div>RHF Practice 2025</div>,
});
