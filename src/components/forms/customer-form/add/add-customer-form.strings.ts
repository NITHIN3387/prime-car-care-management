import { FormFields } from "@/components/ui/form";

export const addCustomerFormFiels: FormFields[] = [
  {
    label: {
      children: "Customer Name"
    },
    input: {
      className: "py-3",
      id: "customerName",
      name: "customerName",
      placeholder: "John Doe",
      type: "text",
    }
  },
  {
    label: {
      children: "Mobile Number"
    },
    input: {
      className: "py-3",
      id: "mobileNumber",
      name: "mobileNumber",
      placeholder: "+91 9876543210",
      type: "tel",
    }
  },
]