import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

export const handleUpdateCustomer = async (
  formData: FormData,
  setOpen: Dispatch<SetStateAction<boolean>>,
  id: string
) => {
  const customerName = formData.get("customerName") as string;
  const mobileNumber = (formData.get("mobileNumber") as string)
    .split("+91")
    .pop() as string;

  if (customerName.trim().length < 3)
    return {
      name: "customerName",
      error: "Customer name must be atlease of 2 letter",
      status: false,
    };

  const normalizedMobileNumber = mobileNumber.replace(/\D/g, "").slice(-10);

  if (normalizedMobileNumber.trim().length !== 10)
    return {
      name: "mobileNumber",
      error: "invalid Mobile number",
      status: false,
    };

  const data = {
    customerName,
    mobileNumber,
  };

  try {
    const URL = `/api/customers/${id}`;

    const response = await fetch(URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      toast.error(`Error: ${response.statusText}`);
      return undefined;
    }
  } catch (error) {
    toast.error("Internal Server Error!");
    return undefined;
  }

  toast.success("Customer updated successfully!");
  setOpen(false);
};
