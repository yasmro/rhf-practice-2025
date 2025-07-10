import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./routes/rootRoute";
import { indexRoute } from "./routes/indexRoute";

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
