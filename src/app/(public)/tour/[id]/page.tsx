import TourDetail from "@/pages/TourDetail";

export const metadata = {
  title: "Tour Details - Booking MK",
  description: "Detailed information about tours, itineraries, prices, and services at Booking MK.",
};

export default function TourDetailPage({ params }: { params: { id: string } }) {
  return <TourDetail />;
}
