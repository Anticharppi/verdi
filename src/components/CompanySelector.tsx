"use client";

import { Building2, ChevronDown } from "lucide-react";
import { useState } from "react";

// Mock data para empresas - Esto debería venir de tu backend
const mockCompanies = [
  { id: "1", name: "Empresa A" },
  { id: "2", name: "Empresa B" },
  { id: "3", name: "Empresa C" },
];

export function CompanySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(mockCompanies[0]);

  const handleCompanySelect = (company: typeof mockCompanies[0]) => {
    setSelectedCompany(company);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 text-gray-300 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
      >
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          <span className="text-sm font-medium truncate">
            {selectedCompany.name}
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
              <span className="truncate">{company.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}