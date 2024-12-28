import { fakeCompanies } from "@/lib/data/fakeData";
import CompanyForm from "@/components/forms/CompanyForm";

interface Props {
  params: {
    id: string;
  };
}

export default function EditCompanyPage({ params }: Props) {
  const company = fakeCompanies.find(company => company.id === params.id);

  if (!company) {
    return <div>Empresa no encontrada</div>;
  }

  return (
    <div className="h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Editar Empresa</h1>
        <p className="mt-2 text-gray-600">
          Modifica los datos de la empresa
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <CompanyForm initialData={company} isNew={false} />
        </div>
      </div>
    </div>
  );
}