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
import { useCompany } from "@/hooks/use-company";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";

const formSchema = z.object({
  code: z.string().min(1, "El código es requerido"),
  name: z.string().min(1, "El nombre es requerido"),
  nuecaIds: z.array(z.string()).min(1, "Debe seleccionar al menos un NUECA"),
});

type FormValues = z.infer<typeof formSchema>;

interface MacroRouteFormProps {
  onClose: () => void;
}

export function MacroRouteForm({ onClose }: MacroRouteFormProps) {
  const { company } = useCompany();
  const queryClient = useQueryClient();

  const { data: nuecas } = useQuery({
    queryKey: ["nuecas", company?.id],
    queryFn: async () => {
      const { data } = await axios.get("/api/nuecas");
      return data;
    },
    enabled: !!company,
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
      name: "",
      nuecaIds: [],
    },
  });

  const { mutate: createMacroRoute, isLoading } = useMutation({
    mutationFn: async (values: FormValues) => {
      const { data } = await axios.post("/api/macro-routes", values);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["macro-routes"]);
      toast.success("Macro ruta creada exitosamente");
      onClose();
    },
    onError: (error) => {
      toast.error("Error al crear la macro ruta");
      console.error(error);
    },
  });

  function onSubmit(values: FormValues) {
    createMacroRoute(values);
  }

  return (
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
              <FormItem>
                <FormLabel>NUECAs</FormLabel>
                <FormControl>
                  <Select
                    value={field.value?.join(",")}
                    onValueChange={(value) =>
                      field.onChange(value.split(",").filter(Boolean))
                    }
                    multiple
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione los NUECAs" />
                    </SelectTrigger>
                    <SelectContent>
                      {nuecas?.map((nueca) => (
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
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creando..." : "Crear Macro Ruta"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
