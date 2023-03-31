/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product, addToCartHandler }) {
    return (
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/product/${product.slug}`}>
                <img class="mb-4 rounded-t-lg" src={product.image} alt={product.name} />
            </Link>
            <div class="px-5 pb-5">
                <Link href={`/product/${product.slug}`}>
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                </Link>
                <div class="flex items-center mt-2.5 mb-5">{product.brand}</div>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                    <button
                        onClick={() => addToCartHandler(product)}
                        // href={`/product/${product.slug}`}
                        class="primary-button"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
