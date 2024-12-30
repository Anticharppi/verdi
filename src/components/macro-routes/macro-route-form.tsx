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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "../ui/card";
import { X } from "lucide-react";

const formSchema = z.object({
  code: z.string().min(1, "El código es requerido"),
  name: z.string().min(1, "El nombre es requerido"),
  nuecaIds: z.array(z.string()).min(1, "Debe seleccionar al menos un NUECA"),
});

type FormValues = z.infer<typeof formSchema>;

interface MacroRouteFormProps {
  onClose: () => void;
}

// Datos simulados de NUECAs
const MOCK_NUECAS = [
  { id: "1", code: "NUECA001" },
  { id: "2", code: "NUECA002" },
  { id: "3", code: "NUECA003" },
];

export function MacroRouteForm({ onClose }: MacroRouteFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
      name: "",
      nuecaIds: [],
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    onClose();
  }

  return (
    <Card className="p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Nueva Macro Ruta</h3>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Código</FormLabel>
                  <FormControl>
                    <Input placeholder="Código de la macro ruta" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Nombre de la macro ruta" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nuecaIds"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>NUECAs</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value?.join(",")}
                      onValueChange={(value) =>
                        field.onChange(value.split(",").filter(Boolean))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione los NUECAs" />
                      </SelectTrigger>
                      <SelectContent>
                        {MOCK_NUECAS.map((nueca) => (
                          <SelectItem key={nueca.id} value={nueca.id}>
                            {nueca.code}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose} type="button">
              Cancelar
            </Button>
            <Button type="submit">
              Crear Macro Ruta
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
