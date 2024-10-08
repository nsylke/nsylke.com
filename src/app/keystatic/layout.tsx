import KeystaticApp from "@/keystatic/KeystaticApp";
import { showAdminUI } from "@/keystatic/keystatic.config";
import { notFound } from "next/navigation";

export default function KeystaticLayout() {
  if (!showAdminUI) notFound();

  return <KeystaticApp />;
}
