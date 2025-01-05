import CompanyForm from "@/components/forms/CompanyForm";

export default function Page() {
  return (
    <div className="h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Nueva Empresa</h1>
        <p className="mt-2 text-gray-600">Añade una nueva empresa al sistema</p>
      </div>
      <CompanyForm />
    </div>
  );
}
