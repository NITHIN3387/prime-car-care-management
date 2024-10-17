import { CustomerDefaultValuesType } from "@/components/forms/customer-form/update";
import { TableDataType } from "@/components/ui/table";
import { Dispatch, SetStateAction } from "react";

export type GetCustomerType = (
  setTableData: Dispatch<SetStateAction<TableDataType | undefined>>,
  setOpenupdateForm: Dispatch<SetStateAction<boolean>>,
  setDefaultValues: Dispatch<SetStateAction<CustomerDefaultValuesType>>
) => Promise<void>