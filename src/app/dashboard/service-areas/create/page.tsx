import { ServiceAreaForm } from "@/components/service-areas/ServiceAreaForm";
import WithSelectedCompany from "@/components/WithSelectedCompany";

export default function Page() {
  return (
    <WithSelectedCompany>
      <ServiceAreaForm />
    </WithSelectedCompany>
  );
}
