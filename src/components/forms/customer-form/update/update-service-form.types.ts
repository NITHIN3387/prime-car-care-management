import { Dispatch, SetStateAction } from "react";

export interface CustomerDefaultValuesType {
  id: string;
  customerName: string;
  mobileNumber: string;
}

export interface UpdateServiceFormProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  defaultValues: CustomerDefaultValuesType;
}
