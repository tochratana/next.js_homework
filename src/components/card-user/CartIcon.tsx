// components/cart/CartIcon.tsx
"use client";
import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";
import { selectCartTotalItems } from "../../lib/features/cartSlice";

export default function CartIcon() {
  const totalItems = useAppSelector(selectCartTotalItems);

  return (
    <Link
      href="/cart"
      className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
    >
      <svg
        className="w-6 h-6 text-gray-700 hover:text-gray-900"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6 0a1 1 0 100-2 1 1 0 000 2zm-8 0a1 1 0 100-2 1 1 0 000 2z"
        />
      </svg>

      {/* Cart item count badge */}
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
    </Link>
  );
}

// Alternative compact version for mobile
export function CartIconMobile() {
  const totalItems = useAppSelector(selectCartTotalItems);

  return (
    <Link href="/cart" className="relative flex items-center space-x-1 p-2">
      <svg
        className="w-5 h-5 text-gray-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6 0a1 1 0 100-2 1 1 0 000 2zm-8 0a1 1 0 100-2 1 1 0 000 2z"
        />
      </svg>

      {totalItems > 0 && (
        <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
