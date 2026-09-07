"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import api from "@/src/lib/axios";
import handleError from "@/src/utils/handleError";
import ProductList from "@/Components/products/ProductList";
import toast from "react-hot-toast"

const ProductsPage = () => {
  const router = useRouter();

  // =========================
  // STATE
  // =========================

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // =========================
  // FETCH PRODUCTS
  // =========================

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await api.get("/admin/products");

      setProducts(response.data.products || []);
    } catch (error) {
      setError(true);

      handleError(error, router, {
        redirectOn401: true,
      });
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // INITIAL LOAD
  // =========================

  useEffect(() => {
    fetchProducts();
  }, []);

  // =========================
  // CREATE PRODUCT
  // =========================

  const handleCreateProduct = () => {
    router.push("/admin/products/create");
  };

  // =========================
  // EDIT PRODUCT
  // =========================

  const handleEditProduct = (productId) => {
    router.push(`/admin/products/edit/${productId}`);
  };

  // =========================
  // DELETE PRODUCT
  // =========================

  const handleDeleteProduct = async (productId) => {
    try {
      await api.delete(`/admin/products/${productId}`);

      setProducts((previousProducts) =>
        previousProducts.filter(
          (product) => product._id !== productId
        )
      );
    } catch (error) {
      handleError(error, router, {
        redirectOn401: true,
      });
    }
  };


  // ======================================================
// TOGGLE AVAILABILITY
// ======================================================

const handleToggleAvailability = async (productId) => {
  try {
    const response = await api.patch(
      `/admin/products/${productId}/availability`
    );

    const updatedProduct = response.data.product;

    setProducts((previousProducts) =>
      previousProducts.map((product) =>
        product._id === productId
          ? updatedProduct
          : product
      )
    );

    toast.success(
      response.data?.message ||
        "Product availability updated."
    );
  } catch (error) {
    handleError(error, router, {
      redirectOn401: true,
    });
  }
};
  // =========================
  // RETRY
  // =========================

  const handleRetry = () => {
    fetchProducts();
  };

  // =========================
  // UI
  // =========================

  return (
    <ProductList
      products={products}
      loading={loading}
      error={error}
      onCreateProduct={handleCreateProduct}
      onEditProduct={handleEditProduct}
      onDeleteProduct={handleDeleteProduct}
        onToggleAvailability={handleToggleAvailability}
      onRetry={handleRetry}
    />
  );
};

export default ProductsPage;