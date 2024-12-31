"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { HeaderSection } from "./form-sections/header-section";
import { GeneralInfoSection } from "./form-sections/general-info-section";
import { MaterialsTableSection } from "./form-sections/materials-table-section";
import { TooltipProvider } from "@/components/ui/tooltip";

const formSchema = z.object({
  generalInfo: z.object({
    providerId: z.string().min(1, "Selecciona un proveedor"),
    routeId: z.string().min(1, "Selecciona una ruta"),
    vehicleId: z.string().optional(),
    weekCode: z.coerce.number().min(1).max(53),
    rejectionSiteId: z.string().min(1, "Selecciona un sitio de rechazo"),
    fixedFee: z.coerce.number().min(0),
  }),
  materials: z.array(z.object({
    materialId: z.string().min(1, "Selecciona un material"),
    amountDelivered: z.coerce.number().min(0),
    admittedAmount: z.coerce.number().min(0),
    price: z.coerce.number().min(0),
    appliesFee: z.boolean().default(true),
    rejectedAmount: z.coerce.number().min(0).optional(),
    rejectReason: z.string().optional(),
  })).min(1, "Agrega al menos un material"),
});

type FormValues = z.infer<typeof formSchema>;

interface MaterialIntakeFormProps {
  initialData?: FormValues;
}

export function MaterialIntakeForm({ initialData }: MaterialIntakeFormProps) {
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      generalInfo: {
        fixedFee: 0,
        weekCode: getCurrentWeek(),
      },
      materials: [{ appliesFee: true }],
    },
  });

  const materialsArray = useFieldArray({
    control: form.control,
    name: "materials",
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    router.push("/dashboard/materials-intake");
  }

  return (
    <TooltipProvider>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <HeaderSection />
          <GeneralInfoSection control={form.control} />
          <MaterialsTableSection control={form.control} fieldArray={materialsArray} />

          <div className="flex justify-end gap-2">
            <Button 
              type="button" 
              variant="outline"
              onClick={() => router.push("/dashboard/materials-intake")}
            >
              Cancelar
            </Button>
            <Button type="submit">{initialData ? "Actualizar" : "Guardar"}</Button>
          </div>
        </form>
      </Form>
    </TooltipProvider>
  );
}

function getCurrentWeek() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = now.getTime() - start.getTime();
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  return Math.ceil(diff / oneWeek);
}