"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/authProvider";
import RegisterForm from "@/Components/registerForm";
import handleError from "@/src/utils/handleError";

const RegisterPage = () => {
  const router = useRouter();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

 
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

   
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

  

    const {
      userId,
      name,
      phone,
      password,
      confirmPassword,
    } = formData;

    if (!userId || !name || !phone || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      await register(userId, name, phone, password);

       toast.success("Register successful!");
    } catch (error) {
     handleError(error , router)
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterForm
      formData={formData}
     
      loading={loading}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default RegisterPage;