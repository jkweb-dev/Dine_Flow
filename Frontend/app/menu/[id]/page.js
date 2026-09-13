"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import api from "@/src/lib/axios";
import handleError from "@/src/utils/handleError";

import ProductImage from "@/Components/MenuProduct/Image";
import ProductDetails from "@/Components/MenuProduct/productDetails";

const ProductPage = () => {
  const params = useParams();
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const productId = params.id;

  const fetchProduct = async () => {
    try {
      setLoading(true);
      setNotFound(false);

      const response = await api.get(`/home/products/${productId}`);

      const fetchedProduct = response.data.product;

      setProduct(fetchedProduct);

      if (fetchedProduct.sizes?.length > 0) {
        setSelectedSize(fetchedProduct.sizes[0]);
      }
    } catch (error) {
      if (error.response?.status === 404) {
        setNotFound(true);
      } else {
        handleError(error, router);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleIncrease = () => {
    setQuantity((previousQuantity) => previousQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((previousQuantity) =>
      Math.max(1, previousQuantity - 1)
    );
  };

  const totalPrice = selectedSize
    ? selectedSize.price * quantity
    : 0;

  const handleAddToCart = () => {
    console.log("Add to cart:", {
      productId: product._id,
      name: product.name,
      size: selectedSize,
      quantity,
      totalPrice,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fffaf5] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="aspect-square animate-pulse rounded-[2rem] bg-[#fff0e7]" />

          <div className="space-y-5">
            <div className="h-6 w-28 animate-pulse rounded-full bg-orange-100" />
            <div className="h-12 w-4/5 animate-pulse rounded-xl bg-orange-100" />
            <div className="h-20 w-full animate-pulse rounded-xl bg-orange-50" />
            <div className="h-px w-full bg-orange-100" />

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="h-20 animate-pulse rounded-2xl bg-orange-50"
                />
              ))}
            </div>

            <div className="h-12 w-36 animate-pulse rounded-2xl bg-orange-100" />
          </div>
        </div>
      </div>
    );
  }

  if (notFound || !product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fffaf5] px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff0e7] text-4xl">
            🍔
          </div>

          <h1 className="mt-6 text-2xl font-black text-[#2b211d] sm:text-3xl">
            Product not found
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#8b766d]">
            Sorry, we couldn't find this delicious item. It may no
            longer be available.
          </p>

          <button
            type="button"
            onClick={() => router.push("/menu")}
            className="mt-6 rounded-2xl bg-[#c92a2a] px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-red-200 transition hover:-translate-y-0.5 hover:bg-[#ad2222]"
          >
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fffaf5] text-[#2b211d]">
      <main>
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8">
            {/* Product Image */}
            <ProductImage
              image={product.image}
              name={product.name}
            />

            {/* Product Information */}
            <ProductDetails
              product={product}
              selectedSize={selectedSize}
              onSizeChange={handleSizeChange}
              quantity={quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              totalPrice={totalPrice}
              onAddToCart={handleAddToCart}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductPage;