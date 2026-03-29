import type { Metadata } from "next";
import ComingSoon from "../components/ComingSoon";

export const metadata: Metadata = {
  title: "Team | Babcock Tech Week",
  description: "Meet the team behind Babcock Tech Week.",
};

export default function TeamPage() {
  return (
    <ComingSoon
      title="Team"
      description="Meet the people behind Babcock Tech Week — the students, organisers, and partners making it all happen."
    />
  );
}
