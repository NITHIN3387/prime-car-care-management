import { Form } from "@/components/ui/form";
import { addSerivceFormFiels } from "./add-service-form.strings";
import { handleAddService } from "./add-service-form.utils";
import { Dispatch, SetStateAction } from "react";

export const AddServiceForm = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Form
      formFields={addSerivceFormFiels}
      onSubmit={(formData) => handleAddService(formData, setOpen)}
      submitBtnLabel="Add Service"
    />
  );
};
