import { tableHead } from "./service-table.string";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { DeleteIcon, UpdateIcon } from "@/assets/icons";
import { GetServicesType } from "./service-table.types";
import type { ServiceType } from "@/types";

export const getServices: GetServicesType = async (
  setTableData,
  setOpenupdateForm,
  setDefaultValues
) => {
  const handleDeleteService = async (id: string) => {
    try {
      const URL = `/api/services/${id}`;

      const response = await fetch(URL, {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) {
        toast.error(`Error: ${response.statusText}`);
        return undefined;
      }

      toast.success("Service deleted");
      getServices(setTableData, setOpenupdateForm, setDefaultValues);
    } catch (error) {
      toast.error("Internal Server Error!");
      return undefined;
    }
  };

  try {
    const URL = `/api/services`;

    const response = await fetch(URL, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      toast.error(`Error: ${response.statusText}`);
      return undefined;
    }

    const data: { service: ServiceType[] } = await response.json();

    const tableBody = data.service.map(({ id, serviceName, cost }) => ({
      values: [
        serviceName,
        cost,
        <div className="space-x-4">
          <Button
            className="p-0"
            onClick={() => {
              setOpenupdateForm(true);
              setDefaultValues({ id, serviceName, cost });
            }}
            variant="ghost"
          >
            <UpdateIcon className="text-blue-500" height={20} width={20} />
          </Button>
          <Button
            className="p-0"
            onClick={() => handleDeleteService(id)}
            variant="ghost"
          >
            <DeleteIcon className="text-red-500" height={20} width={20} />
          </Button>
        </div>,
      ],
    }));

    setTableData({ head: tableHead, body: tableBody });
  } catch (error) {
    toast.error("Internal Server Error!");
    return undefined;
  }
};
