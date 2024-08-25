'use client';
import { Product } from '../types/common';
import Header from '@/components/Header';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { productsAPI } from '@/lib/product';
import { formatCurrency } from '@/utils/formatCurrency';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    productsAPI.getAll().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <h2 className="text-3xl font-bold">Products</h2>
        </div>

        {loading ? (
          <div className="flex items-center justify-center w-full h-screen">
            <p className="text-xl text-blue-500">Loading...</p>
          </div>
        ) : (
          <ul className="grid gap-8 w-full max-w-5xl lg:grid-cols-4 lg:text-left mt-8">
            {products.map((product) => (
              <li
                key={product.id}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="mb-4 mx-auto"
                />
                <h3 className="mb-2 text-2xl font-semibold">{product.title}</h3>
                <p className="m-0 text-sm opacity-70">
                  {formatCurrency(product.price)}
                </p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
};

export default Home;
