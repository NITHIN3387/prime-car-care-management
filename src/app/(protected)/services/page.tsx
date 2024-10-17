import { ServiceTable } from "@/components/tables/service-table";
import MainPageLayout from "@/layouts/main-page/main-page";

export default function Services() {
  return (
    <MainPageLayout title="Services">
      <ServiceTable />
    </MainPageLayout>
  );
}
