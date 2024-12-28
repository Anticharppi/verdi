import CompanyForm from "@/components/forms/CompanyForm";

export default function NewCompanyPage() {
  const initialValues = {
    name: "",
    description: "",
    website: "",
    email: "",
    phone: "",
    address: "",
  };

  return (
    <div className="h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Nueva Empresa</h1>
        <p className="mt-2 text-gray-600">
          Añade una nueva empresa al sistema
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <CompanyForm initialData={initialValues} isNew={true} />
        </div>
      </div>
    </div>
  );
}
