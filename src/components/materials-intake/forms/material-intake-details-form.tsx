"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import { MaterialFields } from "./form-fields/material-fields";

const materialSchema = z.object({
  materialId: z.string().min(1, "Selecciona un material"),
  amountDelivered: z.coerce.number().min(0, "La cantidad debe ser mayor a 0"),
  admittedAmount: z.coerce.number().min(0, "La cantidad debe ser mayor a 0"),
  price: z.coerce.number().min(0),
  appliesFee: z.boolean().default(true),
  rejectedAmount: z.coerce.number().min(0).optional(),
  rejectReason: z.string().optional(),
});

const formSchema = z.object({
  materials: z.array(materialSchema).min(1, "Debe agregar al menos un material"),
});

export type MaterialIntakeDetailsFormValues = z.infer<typeof formSchema>;

interface MaterialIntakeDetailsFormProps {
  mode: "create" | "edit";
  initialData?: MaterialIntakeDetailsFormValues;
  onComplete: (data: MaterialIntakeDetailsFormValues) => void;
  onBack: () => void;
}

export function MaterialIntakeDetailsForm({
  mode,
  initialData,
  onComplete,
  onBack,
}: MaterialIntakeDetailsFormProps) {
  const form = useForm<MaterialIntakeDetailsFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      materials: [{ appliesFee: true }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "materials",
  });

  function onSubmit(values: MaterialIntakeDetailsFormValues) {
    onComplete(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Materiales Recibidos</CardTitle>
            <CardDescription>
              Ingresa los detalles de cada material recibido
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {fields.map((field, index) => (
              <MaterialFields
                key={field.id}
                control={form.control}
                index={index}
                onRemove={() => remove(index)}
                isRemovable={index > 0}
              />
            ))}

            <Button
              type="button"
              variant="outline"
              onClick={() => append({ appliesFee: true })}
            >
              Agregar Material
            </Button>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onBack}>
            Anterior
          </Button>
          <Button type="submit">
            Siguiente
          </Button>
        </div>
      </form>
    </Form>
  );
}