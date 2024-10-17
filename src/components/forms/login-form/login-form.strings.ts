import { FormFields } from '@/components/ui/form';

export const LoginFormFields: FormFields[] = [
  {
    label: {
      children: "Mobile Number"
    },
    input: {
      className: "text-base py-3 px-4",
      id: "mobileNumber",
      name: "mobileNumber",
      placeholder: "+91 9876543210",
      type: "tel",
    }
  },
  {
    label: {
      children: "Password"
    },
    input: {
      className: "text-base py-3 px-4",
      id: "password",
      name: "password",
      placeholder: "••••••••",
      type: "password",
    }
  }
]