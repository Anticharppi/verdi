import { fakeCompanies } from "@/lib/data/fakeData";
import CompanyForm from "@/components/forms/CompanyForm";
import { getCompanyAction } from "@/lib/actions";
import NotFoundPage from "@/app/not-found";

type Params = {
  id: string;
};

type Props = {
  params: Promise<Params>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  const company = await getCompanyAction(id);

  if (!company) return <NotFoundPage />;

  return (
    <div className="h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Editar Empresa</h1>
        <p className="mt-2 text-gray-600">Modifica los datos de la empresa</p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <CompanyForm initialData={company} isNew={false} />
        </div>
      </div>
    </div>
  );
}
