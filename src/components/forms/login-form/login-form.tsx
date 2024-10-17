"use client";

import { Form } from "@/components/ui/form";
import { LoginFormFields } from "./login-form.strings";
import { handleLogin } from "./login-form.utils";

export const LoginForm = () => (
  <Form
    formFields={LoginFormFields}
    onSubmit={handleLogin}
    submitBtnLabel="Login"
    redirect="/dashboard"
  />
);
