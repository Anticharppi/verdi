"use client";

import { CompanyFormValues } from "@/schemas/company";
import { createContext, useContext, useState } from "react";

interface CompanyFormContextType {
  formValues: CompanyFormValues;
  setFormValues: React.Dispatch<React.SetStateAction<CompanyFormValues>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  errors: Record<string, string[]>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
}

const CompanyFormContext = createContext<CompanyFormContextType | undefined>(
  undefined
);

export function CompanyFormProvider({
  children,
  initialData,
}: {
  children: React.ReactNode;
  initialData?: Partial<CompanyFormValues>;
}) {
  const [formValues, setFormValues] = useState<CompanyFormValues>({
    superServicesId: "",
    businessName: "",
    nit: "",
    email: "",
    phone: "",
    address: "",
    cities: [],
    ...initialData,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  return (
    <CompanyFormContext.Provider
      value={{
        formValues,
        setFormValues,
        loading,
        setLoading,
        errors,
        setErrors,
      }}
    >
      {children}
    </CompanyFormContext.Provider>
  );
}

export function useCompanyForm() {
  const context = useContext(CompanyFormContext);
  if (!context) {
    throw new Error("useCompanyForm must be used within CompanyFormProvider");
  }
  return context;
}
