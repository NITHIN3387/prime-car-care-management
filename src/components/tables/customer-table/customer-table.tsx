"use client";

import { Table, TableDataType } from "@/components/ui/table";
import { CustomerTableHeader } from "./header";
import { useEffect, useState } from "react";
import { getCustomers } from "./customer-table.utils";
import { DialogBox } from "@/components/ui/dialog-box";
import {
  CustomerDefaultValuesType,
  UpdateCustomerForm,
} from "@/components/forms/customer-form/update";

export const CustomerTable = () => {
  const [tableData, setTableData] = useState<TableDataType>();
  const [search, setSearch] = useState<string>("");
  const [openUpdateForm, setOpenUpdateForm] = useState<boolean>(false);
  const [defaultValues, setDefaultValues] = useState<CustomerDefaultValuesType>(
    {
      id: "",
      customerName: "",
      mobileNumber: "",
    }
  );

  const fethCustomers = () =>
    getCustomers(setTableData, setOpenUpdateForm, setDefaultValues);

  useEffect(() => {
    if (!openUpdateForm) fethCustomers()
  }, [openUpdateForm])

  return (
    <div>
      <CustomerTableHeader
        fetchCustomers={fethCustomers}
        setSearch={setSearch}
      />
      <Table
        search={{ query: search, colNum: 1 }}
        tableData={tableData as TableDataType}
      />
      <DialogBox
        className="xl:w-1/3 sm:w-1/2"
        open={openUpdateForm}
        setOpen={setOpenUpdateForm}
        title="Update Customer"
      >
        <UpdateCustomerForm
          defaultValues={defaultValues}
          setOpen={setOpenUpdateForm}
        />
      </DialogBox>
    </div>
  );
};
