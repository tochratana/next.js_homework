// components/cart/Cart.tsx
"use client";
import React from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  selectCartItems,
  selectCartTotalItems,
  selectCartTotalPrice,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../../lib/features/cartSlice";

export default function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const totalItems = useAppSelector(selectCartTotalItems);
  const totalPrice = useAppSelector(selectCartTotalPrice);

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className="w-[90%] mx-auto my-10">
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Start shopping to add items to your cart!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[90%] mx-auto my-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Shopping Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
        </h1>
        <button
          onClick={handleClearCart}
          className="text-red-600 hover:text-red-800 font-medium text-sm"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
            >
              {/* Product Image */}
              <div className="flex-shrink-0 w-20 h-20">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-md"
                  unoptimized
                />
              </div>

              {/* Product Details */}
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  {item.description}
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {item.category}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecreaseQuantity(item.id)}
                  className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 hover:border-gray-400 transition-colors"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="text-lg font-medium min-w-[2rem] text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleIncreaseQuantity(item.id)}
                  className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  +
                </button>
              </div>

              {/* Price */}
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  ${item.price} each
                </p>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="text-red-500 hover:text-red-700 p-2"
                title="Remove from cart"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow h-fit">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Order Summary
          </h2>

          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                Subtotal ({totalItems} items)
              </span>
              <span className="font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Shipping</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Tax</span>
              <span className="font-medium">
                ${(totalPrice * 0.08).toFixed(2)}
              </span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${(totalPrice * 1.08).toFixed(2)}</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
            Proceed to Checkout
          </button>

          <button className="w-full mt-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
