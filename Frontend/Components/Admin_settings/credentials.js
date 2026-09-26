"use client";

import { useState } from "react";

import {
  LockKeyhole,
  UserRound,
  Eye,
  EyeOff,
  KeyRound,
  ShieldCheck,
  Save,
} from "lucide-react";

const CredentialsCard = ({
  currentPassword,
  setCurrentPassword,
  newUserId,
  setNewUserId,
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
  onSubmit,
  loading,
}) => {
  const [showCurrentPassword, setShowCurrentPassword] =
    useState(false);

  const [showNewPassword, setShowNewPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  return (
    <section className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-[0_16px_45px_rgba(88,47,27,0.06)]">
      {/* Card Header */}
      <div className="border-b border-orange-100 bg-[#fffaf6] px-5 py-5 sm:px-7">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#f97316]">
            <LockKeyhole
              size={21}
              strokeWidth={2.2}
            />
          </div>

          <div>
            <h2 className="text-base font-black text-[#3d2922]">
              Account Credentials
            </h2>

            <p className="mt-1 text-xs font-medium leading-5 text-[#9b867b]">
              Update your admin user ID or password securely.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={onSubmit}
        className="p-5 sm:p-7"
      >
        <div className="space-y-5">
          {/* Current Password */}
          <div>
            <label
              htmlFor="currentPassword"
              className="mb-2 flex items-center gap-2 text-sm font-extrabold text-[#5f493f]"
            >
              <LockKeyhole
                size={15}
                className="text-[#f97316]"
              />
              Current Password
            </label>

            <div className="relative">
              <input
                id="currentPassword"
                type={showCurrentPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(event) =>
                  setCurrentPassword(event.target.value)
                }
                placeholder="Enter your current password"
                autoComplete="current-password"
                className="h-12 w-full rounded-xl border border-orange-100 bg-[#fffaf6] px-4 pr-12 text-sm font-semibold text-[#3d2922] outline-none transition placeholder:text-[#b6a69e] focus:border-[#f97316] focus:bg-white focus:ring-4 focus:ring-orange-100"
              />

              <button
                type="button"
                onClick={() =>
                  setShowCurrentPassword(
                    (current) => !current
                  )
                }
                aria-label={
                  showCurrentPassword
                    ? "Hide current password"
                    : "Show current password"
                }
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-[#9b867b] transition hover:bg-orange-50 hover:text-[#c92a2a]"
              >
                {showCurrentPassword ? (
                  <EyeOff size={17} />
                ) : (
                  <Eye size={17} />
                )}
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-orange-100 pt-1" />

          {/* New User ID */}
          <div>
            <label
              htmlFor="newUserId"
              className="mb-2 flex items-center gap-2 text-sm font-extrabold text-[#5f493f]"
            >
              <UserRound
                size={15}
                className="text-[#f97316]"
              />
              New User ID
              <span className="text-[11px] font-bold text-[#b6a69e]">
                Optional
              </span>
            </label>

            <input
              id="newUserId"
              type="text"
              value={newUserId}
              onChange={(event) =>
                setNewUserId(event.target.value)
              }
              placeholder="Enter a new user ID"
              autoComplete="username"
              className="h-12 w-full rounded-xl border border-orange-100 bg-[#fffaf6] px-4 text-sm font-semibold text-[#3d2922] outline-none transition placeholder:text-[#b6a69e] focus:border-[#f97316] focus:bg-white focus:ring-4 focus:ring-orange-100"
            />

            <p className="mt-2 text-[11px] font-medium text-[#9b867b]">
              Leave empty if you only want to change your password.
            </p>
          </div>

          {/* New Password */}
          <div>
            <label
              htmlFor="newPassword"
              className="mb-2 flex items-center gap-2 text-sm font-extrabold text-[#5f493f]"
            >
              <KeyRound
                size={15}
                className="text-[#f97316]"
              />
              New Password
              <span className="text-[11px] font-bold text-[#b6a69e]">
                Optional
              </span>
            </label>

            <div className="relative">
              <input
                id="newPassword"
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(event) =>
                  setNewPassword(event.target.value)
                }
                placeholder="Enter a new password"
                autoComplete="new-password"
                className="h-12 w-full rounded-xl border border-orange-100 bg-[#fffaf6] px-4 pr-12 text-sm font-semibold text-[#3d2922] outline-none transition placeholder:text-[#b6a69e] focus:border-[#f97316] focus:bg-white focus:ring-4 focus:ring-orange-100"
              />

              <button
                type="button"
                onClick={() =>
                  setShowNewPassword(
                    (current) => !current
                  )
                }
                aria-label={
                  showNewPassword
                    ? "Hide new password"
                    : "Show new password"
                }
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-[#9b867b] transition hover:bg-orange-50 hover:text-[#c92a2a]"
              >
                {showNewPassword ? (
                  <EyeOff size={17} />
                ) : (
                  <Eye size={17} />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 flex items-center gap-2 text-sm font-extrabold text-[#5f493f]"
            >
              <ShieldCheck
                size={15}
                className="text-[#f97316]"
              />
              Confirm New Password
            </label>

            <div className="relative">
              <input
                id="confirmPassword"
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                value={confirmPassword}
                onChange={(event) =>
                  setConfirmPassword(
                    event.target.value
                  )
                }
                placeholder="Enter the new password again"
                autoComplete="new-password"
                className="h-12 w-full rounded-xl border border-orange-100 bg-[#fffaf6] px-4 pr-12 text-sm font-semibold text-[#3d2922] outline-none transition placeholder:text-[#b6a69e] focus:border-[#f97316] focus:bg-white focus:ring-4 focus:ring-orange-100"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    (current) => !current
                  )
                }
                aria-label={
                  showConfirmPassword
                    ? "Hide password confirmation"
                    : "Show password confirmation"
                }
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-[#9b867b] transition hover:bg-orange-50 hover:text-[#c92a2a]"
              >
                {showConfirmPassword ? (
                  <EyeOff size={17} />
                ) : (
                  <Eye size={17} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-orange-100 bg-[#fffaf6] p-3.5">
          <ShieldCheck
            size={17}
            className="mt-0.5 shrink-0 text-[#f97316]"
          />

          <p className="text-xs font-medium leading-5 text-[#8c7468]">
            Your current password is required before any credential
            changes can be made.
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#c92a2a] text-sm font-extrabold text-white shadow-lg shadow-red-100 transition hover:bg-[#b82424] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Updating Credentials...
            </>
          ) : (
            <>
              <Save size={17} />
              Update Credentials
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default CredentialsCard;