"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import api from "@/src/lib/axios";
import ProductCreateForm from "@/Components/products/ProductCreateForm";
import handleError from "@/src/utils/handleError";


const ProductCreatePage = () => {
  const router = useRouter();

  // =========================
  // FORM DATA
  // =========================

  const [formData, setFormData] = useState({
    name: "",
    shortDescription: "",
    category: "",
    sizes: {
      small: {
        available: true,
        price: "",
      },
      medium: {
        available: true,
        price: "",
      },
      large: {
        available: false,
        price: "",
      },
      extraLarge: {
        available: false,
        price: "",
      },
    },
    available: true,
  });

  // =========================
  // IMAGE
  // =========================

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  // =========================
  // UI STATE
  // =========================

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");


  // =========================
  // HANDLE NORMAL INPUTS
  // =========================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    
    setSuccess("");
  };


  // =========================
  // HANDLE IMAGE
  // =========================

  const handleImageChange = (event) => {
    const selectedImage = event.target.files?.[0];

    if (!selectedImage) {
      return;
    }

    setImage(selectedImage);

    const previewUrl = URL.createObjectURL(selectedImage);

    setImagePreview(previewUrl);

   
    setSuccess("");
  };


  // =========================
  // HANDLE SIZE AVAILABILITY
  // =========================

  const handleSizeAvailability = (size) => {
    setFormData((previousData) => ({
      ...previousData,

      sizes: {
        ...previousData.sizes,

        [size]: {
          ...previousData.sizes[size],
          available: !previousData.sizes[size].available,
        },
      },
    }));

    setSuccess("");
  };


  // =========================
  // HANDLE SIZE PRICE
  // =========================

  const handleSizePrice = (size, price) => {
    setFormData((previousData) => ({
      ...previousData,

      sizes: {
        ...previousData.sizes,

        [size]: {
          ...previousData.sizes[size],
          price,
        },
      },
    }));

  
    setSuccess("");
  };


  // =========================
  // HANDLE PRODUCT AVAILABILITY
  // =========================

  const handleAvailability = () => {
    setFormData((previousData) => ({
      ...previousData,
      available: !previousData.available,
    }));

   
    setSuccess("");
  };


  // =========================
  // VALIDATION
  // =========================

  const validateForm = () => {
    if (!image) {
     toast.error("Please select a product image.") 
     return;
    }

    if (!formData.name.trim()) {
      toast.error("Please enter the product name.");
       return;
    }

    if (!formData.shortDescription.trim()) {
      toast.error("Please enter a short description.");
       return;
    }

    if (!formData.category) {
      toast.error("Please select a category.");
       return;
    }

    const sizes = formData.sizes;

    const selectedSizes = Object.entries(sizes).filter(
      ([, sizeData]) => sizeData.available
    );

    if (selectedSizes.length === 0) {
      toast.error("Please enable at least one size.");
       return;
    }

    for (const [size, sizeData] of selectedSizes) {
      if (
        sizeData.price === "" ||
        Number(sizeData.price) <= 0
      ) {
       toast.error(`Please enter a valid price for ${size}.`);
        return;
      }
    }

    return true ;
  };


  // =========================
  // SUBMIT PRODUCT
  // =========================

  const handleSubmit = async (event) => {
    event.preventDefault();


    setSuccess("");

    const validationError = validateForm();

    if (!validationError) {
      return;
    }

    try {
      setLoading(true);

      // Convert our size object into the format
      // expected by the backend.
      const sizes = Object.entries(formData.sizes)
        .filter(([, sizeData]) => sizeData.available)
        .map(([size, sizeData]) => ({
          name: size,
          price: Number(sizeData.price),
        }));

      // Create multipart/form-data
      const data = new FormData();

      data.append("image", image);
      data.append("name", formData.name.trim());
      data.append("shortDescription", formData.shortDescription.trim());
      data.append("category", formData.category);
      data.append("sizes", JSON.stringify(sizes));
      data.append("available", formData.available);

      const response = await api.post(
        "/admin/products",
        data
      );

      setSuccess(
        response.data.message ||
          "Product created successfully."
      );

      toast.success("Product Added Successfully.")

     
    } catch (error) {
       handleError(error, router, {
             redirectOn401: true,
           });
         
    } finally {
      setLoading(false);
    }
  };


  // =========================
  // PAGE
  // =========================

  return (
    <ProductCreateForm
      formData={formData}
      image={image}
      imagePreview={imagePreview}
      loading={loading}
      success={success}
      onChange={handleChange}
      onImageChange={handleImageChange}
      onSizeAvailabilityChange={handleSizeAvailability}
      onSizePriceChange={handleSizePrice}
      onAvailabilityChange={handleAvailability}
      onSubmit={handleSubmit}
    />
  );
};


export default ProductCreatePage;