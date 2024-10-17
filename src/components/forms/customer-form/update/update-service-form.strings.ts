import { FormFields } from "@/components/ui/form";
import { CustomerDefaultValuesType } from "./update-service-form.types";

export const updateCustomerFormFiedls = ({
  customerName,
  mobileNumber,
}: CustomerDefaultValuesType): FormFields[] => [
  {
    label: {
      children: "Customer Name",
    },
    input: {
      className: "py-3",
      defaultValue: customerName,
      id: "customerName",
      name: "customerName",
      placeholder: "John Doe",
      type: "text",
    },
  },
  {
    label: {
      children: "mobileNumber",
    },
    input: {
      className: "py-3",
      defaultValue: mobileNumber,
      id: "mobileNumber",
      name: "mobileNumber",
      placeholder: "+91 9876543210",
      type: "tel",
    },
  },
];
