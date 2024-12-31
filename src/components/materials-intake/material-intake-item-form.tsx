"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import { MaterialIntakeItemRow } from "./material-intake-item-row";

const itemSchema = z.object({
  materialId: z.string({
    required_error: "Selecciona un material",
  }),
  amountDeliveredByProvider: z.coerce.number().min(0, {
    message: "La cantidad debe ser mayor a 0",
  }),
  admittedAmount: z.coerce.number().min(0, {
    message: "La cantidad debe ser mayor a 0",
  }),
  appliesFee: z.boolean().default(true),
  price: z.coerce.number().min(0),
  rejectReason: z.string().optional(),
  rejectedAmount: z.coerce.number().min(0).optional(),
});

const formSchema = z.object({
  items: z.array(itemSchema).min(1, {
    message: "Debe agregar al menos un material",
  }),
});

export function MaterialIntakeItemForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      items: [{ appliesFee: true }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "items",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Materiales Recibidos</CardTitle>
            <CardDescription>
              Ingresa los materiales y cantidades recibidas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {fields.map((field, index) => (
              <MaterialIntakeItemRow
                key={field.id}
                index={index}
                onRemove={() => remove(index)}
                isRemovable={index > 0}
              />
            ))}
            
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => append({ appliesFee: true })}
            >
              Agregar Material
            </Button>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button type="button" variant="outline">
            Anterior
          </Button>
          <Button type="submit">
            Guardar
          </Button>
        </div>
      </form>
    </Form>
  );
}