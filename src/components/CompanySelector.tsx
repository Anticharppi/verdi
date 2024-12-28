"use client";

import { useCompany } from "@/contexts/CompanyContext";
import { Company } from "@/lib/types/company";
import { Building2, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

// Mock data para empresas - Esto debería venir de tu backend
const mockCompanies: Company[] = [
  { 
    id: "1",
    name: "Empresa A",
    superServicesId: "123",
    businessName: "Empresa A S.A.S",
    nit: "900123456",
    email: "empresaa@mail.com",
    phoneNumber: "3001234567",
    address: "Calle 123",
    status: "ACTIVE"
  },
  { 
    id: "2",
    name: "Empresa B",
    superServicesId: "456",
    businessName: "Empresa B S.A.S",
    nit: "900789012",
    email: "empresab@mail.com",
    phoneNumber: "3007890123",
    address: "Carrera 456",
    status: "ACTIVE"
  },
];

export function CompanySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedCompany, setSelectedCompany } = useCompany();
  
  // Mover la selección inicial a un useEffect
  useEffect(() => {
    if (!selectedCompany && mockCompanies.length > 0) {
      setSelectedCompany(mockCompanies[0]);
    }
  }, []); // Solo se ejecuta una vez al montar el componente

  const handleCompanySelect = (company: Company) => {
    setSelectedCompany(company);
    setIsOpen(false);
  };

  // Evitar renderizar hasta que tengamos los datos iniciales
  if (!selectedCompany) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 text-gray-300 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
      >
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          <span className="text-sm font-medium truncate">
            {selectedCompany.name || selectedCompany.businessName}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 rounded-lg border border-white/10 shadow-lg overflow-hidden z-50">
          {mockCompanies.map((company) => (
            <button
              key={company.id}
              onClick={() => handleCompanySelect(company)}
              className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-300 hover:bg-white/10 transition-colors"
            >
              <Building2 className="w-4 h-4" />
              <span className="truncate">{company.name || company.businessName}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}