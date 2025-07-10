import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>RHF practice 2025</p>
      <p>RHF version: 7.60.0</p>
      <p>RHF / zod Resolver version: 5.1.1</p>
      <p>zod: 3.25.76</p>
    </div>
  );
}
