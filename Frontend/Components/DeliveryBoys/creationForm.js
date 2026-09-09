"use client";

import {
  Bike,
  Eye,
  EyeOff,
  LockKeyhole,
  Phone,
  User,
  UserRoundPlus,
} from "lucide-react";
import { useState } from "react";

const CreateDeliveryBoy = ({
  formData,
  onChange,
  onSubmit,
  loading,
  onCancel,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-full bg-[#fffaf6] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0eb] text-[#c92a2a]">
              <Bike size={21} strokeWidth={2.2} />
            </div>

            <span className="text-sm font-semibold text-[#c92a2a]">
              Delivery Management
            </span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-[#241b16] sm:text-3xl">
            Add Delivery Boy
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-[#806f66] sm:text-base">
            Create a secure delivery boy account to manage restaurant orders
            and deliveries.
          </p>
        </div>

        {/* Form Card */}
        <div className="overflow-hidden rounded-2xl border border-[#eadfd7] bg-white shadow-[0_8px_30px_rgba(70,40,20,0.06)]">
          {/* Card Header */}
          <div className="border-b border-[#f0e6df] bg-gradient-to-r from-[#fff8f4] to-white px-5 py-5 sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c92a2a] text-white shadow-sm">
                <UserRoundPlus size={21} />
              </div>

              <div>
                <h2 className="font-semibold text-[#241b16]">
                  Delivery Boy Details
                </h2>
                <p className="mt-0.5 text-xs text-[#8d7c73] sm:text-sm">
                  Enter the account information below
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="p-5 sm:p-7">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* User ID */}
              <div>
                <label
                  htmlFor="userId"
                  className="mb-2 block text-sm font-semibold text-[#382b24]"
                >
                  User ID
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a5948b]"
                  />

                  <input
                    id="userId"
                    name="userId"
                    type="text"
                    value={formData.userId}
                    onChange={onChange}
                    placeholder="e.g. DB001"
                    autoComplete="username"
                    required
                    className="h-12 w-full rounded-xl border border-[#e3d7cf] bg-[#fffdfb] pl-11 pr-4 text-sm text-[#241b16] outline-none transition placeholder:text-[#b4a49c] focus:border-[#c92a2a] focus:bg-white focus:ring-4 focus:ring-[#c92a2a]/10"
                  />
                </div>

                <p className="mt-1.5 text-xs text-[#98877e]">
                  A unique ID for the delivery boy.
                </p>
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#382b24]"
                >
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a5948b]"
                  />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={onChange}
                    placeholder="e.g. Muhammad Ali"
                    autoComplete="name"
                    required
                    className="h-12 w-full rounded-xl border border-[#e3d7cf] bg-[#fffdfb] pl-11 pr-4 text-sm text-[#241b16] outline-none transition placeholder:text-[#b4a49c] focus:border-[#c92a2a] focus:bg-white focus:ring-4 focus:ring-[#c92a2a]/10"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-[#382b24]"
                >
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a5948b]"
                  />

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={onChange}
                    placeholder="e.g. 03001234567"
                    autoComplete="tel"
                    required
                    className="h-12 w-full rounded-xl border border-[#e3d7cf] bg-[#fffdfb] pl-11 pr-4 text-sm text-[#241b16] outline-none transition placeholder:text-[#b4a49c] focus:border-[#c92a2a] focus:bg-white focus:ring-4 focus:ring-[#c92a2a]/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-[#382b24]"
                >
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a5948b]"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={onChange}
                    placeholder="Minimum 6 characters"
                    autoComplete="new-password"
                    required
                    minLength={6}
                    className="h-12 w-full rounded-xl border border-[#e3d7cf] bg-[#fffdfb] pl-11 pr-12 text-sm text-[#241b16] outline-none transition placeholder:text-[#b4a49c] focus:border-[#c92a2a] focus:bg-white focus:ring-4 focus:ring-[#c92a2a]/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((previous) => !previous)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-[#9a8980] transition hover:bg-[#fff0eb] hover:text-[#c92a2a]"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                <p className="mt-1.5 text-xs text-[#98877e]">
                  Password must contain at least 6 characters.
                </p>
              </div>
            </div>

            {/* Security Note */}
            <div className="mt-6 rounded-xl border border-[#f2ddd5] bg-[#fff8f5] p-4">
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#c92a2a] shadow-sm">
                  <LockKeyhole size={16} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#49372f]">
                    Account Security
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#8b756b] sm:text-sm">
                    This account will be created with delivery-boy
                    permissions. Login credentials should only be shared with
                    the assigned delivery boy.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onCancel}
                disabled={loading}
                className="h-12 rounded-xl border border-[#ded2ca] bg-white px-6 text-sm font-semibold text-[#594940] transition hover:bg-[#fff8f4] disabled:cursor-not-allowed disabled:opacity-60"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="h-12 rounded-xl bg-[#c92a2a] px-7 text-sm font-semibold text-white shadow-sm transition hover:bg-[#b92323] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Creating...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <UserRoundPlus size={17} />
                    Create Delivery Boy
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateDeliveryBoy;