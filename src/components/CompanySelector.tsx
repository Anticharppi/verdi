"use client";

import { useCompany } from "@/contexts/CompanyContext";
import { useCompanies } from "@/hooks/use-companies";
import { Company } from "@prisma/client";
import { Building2, ChevronDown, Plus } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export function CompanySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedCompany, setSelectedCompany } = useCompany();
  const { data: companies } = useCompanies();

  useEffect(() => {
    if (!selectedCompany && companies?.length) {
      setSelectedCompany(companies[0]);
    }
  }, []);

  const handleCompanySelect = (company: Company) => {
    setSelectedCompany(company);
    setIsOpen(false);
  };

  // Evitar renderizar hasta que tengamos los datos iniciales
  if (!companies?.length || !selectedCompany) {
    return (
      <div className="relative">
        <Link
          href={"/dashboard/companies/new"}
          className="flex items-center justify-between w-full px-3 py-2 text-gray-300 bg-white/5 hover:bg-white/10 rounded-lg transition-colors animate-pulse animate-infinite"
        >
          Crear empresa
          <Plus className="w-4 h-4 transition-transform" />
        </Link>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 text-gray-300 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
      >
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          <span className="text-sm font-medium truncate">
            {selectedCompany.businessName || selectedCompany.businessName}
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
          {companies.map((company) => (
            <button
              key={company.id}
              onClick={() => handleCompanySelect(company)}
              className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-300 hover:bg-white/10 transition-colors"
            >
              <Building2 className="w-4 h-4" />
              <span className="truncate">{company.businessName}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
