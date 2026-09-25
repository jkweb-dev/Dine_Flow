"use client";

import { useEffect, useState } from "react";

import api from "@/src/lib/axios";
import handleError from "@/src/utils/handleError";

import Header from "@/Components/Account/header";
import CustomerStats from "@/Components/admin_Customers/customer_Stats";
import CustomerFilters from "@/Components/admin_Customers/customersFilter";
import CustomerTable from "@/Components/admin_Customers/customer_Table";
import CustomerCard from "@/Components/admin_Customers/customer_Card";
import CustomerDetails from "@/Components/admin_Customers/customer_Details";
import EmptyCustomers from "@/Components/admin_Customers/empty_Customers";

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const [statistics, setStatistics] = useState(null);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  const [loading, setLoading] = useState(true);

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customerDetails, setCustomerDetails] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);



  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true);

        const response = await api.get("/admin/customers", {
          params: {
            search,
            sort,
          },
        });

        setCustomers(response.data.customers || []);
        setStatistics(response.data.statistics || null);
      } catch (error) {
        handleError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, [search, sort]);

  // ---------------------------------------
  // Open customer details
  // ---------------------------------------

  const handleSelectCustomer = async (customer) => {
    setSelectedCustomer(customer);
    setCustomerDetails(null);
    setDetailsLoading(true);

    try {
      const response = await api.get(
        `/admin/customers/${customer._id}`
      );

      setCustomerDetails(response.data);
    } catch (error) {
      handleError(error);
    } finally {
      setDetailsLoading(false);
    }
  };

  // ---------------------------------------
  // Close customer details
  // ---------------------------------------

  const handleCloseDetails = () => {
    setSelectedCustomer(null);
    setCustomerDetails(null);
    setDetailsLoading(false);
  };

  // ---------------------------------------
  // Loading skeleton
  // ---------------------------------------

  if (loading) {
    return (
      <main className="min-h-screen bg-[#fffaf6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="animate-pulse space-y-6">
            {/* Header */}
            <div className="rounded-[2rem] border border-orange-100 bg-white p-7 shadow-[0_18px_55px_rgba(88,47,27,0.06)]">
              <div className="flex gap-4">
                <div className="h-14 w-14 rounded-2xl bg-orange-100" />

                <div className="flex-1">
                  <div className="h-3 w-24 rounded bg-orange-100" />

                  <div className="mt-3 h-8 w-48 rounded bg-orange-100" />

                  <div className="mt-3 h-4 max-w-xl rounded bg-orange-50" />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-36 rounded-2xl border border-orange-100 bg-white"
                />
              ))}
            </div>

            {/* Filters */}
            <div className="h-32 rounded-[2rem] border border-orange-100 bg-white" />

            {/* Customer list */}
            <div className="hidden h-96 rounded-[2rem] border border-orange-100 bg-white lg:block" />

            <div className="space-y-3 lg:hidden">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-36 rounded-[1.5rem] border border-orange-100 bg-white"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffaf6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-6">
          {/* Header */}
          <Header customerCount={statistics?.totalCustomers || 0} />

          {/* Statistics */}
          <CustomerStats statistics={statistics} />

          {/* Search and sorting */}
          <CustomerFilters
            search={search}
            setSearch={setSearch}
            sort={sort}
            setSort={setSort}
          />

          {/* Customer list */}
          {customers.length === 0 ? (
            <EmptyCustomers hasSearch={Boolean(search.trim())} />
          ) : (
            <>
              {/* Desktop */}
              <CustomerTable
                customers={customers}
                onSelectCustomer={handleSelectCustomer}
              />

              {/* Mobile / tablet */}
              <div className="space-y-3 lg:hidden">
                {customers.map((customer) => (
                  <CustomerCard
                    key={customer._id}
                    customer={customer}
                    onSelectCustomer={handleSelectCustomer}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Customer details drawer */}
      {selectedCustomer && (
        <CustomerDetails
          customer={selectedCustomer}
          details={customerDetails}
          loading={detailsLoading}
          onClose={handleCloseDetails}
        />
      )}
    </main>
  );
};

export default CustomersPage;