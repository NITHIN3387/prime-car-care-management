import { toast } from "sonner";

export const handleLogin = async (formData: FormData) => {
  const mobileNumber = (formData.get("mobileNumber") as string)
    .split("+91")
    .pop() as string;
  const password = formData.get("password") as string;

  const normalizedMobileNumber = mobileNumber.replace(/\D/g, "").slice(-10);

  if (normalizedMobileNumber.trim().length !== 10 || password.trim().length < 8)
    return {
      name: "password",
      error: "invalid Mobile number or Password",
      status: false,
    };

  const data = {
    mobileNumber: normalizedMobileNumber.trim(),
    password,
  };

  try {
    const URL = "/api/auth/login";

    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      if (response.status === 401)
        return {
          name: "password",
          error: "invalid Mobile number or Password",
          status: false,
        };
      else {
        toast.error(`Error: ${response.statusText}`);
        return undefined;
      }
    }
  } catch (error) {
    toast.error("Internal Server Error!");
    return undefined;
  }

  toast.success("Login successfull!");
  return { status: true }
};
