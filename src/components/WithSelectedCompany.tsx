import React, { FC, PropsWithChildren } from "react";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import { useSelectedCompanyStore } from "@/store/companies";

const WithSelectedCompany: FC<PropsWithChildren> = ({ children }) => {
  const {
    selectedCompany,
    cities,
    isLoading: isLoadingSelectedCompany,
  } = useSelectedCompanyStore();

  if (isLoadingSelectedCompany) {
    return (
      <div className="flex items-center justify-center w-full h-32">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!selectedCompany || !cities?.length) {
    return (
      <div className="flex items-center justify-center w-full h-32">
        <Badge variant="secondary" className="text-sm">
          Selecciona una empresa para continuar
        </Badge>
      </div>
    );
  }

  return children;
};

export default WithSelectedCompany;
