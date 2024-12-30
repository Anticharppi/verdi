interface HeaderProps {
  companyName: string;
}

export function Header({ companyName }: HeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900">Proveedores</h1>
      <p className="mt-2 text-sm text-gray-700">
        Gestiona los proveedores de {companyName}
      </p>
    </div>
  );
}