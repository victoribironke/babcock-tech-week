import type { Metadata } from "next";
import ComingSoon from "../components/ComingSoon";

export const metadata: Metadata = {
  title: "Editions | Babcock Tech Week",
  description: "Explore current and past editions of Babcock Tech Week.",
};

export default function EditionsPage() {
  return (
    <ComingSoon
      title="Editions"
      description="A look at the current and past editions of Babcock Tech Week — the milestones, moments, and impact across the years."
    />
  );
}
