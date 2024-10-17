import { tableHead } from "./customer-table.string";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { DeleteIcon, UpdateIcon } from "@/assets/icons";
import { GetCustomerType } from "./customer-table.types";
import { ViewIcon } from "@/assets/icons/view";
import { CustomerType } from "@/types";

export const getCustomers: GetCustomerType = async (
  setTableData,
  setOpenupdateForm,
  setDefaultValues
) => {
  const handleDeleteCustomer = async (id: string) => {
    try {
      const URL = `/api/customers/${id}`;

      const response = await fetch(URL, {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) {
        toast.error(`Error: ${response.statusText}`);
        return undefined;
      }

      toast.success("Customer deleted");
      getCustomers(setTableData, setOpenupdateForm, setDefaultValues);
    } catch (error) {
      toast.error("Internal Server Error!");
      return undefined;
    }
  };

  try {
    const URL = `/api/customers`;

    const response = await fetch(URL, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      toast.error(`Error: ${response.statusText}`);
      return undefined;
    }

    const data: { customer: CustomerType[] } = await response.json();

    const tableBody = data.customer.map(
      ({ id, customerName, mobileNumber }) => ({
        values: [
          <Button
            className="text-primary p-0"
            key={id}
            // onClick={() => handleDeleteCustomer(id)}
            variant="ghost"
          >
            <ViewIcon className="text-white/40" height={20} width={20} />
          </Button>,
          customerName,
          mobileNumber,
          <div className="space-x-4 flex justify-center" key={id}>
            <Button
              className="p-0"
              onClick={() => {
                setOpenupdateForm(true);
                setDefaultValues({ id, customerName, mobileNumber });
              }}
              variant="ghost"
            >
              <UpdateIcon className="text-blue-500" height={20} width={20} />
            </Button>
            <Button
              className="p-0"
              onClick={() => handleDeleteCustomer(id)}
              variant="ghost"
            >
              <DeleteIcon className="text-red-500" height={20} width={20} />
            </Button>
          </div>
        ],
      })
    );

    setTableData({ head: tableHead, body: tableBody });
  } catch (error) {
    toast.error("Internal Server Error!");
    return undefined;
  }
};
