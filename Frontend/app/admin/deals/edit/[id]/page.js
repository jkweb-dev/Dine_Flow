"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import api from "@/src/lib/axios";
import handleError from "@/src/utils/handleError";
import EditDeal from "@/Components/EditDeal";

const EditDealPage = () => {
  const router = useRouter();
  const params = useParams();

  const dealId = params?.id;

  const [formData, setFormData] = useState({
    name: "",
    shortDescription: "",
    items: [
      {
        productName: "",
        quantity: 1,
      },
    ],
    dealPrice: "",
    startDate: "",
    endDate: "",
  });

  const [existingImage, setExistingImage] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(false);

  // Fetch deal
  const fetchDeal = async () => {
    if (!dealId) return;

    try {
      setLoading(true);
      setError(false);

      const response = await api.get(`/admin/deals/${dealId}`);

      const deal = response.data.deal;

      setFormData({
        name: deal.name || "",
        shortDescription: deal.shortDescription || "",
        items:
          deal.items?.length > 0
            ? deal.items.map((item) => ({
                productName: item.productName || "",
                quantity: item.quantity || 1,
              }))
            : [
                {
                  productName: "",
                  quantity: 1,
                },
              ],
        dealPrice:
          deal.dealPrice !== undefined
            ? String(deal.dealPrice)
            : "",
        startDate: deal.startDate
          ? new Date(deal.startDate).toISOString().slice(0, 16)
          : "",
        endDate: deal.endDate
          ? new Date(deal.endDate).toISOString().slice(0, 16)
          : "",
      });

      setExistingImage(deal.image?.url || null);
    } catch (error) {
      setError(true);

      handleError(error, router, {
        redirectOn401: true,
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch deal when ID is available
  useEffect(() => {
    fetchDeal();
  }, [dealId]);

  // Clean up preview URL
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  // Handle normal fields
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Handle image change
  const handleImageChange = (event) => {
    const selectedImage = event.target.files?.[0];

    if (!selectedImage) return;

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(selectedImage.type)) {
      toast.error(
        "Invalid image format. Only JPG, JPEG, PNG and WEBP are allowed."
      );

      event.target.value = "";
      return;
    }

    if (selectedImage.size > 5 * 1024 * 1024) {
      toast.error("Image size must be less than 5 MB.");

      event.target.value = "";
      return;
    }

    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    setImage(selectedImage);
    setImagePreview(URL.createObjectURL(selectedImage));
  };

  // Add deal item
  const handleAddItem = () => {
    setFormData((previousData) => ({
      ...previousData,
      items: [
        ...previousData.items,
        {
          productName: "",
          quantity: 1,
        },
      ],
    }));
  };

  // Remove deal item
  const handleRemoveItem = (index) => {
    setFormData((previousData) => ({
      ...previousData,
      items: previousData.items.filter(
        (_, itemIndex) => itemIndex !== index
      ),
    }));
  };

  // Change deal item
  const handleItemChange = (index, field, value) => {
    setFormData((previousData) => ({
      ...previousData,
      items: previousData.items.map((item, itemIndex) =>
        itemIndex === index
          ? {
              ...item,
              [field]: value,
            }
          : item
      ),
    }));
  };

  // Validate form
  const validateForm = () => {
    const name = formData.name.trim();
    const shortDescription =
      formData.shortDescription.trim();

    const dealPrice = Number(formData.dealPrice);

    // Name
    if (!name) {
      toast.error("Deal name is required.");
      return false;
    }

    if (name.length < 3) {
      toast.error("Deal name must be at least 3 characters.");
      return false;
    }

    // Description
    if (!shortDescription) {
      toast.error("Short description is required.");
      return false;
    }

    if (shortDescription.length < 10) {
      toast.error(
        "Short description must be at least 10 characters."
      );
      return false;
    }

    // Items
    if (!formData.items.length) {
      toast.error("A deal must contain at least one item.");
      return false;
    }

    for (let index = 0; index < formData.items.length; index++) {
      const item = formData.items[index];

      if (!item.productName.trim()) {
        toast.error(`Item ${index + 1} name is required.`);
        return false;
      }

      if (item.productName.trim().length < 2) {
        toast.error(
          `Item ${index + 1} name must be at least 2 characters.`
        );
        return false;
      }

      const quantity = Number(item.quantity);

      if (!Number.isInteger(quantity) || quantity < 1) {
        toast.error(
          `Quantity for item ${index + 1} must be at least 1.`
        );
        return false;
      }
    }

    // Price
    if (
      formData.dealPrice === "" ||
      formData.dealPrice === null
    ) {
      toast.error("Deal price is required.");
      return false;
    }

    if (!Number.isFinite(dealPrice) || dealPrice <= 0) {
      toast.error("Deal price must be greater than 0.");
      return false;
    }

    // Dates
    if (!formData.startDate) {
      toast.error("Start date is required.");
      return false;
    }

    if (!formData.endDate) {
      toast.error("End date is required.");
      return false;
    }

    const startDate = new Date(formData.startDate);
    const endDate = new Date(formData.endDate);

    if (isNaN(startDate.getTime())) {
      toast.error("Please select a valid start date.");
      return false;
    }

    if (isNaN(endDate.getTime())) {
      toast.error("Please select a valid end date.");
      return false;
    }

    if (endDate <= startDate) {
      toast.error("End date must be after start date.");
      return false;
    }

    return true;
  };

  // Submit updated deal
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    try {
      setSaving(true);

      const data = new FormData();

      // Only send image if admin selected a new one
      if (image) {
        data.append("image", image);
      }

      data.append("name", formData.name.trim());

      data.append(
        "shortDescription",
        formData.shortDescription.trim()
      );

      data.append(
        "items",
        JSON.stringify(
          formData.items.map((item) => ({
            productName: item.productName.trim(),
            quantity: Number(item.quantity),
          }))
        )
      );

      data.append(
        "dealPrice",
        Number(formData.dealPrice)
      );

      data.append("startDate", formData.startDate);
      data.append("endDate", formData.endDate);

      const response = await api.put(
        `/admin/deals/${dealId}`,
        data
      );

      toast.success(
        response.data?.message ||
          "Deal updated successfully."
      );

      router.push("/admin/deals");
    } catch (error) {
      handleError(error, router, {
        redirectOn401: true,
      });
    } finally {
      setSaving(false);
    }
  };

  // Cancel editing
  const handleCancel = () => {
    if (saving) return;

    router.push("/admin/deals");
  };

  // Retry loading
  const handleRetry = () => {
    fetchDeal();
  };

  return (
    <EditDeal
      formData={formData}
      existingImage={existingImage}
      imagePreview={imagePreview}
      loading={loading}
      saving={saving}
      error={error}
      onChange={handleChange}
      onImageChange={handleImageChange}
      onAddItem={handleAddItem}
      onRemoveItem={handleRemoveItem}
      onItemChange={handleItemChange}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onRetry={handleRetry}
    />
  );
};

export default EditDealPage;