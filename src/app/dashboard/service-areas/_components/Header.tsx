"use client";

interface HeaderProps {
  companyName: string;
}

export function Header({ companyName }: HeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900">Áreas de Servicio</h1>
      <p className="mt-2 text-gray-600">
        Gestiona las áreas donde opera {companyName}
      </p>
    </div>
  );
}