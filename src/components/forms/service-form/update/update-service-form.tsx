import { Form } from "@/components/ui/form";
import { updateSerivceFormFiedls } from "./update-service-form.strings";
import { handleUpdateService } from "./update-service-form.utils";
import { UpdateServiceFormProps } from "./update-service-form.types";

export const UpdateServiceForm = ({
  setOpen,
  defaultValues,
}: UpdateServiceFormProps) => {
  return (
    <Form
      formFields={updateSerivceFormFiedls(defaultValues)}
      onSubmit={(formData) => handleUpdateService(formData, setOpen, defaultValues.id)}
      submitBtnLabel="Update Details"
    />
  );
};
