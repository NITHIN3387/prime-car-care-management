import { DefaultValuesType } from "@/components/forms/service-form/update";
import { TableDataType } from "@/components/ui/table";
import { Dispatch, SetStateAction } from "react";

export type GetServicesType = (
  setTableData: Dispatch<SetStateAction<TableDataType | undefined>>,
  setOpenupdateForm: Dispatch<SetStateAction<boolean>>,
  setDefaultValues: Dispatch<SetStateAction<DefaultValuesType>>
) => Promise<TableDataType | undefined>;
