"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RefreshCw } from "lucide-react";
import toast from "react-hot-toast";

import api from "@/src/lib/axios";
import handleError from "@/src/utils/handleError";

import Header from "@/Components/Admin_Home/header";
import OverviewCards from "@/Components/Admin_Home/overviewCards";
import OrderActivity from "@/Components/Admin_Home/orderActivity";
import OrderStatus from "@/Components/Admin_Home/orderStatus";
import RecentOrders from "@/Components/Admin_Home/recentOrders";
import DeliveryOverview from "@/Components/Admin_Home/DeliveryOverview";
import TopProducts from "@/Components/Admin_Home/TopProducts";
import CustomerOverview from "@/Components/Admin_Home/customerOverview";
import AttentionPanel from "@/Components/Admin_Home/AttentionPanel";
import QuickActions from "@/Components/Admin_Home/QuickActions";
import LoadingSkeleton from "@/Components/Admin_Home/LoadingSkelton";

const AdminDashboardPage = () => {
  const router = useRouter();

  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchDashboard = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const response = await api.get("/admin/dashboard");

      if (response.data?.success) {
        setDashboard(response.data);
      } else {
        toast.error(
          response.data?.message ||
            "Failed to load dashboard."
        );
      }
    } catch (error) {
      handleError(error, router, {
        redirectOn401: true,
      });
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (!dashboard) {
    return (
      <main className="min-h-screen bg-[#fffaf6] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center">
          <div className="w-full max-w-md rounded-[2rem] border border-orange-100 bg-white p-8 text-center shadow-[0_14px_40px_rgba(88,47,27,0.06)]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-[#c92a2a]">
              !
            </div>

            <h2 className="mt-5 text-xl font-black text-[#3d2922]">
              Dashboard unavailable
            </h2>

            <p className="mt-2 text-sm font-medium leading-6 text-[#9b867b]">
              We couldn't load your dashboard data.
              Please try again.
            </p>

            <button
              type="button"
              onClick={() => fetchDashboard()}
              className="mt-6 rounded-xl bg-[#c92a2a] px-5 py-3 text-sm font-black text-white transition hover:bg-[#a92121]"
            >
              Try Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  const {
    overview,
    orderStats,
    orderActivity,
    recentOrders,
    deliveryOverview,
    topProducts,
    customerStats,
    alerts,
  } = dashboard;

  return (
    <main className="min-h-screen bg-[#fffaf6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">

        {/* Header */}
        <div className="relative">
          <Header />

          <button
            type="button"
            onClick={() => fetchDashboard(true)}
            disabled={refreshing}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-orange-100 bg-white/90 text-[#8c7468] shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-[#c92a2a] disabled:cursor-not-allowed disabled:opacity-60 sm:right-6 sm:top-6"
            title="Refresh dashboard"
          >
            <RefreshCw
              size={17}
              className={
                refreshing
                  ? "animate-spin"
                  : ""
              }
            />
          </button>
        </div>

        {/* Overview */}
        <OverviewCards overview={overview} />

        {/* Activity + Order Status */}
        <section className="grid gap-6 xl:grid-cols-[1.65fr_1fr]">
          <OrderActivity data={orderActivity} />

          <OrderStatus stats={orderStats} />
        </section>

        {/* Recent Orders + Delivery */}
        <section className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
          <RecentOrders orders={recentOrders} />

          <DeliveryOverview
            deliveryOverview={deliveryOverview}
          />
        </section>

        {/* Products + Customers */}
        <section className="grid gap-6 xl:grid-cols-2">
          <TopProducts products={topProducts} />

          <CustomerOverview stats={customerStats} />
        </section>

        {/* Attention + Quick Actions */}
        <section className="grid gap-6 xl:grid-cols-2">
          <AttentionPanel alerts={alerts} />

          <QuickActions />
        </section>

      </div>
    </main>
  );
};

export default AdminDashboardPage;