"use client";

import { ArrowRight, LogIn, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";

const LoginRequired = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login?redirect=/account");
  };

  const handleRegister = () => {
    router.push("/register?redirect=/account");
  };

  return (
    <main className="min-h-screen bg-[#fffaf6] px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto flex min-h-[70vh] max-w-xl items-center justify-center">
        <section className="relative w-full overflow-hidden rounded-[2rem] border border-orange-100 bg-white px-6 py-12 text-center shadow-[0_20px_65px_rgba(88,47,27,0.08)] sm:px-10">
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-orange-100/70 blur-2xl" />

          <div className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-red-100/60 blur-2xl" />

          <div className="relative">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-[#c92a2a]">
              <UserRound size={34} strokeWidth={2} />
            </div>

            <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.18em] text-[#f97316]">
              DineFlow Account
            </p>

            <h1 className="mt-2 text-2xl font-black tracking-tight text-[#3d2922] sm:text-3xl">
              Login to view your account
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm font-medium leading-6 text-[#8c7468]">
              Your account contains your profile, order activity, recent
              orders, and account information. Please login to continue.
            </p>

            <button
              type="button"
              onClick={handleLogin}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#c92a2a] px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-red-200 transition hover:bg-[#b52222] active:scale-[0.98]"
            >
              <LogIn size={18} />
              Login to my account
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              onClick={handleRegister}
              className="mt-3 w-full rounded-2xl border border-orange-200 bg-[#fffaf6] px-5 py-3.5 text-sm font-black text-[#c45b17] transition hover:bg-orange-50 active:scale-[0.98]"
            >
              Create a new account
            </button>

            <p className="mt-5 text-xs font-medium text-[#a58b7d]">
              Already have an account? Use the login button above.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginRequired;