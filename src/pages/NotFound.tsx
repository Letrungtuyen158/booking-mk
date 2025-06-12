"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h1>404 - Not Found</h1>
      <p>Trang bạn tìm kiếm không tồn tại.</p>
      <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
        Return to Home
      </Link>
    </div>
  );
}
