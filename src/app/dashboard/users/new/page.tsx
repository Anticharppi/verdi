import UserForm from "@/components/forms/UserForm";

export default function NewUserPage() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    isAdmin: false,
    companies: [{ companyId: "", role: 'operator' as const }]
  };

  return (
    <div className="h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Nuevo Usuario</h1>
        <p className="mt-2 text-gray-600">
          Crear un nuevo usuario en el sistema
        </p>
      </div>

      <UserForm initialData={initialValues} isNew={true} />
    </div>
  );
}