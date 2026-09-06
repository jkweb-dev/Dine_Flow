"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import api from "@/src/lib/axios";
import handleError from "@/src/utils/handleError";
import EditProduct from "@/Components/products/EditProduct";

const EditProductPage = () => {
  const router = useRouter();
  const params = useParams();

  const productId = params.id;

  // ======================================================
  // FORM STATE
  // ======================================================

  const [formData, setFormData] = useState({
    name: "",
    shortDescription: "",
    category: "",
    sizes: [],
  });

  // ======================================================
  // IMAGE STATE
  // ======================================================

  const [currentImage, setCurrentImage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  // ======================================================
  // PAGE STATE
  // ======================================================

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // ======================================================
  // FETCH PRODUCT
  // ======================================================

  const fetchProduct = async () => {
    try {
      setLoading(true);

      const response = await api.get(
        `/admin/products/${productId}`
      );

      const product = response.data.product;

      setFormData({
        name: product.name || "",
        shortDescription:
          product.shortDescription || "",
        category: product.category || "",
        sizes: Array.isArray(product.sizes)
          ? product.sizes
          : [],
      });

      const existingImage = product.image?.url || "";

      setCurrentImage(existingImage);
      setImagePreview(existingImage);
    } catch (error) {
      handleError(error, router, {
        redirectOn401: true,
      });
    } finally {
      setLoading(false);
    }
  };

  // ======================================================
  // INITIAL LOAD
  // ======================================================

  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  // ======================================================
  // CLEAN IMAGE PREVIEW
  // ======================================================

  useEffect(() => {
    return () => {
      if (
        imagePreview &&
        imagePreview.startsWith("blob:")
      ) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  // ======================================================
  // INPUT CHANGE
  // ======================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // ======================================================
  // IMAGE CHANGE
  // ======================================================

  const handleImageChange = (file) => {
    if (!file) {
      return;
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image.");
      return;
    }

    // Validate file size
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size must be less than 5MB.");
      return;
    }

    // Revoke previous temporary preview
    if (
      imagePreview &&
      imagePreview.startsWith("blob:")
    ) {
      URL.revokeObjectURL(imagePreview);
    }

    setImageFile(file);

    // Create preview for newly selected image
    const previewUrl = URL.createObjectURL(file);

    setImagePreview(previewUrl);
  };

  // ======================================================
  // SIZE CHANGE
  // ======================================================

  const handleSizeChange = (
    index,
    field,
    value
  ) => {
    setFormData((previousData) => {
      const updatedSizes = [
        ...previousData.sizes,
      ];

      updatedSizes[index] = {
        ...updatedSizes[index],
        [field]: value,
      };

      return {
        ...previousData,
        sizes: updatedSizes,
      };
    });
  };

  // ======================================================
  // ADD SIZE
  // ======================================================

  const handleAddSize = () => {
    setFormData((previousData) => ({
      ...previousData,
      sizes: [
        ...previousData.sizes,
        {
          name: "",
          price: "",
        },
      ],
    }));
  };

  // ======================================================
  // REMOVE SIZE
  // ======================================================

  const handleRemoveSize = (index) => {
    setFormData((previousData) => ({
      ...previousData,
      sizes: previousData.sizes.filter(
        (_, sizeIndex) =>
          sizeIndex !== index
      ),
    }));
  };

  // ======================================================
  // SUBMIT
  // ======================================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    // ==================================================
    // BASIC VALIDATION
    // ==================================================

    if (!formData.name.trim()) {
      toast.error("Product name is required.");
      return;
    }

    if (!formData.shortDescription.trim()) {
      toast.error(
        "Short description is required."
      );
      return;
    }

    if (!formData.category.trim()) {
      toast.error(
        "Product category is required."
      );
      return;
    }

    if (
      !Array.isArray(formData.sizes) ||
      formData.sizes.length === 0
    ) {
      toast.error(
        "At least one product size is required."
      );
      return;
    }

    // ==================================================
    // SIZE VALIDATION
    // ==================================================

    const invalidSize =
      formData.sizes.some(
        (size) =>
          !size.name?.trim() ||
          size.price === "" ||
          Number(size.price) < 0
      );

    if (invalidSize) {
      toast.error(
        "Please provide a valid name and price for every size."
      );
      return;
    }

    // ==================================================
    // CHECK DUPLICATE SIZES
    // ==================================================

    const sizeNames = formData.sizes.map(
      (size) => size.name
    );

    const hasDuplicateSizes =
      new Set(sizeNames).size !==
      sizeNames.length;

    if (hasDuplicateSizes) {
      toast.error(
        "Each product size can only be added once."
      );
      return;
    }

    try {
      setSaving(true);

      // ==================================================
      // CREATE FORM DATA
      // ==================================================

      const data = new FormData();

      data.append(
        "name",
        formData.name.trim()
      );

      data.append(
        "shortDescription",
        formData.shortDescription.trim()
      );

      data.append(
        "category",
        formData.category.trim()
      );

      data.append(
        "sizes",
        JSON.stringify(formData.sizes)
      );

      // Only send image if a new image was selected
      if (imageFile) {
        data.append("image", imageFile);
      }

      // ==================================================
      // UPDATE PRODUCT
      // ==================================================

      const response = await api.put(
        `/admin/products/${productId}`,
        data
      );

      toast.success(
        response.data?.message ||
          "Product updated successfully."
      );

      // ==================================================
      // REDIRECT
      // ==================================================

      router.push("/admin/products");
    } catch (error) {
      handleError(error, router, {
        redirectOn401: true,
      });
    } finally {
      setSaving(false);
    }
  };

  // ======================================================
  // CANCEL
  // ======================================================

  const handleCancel = () => {
    router.push("/admin/products");
  };

  // ======================================================
  // UI
  // ======================================================

  return (
    <EditProduct
      formData={formData}
      currentImage={currentImage}
      imageFile={imageFile}
      previewImage={imagePreview}
      loading={loading}
      saving={saving}
      onChange={handleChange}
      onImageChange={handleImageChange}
      onSizeChange={handleSizeChange}
      onAddSize={handleAddSize}
      onRemoveSize={handleRemoveSize}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default EditProductPage;