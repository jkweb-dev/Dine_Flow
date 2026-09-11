"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import api from "@/src/lib/axios";
import handleError from "@/src/utils/handleError";
import DealList from "@/Components/dealList";

const DealsPage = () => {
  const router = useRouter();

  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [deleting, setDeleting] = useState(false);

  // Fetch all deals
  const fetchDeals = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await api.get("/admin/deals");

      setDeals(response.data.deals || []);
    } catch (error) {
      setError(true);

      handleError(error, router, {
        redirectOn401: true,
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch deals when page loads
  useEffect(() => {
    fetchDeals();
  }, []);

  // Navigate to create page
  const handleCreateDeal = () => {
    router.push("/admin/deals/create");
  };

  // Navigate to edit page
  const handleEditDeal = (dealId) => {
    router.push(`/admin/deals/edit/${dealId}`);
  };

  // Open delete confirmation dialog
  const handleDeleteClick = (deal) => {
    setSelectedDeal(deal);
    setDeleteDialogOpen(true);
  };

  // Close delete confirmation dialog
  const handleCloseDeleteDialog = () => {
    if (deleting) return;

    setDeleteDialogOpen(false);
    setSelectedDeal(null);
  };

  // Delete deal
  const handleDeleteDeal = async () => {
    if (!selectedDeal?._id) {
      toast.error("Unable to identify the deal.");
      return;
    }

    try {
      setDeleting(true);

      const response = await api.delete(
        `/admin/deals/${selectedDeal._id}`
      );

      // Remove deleted deal immediately from UI
      setDeals((previousDeals) =>
        previousDeals.filter(
          (deal) => deal._id !== selectedDeal._id
        )
      );

      toast.success(
        response.data?.message ||
          "Deal deleted successfully."
      );

      setDeleteDialogOpen(false);
      setSelectedDeal(null);
    } catch (error) {
      handleError(error, router, {
        redirectOn401: true,
      });
    } finally {
      setDeleting(false);
    }
  };

  // Toggle deal availability
  const handleToggleAvailability = async (dealId) => {
    try {
      const response = await api.patch(
        `/admin/deals/${dealId}/availability`
      );

      const updatedDeal = response.data.deal;

      // Replace the old deal with the updated deal
      setDeals((previousDeals) =>
        previousDeals.map((deal) =>
          deal._id === dealId ? updatedDeal : deal
        )
      );

      toast.success(
        response.data?.message ||
          "Deal availability updated."
      );
    } catch (error) {
      handleError(error, router, {
        redirectOn401: true,
      });
    }
  };

  // Retry after loading error
  const handleRetry = () => {
    fetchDeals();
  };

  return (
    <DealList
      deals={deals}
      loading={loading}
      error={error}
      onCreateDeal={handleCreateDeal}
      onEditDeal={handleEditDeal}
      onDeleteDeal={handleDeleteClick}
      onToggleAvailability={handleToggleAvailability}
      deleteDialogOpen={deleteDialogOpen}
      selectedDeal={selectedDeal}
      deleting={deleting}
      onConfirmDelete={handleDeleteDeal}
      onCloseDeleteDialog={handleCloseDeleteDialog}
      onRetry={handleRetry}
    />
  );
};

export default DealsPage;