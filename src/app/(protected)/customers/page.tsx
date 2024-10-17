import { CustomerTable } from "@/components/tables/customer-table";
import MainPageLayout from "@/layouts/main-page/main-page";

export default function Customers() {
  return (
    <MainPageLayout title="Customers">
      <CustomerTable />
    </MainPageLayout>
  );
}
