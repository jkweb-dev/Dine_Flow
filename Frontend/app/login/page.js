"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

import { useAuth } from "@/src/context/authProvider";
import handleError from "@/src/utils/handleError";

import LoginForm from "@/Components/loginForm";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { login } = useAuth();

  const redirect = searchParams.get("redirect");

  const [formData, setFormData] = useState({
    userId: "",
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { userId, password } = formData;

    // Validation
    if (!userId || !password) {
      toast.error("Please enter your user ID and password.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      // Authentication
      await login(userId, password);

      toast.success("Login successful!");

      // Go back to the page user originally wanted
      router.push(redirect || "/");
    } catch (error) {
      handleError(error, router);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginForm
      formData={formData}
      loading={loading}
      onChange={handleChange}
      onSubmit={handleSubmit}
      redirect={redirect}
    />
  );
};

export default LoginPage;