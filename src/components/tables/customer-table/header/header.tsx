"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CustomerTableHeaderProps } from "./header.types";
import { DialogBox } from "@/components/ui/dialog-box";
import { useEffect, useState } from "react";
import { AddCustomerForm } from "@/components/forms/customer-form/add";

export const CustomerTableHeader = ({ fetchCustomers, setSearch }: CustomerTableHeaderProps) => {
  const [openCustomerForm, setOpenCustomerForm] = useState<boolean>(false);

  useEffect(() => {
    if (!openCustomerForm) fetchCustomers()
  }, [openCustomerForm])

  return (
    <header className="p-4 bg-primary-bg rounded-lg mb-2 flex justify-between gap-4">
      <Input
        className="bg-secondary-bg w-2/3"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search customer name here ..."
      />
      <Button
        className="md:inline hidden"
        onClick={() => setOpenCustomerForm(true)}
      >
        + Add New Customer
      </Button>
      <Button
        className="md:hidden inline"
        onClick={() => setOpenCustomerForm(true)}
      >
        + Add
      </Button>
      <DialogBox
        className="xl:w-1/3 sm:w-1/2"
        open={openCustomerForm}
        setOpen={setOpenCustomerForm}
        title="Add customer"
      >
        <AddCustomerForm setOpen={setOpenCustomerForm} />
      </DialogBox>
    </header>
  );
};
