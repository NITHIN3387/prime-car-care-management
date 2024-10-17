import { Form } from "@/components/ui/form";
import { addCustomerFormFiels } from "./add-customer-form.strings";
import { handleAddCustomer } from "./add-customer-form.utils";
import { Dispatch, SetStateAction } from "react";

export const AddCustomerForm = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Form
      formFields={addCustomerFormFiels}
      onSubmit={(formData) => handleAddCustomer(formData, setOpen)}
      submitBtnLabel="Add Customer"
    />
  );
};
