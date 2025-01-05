"use client";

import { useCompany } from "@/contexts/CompanyContext";
import { useCompanies } from "@/hooks/companies/use-companies";
import { useOnClickOutside } from "@/hooks/use-click-outside";
import { Company } from "@prisma/client";
import { Building2, ChevronDown, Plus, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const CompanySkeleton = () => (
  <div className="flex items-center justify-between w-full px-3 py-2 bg-white/5 rounded-lg">
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 bg-gray-600 rounded animate-pulse" />
      <div className="w-32 h-4 bg-gray-600 rounded animate-pulse" />
    </div>
    <div className="w-4 h-4 bg-gray-600 rounded animate-pulse" />
  </div>
);

export function CompanySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedCompany, setSelectedCompany } = useCompany();
  const { data: companies, isLoading: isLoadingCompanies } = useCompanies();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  useEffect(() => {
    if (!selectedCompany && companies?.length) {
      setSelectedCompany(companies[0]);
    }
  }, [companies, selectedCompany, setSelectedCompany]);

  const handleCompanySelect = (company: Company) => {
    setSelectedCompany(company);
    setIsOpen(false);
  };

  if (isLoadingCompanies) {
    return <CompanySkeleton />;
  }

  // Show create company button when no companies exist
  if (!companies?.length) {
    return (
      <Link
        href="/dashboard/companies/new"
        className="flex items-center justify-between w-full px-3 py-2 text-gray-300 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group"
      >
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          <span className="text-sm font-medium">Crear empresa</span>
        </div>
        <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
      </Link>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 text-gray-300 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          <span className="text-sm font-medium truncate max-w-[200px]">
            {selectedCompany?.businessName}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 rounded-lg border border-white/10 shadow-lg overflow-hidden z-50">
          <div className="max-h-64 overflow-y-auto">
            {companies.map((company) => (
              <button
                key={company.id}
                onClick={() => handleCompanySelect(company)}
                className={`flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-300 hover:bg-white/10 transition-colors ${
                  selectedCompany?.id === company.id ? "bg-white/5" : ""
                }`}
              >
                <Building2 className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{company.businessName}</span>
              </button>
            ))}
            <Link
              href="/dashboard/companies/new"
              className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-300 hover:bg-white/10 transition-colors border-t border-white/10"
            >
              <Plus className="w-4 h-4 flex-shrink-0" />
              <span>Crear nueva empresa</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
