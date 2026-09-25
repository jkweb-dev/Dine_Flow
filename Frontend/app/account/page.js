"use client";

import { useEffect, useState } from "react";

import { useAuth } from "@/src/context/authProvider";
import api from "@/src/lib/axios";
import handleError from "@/src/utils/handleError";

import Header from "@/Components/Account/header";
import ProfileCard from "@/Components/Account/profileCard";
import AccountStats from "@/Components/Account/accountStats";
import QuickActions from "@/Components/Account/quickActions";
import RecentOrders from "@/Components/Account/recentOrders";
import SecurityInfo from "@/Components/Account/securityInfo";
import LoginRequired from "@/Components/Account/loginRequired";

const AccountPage = () => {
  const { user, loading: authLoading } = useAuth();

  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      setLoading(false);
      return;
    }

    const fetchAccount = async () => {
      try {
        setLoading(true);

       

        const response = await api.get("/account");

        setAccount(response.data);
      } catch (error) {
        
        handleError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccount();
  }, [user, authLoading]);

  // AuthProvider is still checking the login session.
  if (authLoading) {
    return (
      <main className="min-h-screen bg-[#fffaf6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="animate-pulse space-y-6">
            <div className="rounded-[2rem] border border-orange-100 bg-white p-7 shadow-[0_18px_55px_rgba(88,47,27,0.06)]">
              <div className="flex gap-4">
                <div className="h-14 w-14 rounded-2xl bg-orange-100" />

                <div className="flex-1">
                  <div className="h-3 w-20 rounded bg-orange-100" />

                  <div className="mt-3 h-8 w-44 rounded bg-orange-100" />

                  <div className="mt-3 h-4 max-w-md rounded bg-orange-50" />
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-orange-100 bg-white p-7">
              <div className="flex gap-4">
                <div className="h-20 w-20 rounded-full bg-orange-100" />

                <div className="flex-1">
                  <div className="h-5 w-40 rounded bg-orange-100" />
                  <div className="mt-3 h-4 w-28 rounded bg-orange-50" />
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="h-20 rounded-2xl bg-orange-50" />
                <div className="h-20 rounded-2xl bg-orange-50" />
                <div className="h-20 rounded-2xl bg-orange-50 sm:col-span-2" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-32 rounded-2xl bg-white"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  // User is not logged in.
  if (!user) {
    return <LoginRequired />;
  }

  // Logged in, but account API is still loading.
  if (loading ) {
    return (
      <main className="min-h-screen bg-[#fffaf6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="animate-pulse space-y-6">
            <div className="rounded-[2rem] border border-orange-100 bg-white p-7">
              <div className="h-8 w-44 rounded bg-orange-100" />
              <div className="mt-3 h-4 max-w-md rounded bg-orange-50" />
            </div>

            <div className="rounded-[2rem] border border-orange-100 bg-white p-7">
              <div className="flex gap-4">
                <div className="h-20 w-20 rounded-full bg-orange-100" />

                <div className="flex-1">
                  <div className="h-5 w-40 rounded bg-orange-100" />
                  <div className="mt-3 h-4 w-28 rounded bg-orange-50" />
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="h-20 rounded-2xl bg-orange-50" />
                <div className="h-20 rounded-2xl bg-orange-50" />
                <div className="h-20 rounded-2xl bg-orange-50 sm:col-span-2" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-32 rounded-2xl bg-white"
                />
              ))}
            </div>

            <div className="h-48 rounded-[2rem] bg-white" />
          </div>
        </div>
      </main>
    );
  }

  if(!account){
    return;
  }

  return (
    <main className="min-h-screen bg-[#fffaf6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Page header */}
        <Header />

        <div className="mt-6 space-y-6">
          {/* Profile */}
          <ProfileCard user={account.user} />

          {/* Statistics */}
          <AccountStats statistics={account.statistics} />

          {/* Quick navigation */}
          <QuickActions />

          {/* Recent orders */}
          <RecentOrders orders={account.recentOrders} />

          {/* Security */}
          <SecurityInfo />
        </div>
      </div>
    </main>
  );
};

export default AccountPage;