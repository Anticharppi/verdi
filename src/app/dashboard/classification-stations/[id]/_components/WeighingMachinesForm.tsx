"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";

interface WeighingMachinesFormProps {
  initialData?: any;
}

export function WeighingMachinesForm({ initialData }: WeighingMachinesFormProps) {
  const form = useForm({
    defaultValues: initialData || {
      machines: [
        {
          weightCapacity: "",
          installationDate: "",
          lastCalibrationDate: "",
          lastCalibrationCompanyName: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "machines",
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Básculas</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <div className="space-y-6">
            {fields.map((field, index) => (
              <div key={field.id} className="space-y-4 relative">
                {index > 0 && <div className="h-px bg-gray-200 my-6" />}
                <div className="absolute right-0 top-0">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => remove(index)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name={`machines.${index}.weightCapacity`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Capacidad (kg)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Ej: 1000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`machines.${index}.installationDate`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fecha de instalación</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name={`machines.${index}.lastCalibrationDate`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Última calibración</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`machines.${index}.lastCalibrationCompanyName`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Empresa calibradora</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nombre de la empresa"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            ))}

            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() =>
                append({
                  weightCapacity: "",
                  installationDate: "",
                  lastCalibrationDate: "",
                  lastCalibrationCompanyName: "",
                })
              }
            >
              <Plus className="h-4 w-4 mr-2" />
              Agregar báscula
            </Button>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
}