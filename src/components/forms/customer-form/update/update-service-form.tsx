import { Form } from "@/components/ui/form";
import { updateCustomerFormFiedls } from "./update-service-form.strings";
import { handleUpdateCustomer } from "./update-service-form.utils";
import { UpdateServiceFormProps } from "./update-service-form.types";

export const UpdateCustomerForm = ({
  setOpen,
  defaultValues,
}: UpdateServiceFormProps) => {
  return (
    <Form
      formFields={updateCustomerFormFiedls(defaultValues)}
      onSubmit={(formData) => handleUpdateCustomer(formData, setOpen, defaultValues.id)}
      submitBtnLabel="Update Details"
    />
  );
};
