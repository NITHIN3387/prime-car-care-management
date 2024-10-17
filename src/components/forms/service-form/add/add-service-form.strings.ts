import { FormFields } from "@/components/ui/form";

export const addSerivceFormFiels: FormFields[] = [
  {
    label: {
      children: "Service Name"
    },
    input: {
      className: "py-3",
      id: "serviceName",
      name: "serviceName",
      placeholder: "Prime Car Care Service",
      type: "text",
    }
  },
  {
    label: {
      children: "Cost"
    },
    input: {
      className: "py-3",
      id: "cost",
      name: "cost",
      placeholder: "999.99",
      type: "number",
    }
  },
]