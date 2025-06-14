"use client";
import { Providers } from "@/app/providers";
import AdminDashboard from "@/pages/Dashboard";

export default function AdminDashboardPage() {
  return (
    <Providers>
      <AdminDashboard />
    </Providers>
  );
}
