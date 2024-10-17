import { Dispatch, SetStateAction } from "react";

export interface DefaultValuesType {
  id: string;
  serviceName: string;
  cost: number;
}

export interface UpdateServiceFormProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  defaultValues: DefaultValuesType;
}
