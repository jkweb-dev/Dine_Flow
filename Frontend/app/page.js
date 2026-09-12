
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/src/context/authProvider";
import api from "@/src/lib/axios";
import handleError from "@/src/utils/handleError";

import HomeNavbar from "@/Components/Home/Navbar";
import HeroSection from "@/Components/Home/HeroSection";
import CategorySection from "@/Components/Home/categorySection";
import BestSellers from "@/Components/Home/BestSeller";
import FeaturedDeals from "@/Components/Home/featuredDeal";
import MoreMenu from "@/Components/Home/MoreMenu";
import HowItWorks from "@/Components/Home/HowitWorks";
import HomeCTA from "@/Components/Home/HomeCTA";
import HomeFooter from "@/Components/Home/footer";
import toast from "react-hot-toast";

const HomePage = () => {
  const router = useRouter();

  const { user, logout } = useAuth();

  const [products, setProducts] = useState([]);
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHomeData = async () => {
    try {
      setLoading(true);

      const [productsResponse, dealsResponse] = await Promise.all([
        api.get("/home/products"),
        api.get("/home/deals"),
      ]);

      setProducts(productsResponse.data.products || []);
      setDeals(dealsResponse.data.deals || []);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  const handleCategoryClick = (category) => {
    router.push(`/menu?category=${encodeURIComponent(category)}`);
  };

  const handleViewMenu = () => {
    router.push("/menu");
  };

  const handleViewDeals = () => {
    router.push("/deals");
  };

  const handleStartOrder = () => {
    router.push("/menu");
  };

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleLogoutClick = async () => {
    try {
      await logout();
      toast.success("Logout Successful")
      router.push("/");
    } catch (error) {
      handleError(error);
    }
  };

  const bestSellerProducts = products.slice(0, 4);

  const moreMenuProducts = products.slice(4, 8);

  return (
    <div className="min-h-screen bg-[#fffaf5] text-[#2b211d]">
      <HomeNavbar
        user={user}
        onLoginClick={handleLoginClick}
        onLogoutClick={handleLogoutClick}
      />

      <main>
        <HeroSection
          onOrderNow={handleStartOrder}
          onExploreDeals={handleViewDeals}
        />

        <CategorySection
          onCategoryClick={handleCategoryClick}
          onViewMenu={handleViewMenu}
        />

        <BestSellers
          products={bestSellerProducts}
          onViewAll={handleViewMenu}
        />

        <FeaturedDeals
          deals={deals}
          onViewAll={handleViewDeals}
        />

        <MoreMenu
          products={moreMenuProducts}
          onViewAll={handleViewMenu}
        />

        <HowItWorks
          onStartOrder={handleStartOrder}
        />

        <HomeCTA
          onStartOrder={handleStartOrder}
        />
      </main>

      <HomeFooter />
    </div>
  );
};

export default HomePage;

