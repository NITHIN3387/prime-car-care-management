"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ServiceTableHeaderProps } from "./header.types";
import { DialogBox } from "@/components/ui/dialog-box";
import { useEffect, useState } from "react";
import { AddServiceForm } from "@/components/forms/service-form/add";

export const ServiceTableHeader = ({ fetchServices, setSearch }: ServiceTableHeaderProps) => {
  const [openServiceForm, setOpenServiceForm] = useState<boolean>(false);

  useEffect(() => {
    if (!openServiceForm) fetchServices()
  }, [openServiceForm])

  return (
    <header className="p-4 bg-primary-bg rounded-lg mb-2 flex justify-between gap-4">
      <Input
        className="bg-secondary-bg w-2/3"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search service name here ..."
      />
      <Button
        className="md:inline hidden"
        onClick={() => setOpenServiceForm(true)}
      >
        + Add New Sevice
      </Button>
      <Button
        className="md:hidden inline"
        onClick={() => setOpenServiceForm(true)}
      >
        + Add
      </Button>
      <DialogBox
        className="xl:w-1/3 sm:w-1/2"
        open={openServiceForm}
        setOpen={setOpenServiceForm}
        title="Add service"
      >
        <AddServiceForm setOpen={setOpenServiceForm} />
      </DialogBox>
    </header>
  );
};
