"use client";

import { useCompanies } from "@/hooks/companies/use-companies";
import { useOnClickOutside } from "@/hooks/use-click-outside";
import { cn } from "@/lib/utils";
import { useSelectedCompanyStore } from "@/store/companies";
import { Building2, ChevronDown, Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const CompanySkeleton = () => (
  <div className="flex items-center justify-between w-full px-3 py-2 bg-white/5 rounded-lg">
    <div className="flex items-center gap-2">
      <div className="w-5 h-5 bg-gray-600 rounded animate-pulse" />
      <div className="w-32 h-5 bg-gray-600 rounded animate-pulse" />
    </div>
    <div className="w-5 h-5 bg-gray-600 rounded animate-pulse" />
  </div>
);

export function CompanySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    selectedCompany,
    setSelectedCompany,
    setCities,
    setIsLoading,
    setStates,
  } = useSelectedCompanyStore();
  const { data: companies, isLoading: isLoadingCompanies } = useCompanies();

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  useEffect(() => {
    if (!selectedCompany && companies?.length) {
      const { cities, ...company } = companies[0];
      const states = Array.from(
        new Map(cities.map((city) => [city.state.id, city.state])).values()
      );
      setStates(states);
      setSelectedCompany(company);
      setCities(cities);
      setIsLoading(false);
    }
  }, [companies, selectedCompany, setSelectedCompany]);

  const handleCompanySelect = (id: string) => {
    const { cities, ...company } = companies.find((c) => c.id === id);
    setSelectedCompany(company);
    const states = Array.from(
      new Map(cities.map((city) => [city.state.id, city.state])).values()
    );
    setStates(states);
    setCities(cities);
    setIsOpen(false);
    setIsLoading(false);
    toast.success(`Empresa seleccionada: ${company.businessName}`);
  };

  if (isLoadingCompanies) {
    return <CompanySkeleton />;
  }

  if (!companies?.length) {
    return (
      <Link
        href="/dashboard/companies/create"
        className="flex items-center justify-between w-full px-3 py-2 text-gray-300 bg-gradient-to-r from-blue-900/50 to-blue-800/50 hover:from-blue-900/70 hover:to-blue-800/70 rounded-lg transition-all duration-200 group"
      >
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5" />
          <span className="text-sm font-medium">Crear empresa</span>
        </div>
        <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
      </Link>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-between w-full px-3 py-2 rounded-lg transition-all duration-200",
          "bg-gradient-to-r from-blue-900/50 to-blue-800/50",
          "hover:from-blue-900/70 hover:to-blue-800/70",
          "ring-1 ring-white/20",
          "hover:ring-white/30",
          isOpen && "ring-blue-500/50 from-blue-900/70 to-blue-800/70"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-medium truncate max-w-[200px] text-blue-100">
            {selectedCompany?.businessName}
          </span>
        </div>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-blue-400 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800/95 backdrop-blur-sm rounded-lg border border-white/10 shadow-lg overflow-hidden z-50">
          <div className="max-h-64 overflow-y-auto">
            {companies.map((company) => (
              <button
                key={company.id}
                onClick={() => handleCompanySelect(company.id)}
                className={cn(
                  "flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-300 hover:bg-blue-900/50 transition-colors",
                  selectedCompany?.id === company.id &&
                    "bg-blue-900/30 text-blue-200"
                )}
              >
                <Building2 className="w-5 h-5 flex-shrink-0" />
                <span className="truncate">{company.businessName}</span>
              </button>
            ))}
            <Link
              href="/dashboard/companies/create"
              className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-300 hover:bg-blue-900/50 transition-colors border-t border-white/10"
            >
              <Plus className="w-5 h-5 flex-shrink-0" />
              <span>Crear nueva empresa</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
