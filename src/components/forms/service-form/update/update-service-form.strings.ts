import { FormFields } from "@/components/ui/form";
import { DefaultValuesType } from "./update-service-form.types";

export const updateSerivceFormFiedls = ({
  serviceName,
  cost,
}: DefaultValuesType): FormFields[] => [
  {
    label: {
      children: "Service Name",
    },
    input: {
      className: "py-3",
      defaultValue: serviceName,
      id: "serviceName",
      name: "serviceName",
      placeholder: "Prime Car Care Service",
      type: "text",
    },
  },
  {
    label: {
      children: "Cost",
    },
    input: {
      className: "py-3",
      defaultValue: cost,
      id: "cost",
      name: "cost",
      placeholder: "999.99",
      type: "number",
    },
  },
];
