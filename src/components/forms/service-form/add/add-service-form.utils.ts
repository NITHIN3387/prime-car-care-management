import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

export const handleAddService = async (
  formData: FormData,
  setOpen: Dispatch<SetStateAction<boolean>>
) => {
  const serviceName = formData.get("serviceName") as string;
  const cost = parseFloat(formData.get("cost") as string);

  if (serviceName.trim().length < 3)
    return {
      name: "serviceName",
      error: "Service name must be atlease of 2 letter",
      status: false,
    };

  if (cost < 0 || !cost)
    return {
      name: "cost",
      error: "Invalid cost",
      status: false,
    };

  const data = {
    serviceName,
    cost,
  };

  try {
    const URL = "/api/services";

    const response = await fetch(URL, {
      method: "POST",
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

  toast.success("Service added successfully!");
  setOpen(false)
};
