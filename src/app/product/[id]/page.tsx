"use client";
import Loading from "@/app/loading";
import { ProductType } from "@/types/productType";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useGetProductByIdQuery } from "@/lib/api/productsApi";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  addToCart,
  selectCartItemById,
  increaseQuantity,
  decreaseQuantity,
} from "../../../lib/features/cartSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [selectedSize, setSelectedSize] = useState<string>("");

  // Convert id to number since your RTK Query expects a number
  const productId =
    typeof id === "string"
      ? parseInt(id, 10)
      : Array.isArray(id)
      ? parseInt(id[0], 10)
      : 0;

  // Using RTK Query to fetch product by ID
  const {
    data: productDetail,
    isLoading: loading,
    error,
  } = useGetProductByIdQuery(productId);

  // Get cart item if it exists
  const cartItem = useAppSelector((state) =>
    selectCartItemById(state, productId)
  );

  const handleAddToCart = () => {
    if (productDetail) {
      dispatch(addToCart(productDetail));
    }
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(productId));
  };

  if (loading) return <Loading />;

  if (error || !productDetail)
    return (
      <div className="text-center text-red-500 h-screen flex justify-center items-center">
        Product not found
      </div>
    );

  return (
    <div className="w-[90%] mx-auto my-10">
      <div className="flex bg-white rounded-lg shadow dark:bg-gray-800 flex-col md:flex-row">
        <div className="relative w-full md:w-[50%] flex justify-center items-center">
          <Image
            src={productDetail.thumbnail}
            alt={productDetail.title}
            width={400}
            height={400}
            unoptimized
            className="object-cover w-full h-64 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
        </div>
        <div className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-2xl font-bold dark:text-gray-50">
              {productDetail.title}
            </h1>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              ${productDetail.price}
            </div>
            <div className="flex-none w-full mt-2 text-sm font-medium text-green-600 dark:text-green-400">
              ✓ In stock
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 mb-3">
              Size
            </h3>
            <div className="flex space-x-3">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <label key={size} className="cursor-pointer">
                  <input
                    type="radio"
                    className="sr-only"
                    name="size"
                    value={size.toLowerCase()}
                    checked={selectedSize === size.toLowerCase()}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  />
                  <div
                    className={`w-8 h-8 flex items-center justify-center text-sm font-medium rounded-md border-2 transition-colors ${
                      selectedSize === size.toLowerCase()
                        ? "border-indigo-600 bg-indigo-600 text-white"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </div>
                </label>
              ))}
            </div>
            <a
              href="#"
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-500 inline-block"
            >
              Size Guide
            </a>
          </div>

          {/* Quantity and Cart Controls */}
          {cartItem ? (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 mb-3">
                Quantity
              </h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleDecreaseQuantity}
                  className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  -
                </button>
                <span className="text-lg font-medium min-w-[2rem] text-center">
                  {cartItem.quantity}
                </span>
                <button
                  onClick={handleIncreaseQuantity}
                  className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  +
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Subtotal:{" "}
                <span className="font-semibold">
                  ${(productDetail.price * cartItem.quantity).toFixed(2)}
                </span>
              </p>
            </div>
          ) : null}

          {/* Add to Cart / Buy Button */}
          <div className="flex space-x-3 mt-6">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {cartItem ? `Add Another (+1)` : "Add to Cart"}
            </button>
            <button
              type="button"
              className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Buy Now
            </button>
          </div>

          {/* Product Description */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 mb-2">
              Description
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {productDetail.description}
            </p>
          </div>

          {/* Category */}
          <div className="mt-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Category: {productDetail.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
