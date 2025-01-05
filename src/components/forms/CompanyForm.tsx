"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  companyFormSchema,
  CompanyFormValues,
  defaultData,
} from "@/schemas/company";
import { CompanyBasicInfo } from "./company/CompanyBasicInfo";
import { CompanyContactInfo } from "./company/CompanyContactInfo";
import { CompanyOperatingCities } from "./company/CompanyOperatingCities";
import { useCreateCompany } from "@/hooks";

interface CompanyFormProps {
  initialData?: Partial<CompanyFormValues>;
  isNew?: boolean;
}

export default function CompanyForm({
  initialData,
  isNew = true,
}: CompanyFormProps) {
  const router = useRouter();
  const form = useForm<CompanyFormValues>({
    resolver: zodResolver(companyFormSchema),
    defaultValues: {
      ...defaultData,
      ...initialData,
    },
  });
  const createCompany = useCreateCompany();

  const onSubmit = async (data: CompanyFormValues) => {
    if (isNew) await createCompany.mutateAsync(data);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <CompanyBasicInfo />
          <CompanyContactInfo />
          <CompanyOperatingCities />

          <div className="flex items-center justify-end gap-4 bg-gray-50 px-6 py-4 rounded-lg border border-gray-100">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/dashboard/companies")}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Guardando...
                </>
              ) : isNew ? (
                "Crear Empresa"
              ) : (
                "Guardar Cambios"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
