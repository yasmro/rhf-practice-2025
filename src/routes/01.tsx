import { createFileRoute } from "@tanstack/react-router";
import { BasicForm } from "../components/01_BasicForm";

export const Route = createFileRoute("/01")({
  component: RouteComponent,
});

function RouteComponent() {
  return <BasicForm />;
}
