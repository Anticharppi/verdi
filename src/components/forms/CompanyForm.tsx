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
import { useCreateCompany, useUpdateCompany } from "@/hooks";
import { Loader2 } from "lucide-react";

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
      cities: initialData?.cities || [],
    },
  });

  const createCompany = useCreateCompany();
  const updateCompany = useUpdateCompany();

  const onSubmit = async (data: CompanyFormValues) => {
    try {
      if (isNew) {
        await createCompany.mutateAsync(data);
      } else {
        await updateCompany.mutateAsync({
          id: initialData?.id as string,
          ...data,
        });
      }
      router.push("/dashboard/companies");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CompanyBasicInfo />
            <CompanyContactInfo />
          </div>
          <CompanyOperatingCities />

          <div className="flex items-center justify-end gap-4 py-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/dashboard/companies")}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting && (
                <Loader2 className="animate-spin" />
              )}
              {isNew ? "Crear Empresa" : "Guardar Cambios"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
