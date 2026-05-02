import type { Metadata } from "next";
import TeamPage from "@/components/TeamPage";

export const metadata: Metadata = {
  title: "Team | GreenCrew",
  description:
    "From lawn mowing and edging to leaf cleanup and fertilization — explore everything GreenCrew offers to keep your yard looking its best.",
  openGraph: {
    title: "Services | GreenCrew",
    description: "Professional lawn care services from your neighborhood crew.",
    // images: [{ url: '/og/services.jpg' }], // ← add your OG image
  },
};

export default function Page() {
  return <TeamPage />;
}
