import UserForm from "@/components/forms/UserForm";

interface Props {
  params: {
    id: string;
  };
}

export default function EditUserPage({ params }: Props) {
  // En un caso real, aquí obtendríamos los datos del usuario
  // Por ahora usamos datos de ejemplo
  const mockUser = {
    firstName: "Juan",
    lastName: "Pérez",
    email: "juan.perez@empresa.com",
    isAdmin: false,
    companies: [
      {
        companyId: "c1",
        role: "manager" as const
      }
    ]
  };

  return (
    <div className="h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Editar Usuario</h1>
        <p className="mt-2 text-gray-600">
          Modificar la información y permisos del usuario
        </p>
      </div>

      <UserForm initialData={mockUser} isNew={false} />
    </div>
  );
}