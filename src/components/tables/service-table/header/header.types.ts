import { TableDataType } from "@/components/ui/table";
import { Dispatch, SetStateAction } from "react";

export interface ServiceTableHeaderProps {
  fetchServices: () => Promise<TableDataType | undefined>
  setSearch: Dispatch<SetStateAction<string>>
}