import { createFileRoute } from "@tanstack/react-router";
import { BasicForm } from "../components/01_BasicForm";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <BasicForm />;
}
