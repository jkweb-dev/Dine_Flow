"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import api from "@/src/lib/axios";
import handleError from "@/src/utils/handleError";
import DeliveryList from "@/Components/DeliveryBoys/deliveryList";

const DeliveryPage = () => {
  const router = useRouter();

  const [deliveryBoys, setDeliveryBoys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedDeliveryBoy, setSelectedDeliveryBoy] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const fetchDeliveryBoys = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await api.get("/admin/delivery-boys");

      setDeliveryBoys(response.data.deliveryBoys || []);
    } catch (error) {
      setError(true);

      handleError(error, router, {
        redirectOn401: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDeliveryBoys();
  }, []);

  const handleCreateDeliveryBoy = () => {
    router.push("/admin/delivery/create");
  };

  const handleDeleteClick = (deliveryBoy) => {
    setSelectedDeliveryBoy(deliveryBoy);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    if (deleting) return;

    setDeleteDialogOpen(false);
    setSelectedDeliveryBoy(null);
  };

  const handleDeleteDeliveryBoy = async () => {
    if (!selectedDeliveryBoy?._id) {
      toast.error("Unable to identify the delivery boy.");
      return;
    }

    try {
      setDeleting(true);

      const response = await api.delete(
        `/admin/delivery-boys/${selectedDeliveryBoy._id}`
      );

      setDeliveryBoys((previousDeliveryBoys) =>
        previousDeliveryBoys.filter(
          (deliveryBoy) =>
            deliveryBoy._id !== selectedDeliveryBoy._id
        )
      );

      toast.success(
        response.data?.message ||
          "Delivery boy deleted successfully."
      );

      setDeleteDialogOpen(false);
      setSelectedDeliveryBoy(null);
    } catch (error) {
      handleError(error, router, {
        redirectOn401: true,
      });
    } finally {
      setDeleting(false);
    }
  };

  const handleRetry = () => {
    fetchDeliveryBoys();
  };

  return (
    <DeliveryList
      deliveryBoys={deliveryBoys}
      loading={loading}
      error={error}
      onCreateDeliveryBoy={handleCreateDeliveryBoy}
      onDeleteDeliveryBoy={handleDeleteClick}
      deleteDialogOpen={deleteDialogOpen}
      selectedDeliveryBoy={selectedDeliveryBoy}
      deleting={deleting}
      onConfirmDelete={handleDeleteDeliveryBoy}
      onCloseDeleteDialog={handleCloseDeleteDialog}
      onRetry={handleRetry}
    />
  );
};

export default DeliveryPage;