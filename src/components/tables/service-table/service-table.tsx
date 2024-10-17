"use client";

import { Table, TableDataType } from "@/components/ui/table";
import { ServiceTableHeader } from "./header";
import { useEffect, useState } from "react";
import { getServices } from "./service-table.utils";
import {
  DefaultValuesType,
  UpdateServiceForm,
} from "@/components/forms/service-form/update";
import { DialogBox } from "@/components/ui/dialog-box";

export const ServiceTable = () => {
  const [tableData, setTableData] = useState<TableDataType>();
  const [search, setSearch] = useState<string>("");
  const [openUpdateForm, setOpenUpdateForm] = useState<boolean>(false);
  const [defaultValues, setDefaultValues] = useState<DefaultValuesType>({
    id: "",
    serviceName: "",
    cost: 0,
  });

  const fetchServices = () =>
    getServices(setTableData, setOpenUpdateForm, setDefaultValues);

  useEffect(() => {
    if (!openUpdateForm) fetchServices();
  }, [openUpdateForm]);

  return (
    <div>
      <ServiceTableHeader fetchServices={fetchServices} setSearch={setSearch} />
      <Table
        search={{ query: search, colNum: 0 }}
        tableData={tableData as TableDataType}
      />
      <DialogBox
        className="xl:w-1/3 sm:w-1/2"
        open={openUpdateForm}
        setOpen={setOpenUpdateForm}
        title="Update Service"
      >
        <UpdateServiceForm
          defaultValues={defaultValues}
          setOpen={setOpenUpdateForm}
        />
      </DialogBox>
    </div>
  );
};
