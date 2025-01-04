"use client";

interface HeaderProps {
  companyName: string;
}

export function Header({ companyName }: HeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900">Estaciones de Clasificación</h1>
      <p className="mt-2 text-gray-600">
        Gestiona las estaciones de clasificación NUECA de {companyName}
      </p>
    </div>
  );
}