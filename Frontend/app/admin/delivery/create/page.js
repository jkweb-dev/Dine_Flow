
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import api from "@/src/lib/axios";
import handleError from "@/src/utils/handleError";
import CreateDeliveryBoy from "@/Components/DeliveryBoys/creationForm";

const CreateDeliveryBoyPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const userId = formData.userId.trim();
    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const password = formData.password;

    // User ID validation
    if (!userId) {
      toast.error("User ID is required.");
      return false;
    }

    if (userId.length < 3) {
      toast.error("User ID must be at least 3 characters.");
      return false;
    }

    // Name validation
    if (!name) {
      toast.error("Full name is required.");
      return false;
    }

    if (name.length < 3) {
      toast.error("Name must be at least 3 characters.");
      return false;
    }

    // Name should contain letters and spaces only
    if (!/^[A-Za-z\s]+$/.test(name)) {
      toast.error("Name can only contain letters and spaces.");
      return false;
    }

    // Phone validation
    if (!phone) {
      toast.error("Phone number is required.");
      return false;
    }

    // Allows Pakistani numbers such as:
    // 03001234567
    // +923001234567
    if (!/^(03\d{9}|\+923\d{9})$/.test(phone)) {
      toast.error(
        "Please enter a valid Pakistani phone number."
      );
      return false;
    }

    // Password validation
    if (!password) {
      toast.error("Password is required.");
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Stop submission if validation fails
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const response = await api.post(
        "/admin/delivery-boys",
        {
          userId: formData.userId.trim(),
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          password: formData.password,
        }
      );

      toast.success(
        response.data?.message ||
          "Delivery boy account created successfully."
      );

      router.push("/admin/delivery");
    } catch (error) {
      handleError(error, router, {
        redirectOn401: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    router.push("/admin/delivery");
  };

  return (
    <CreateDeliveryBoy
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      loading={loading}
      onCancel={handleCancel}
    />
  );
};

export default CreateDeliveryBoyPage;

