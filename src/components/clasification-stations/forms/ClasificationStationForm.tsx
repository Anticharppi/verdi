"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Building2, Hash, MapPin, DollarSign, Loader2 } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useSelectedCompanyStore } from "@/store/companies";
import { useServiceAreaByCompanyCityId } from "@/hooks/service-areas";

const formSchema = z.object({
  code: z
    .number()
    .int("El código debe ser un número entero")
    .positive("El código debe ser positivo"),
  companyCityId: z.string({
    required_error: "Por favor seleccione una ciudad",
  }),
  nuapId: z.string({
    required_error: "Por favor seleccione un NUAP",
  }),
  price: z
    .number()
    .positive("El precio debe ser positivo")
    .min(0.01, "El precio mínimo es 0.01"),
});

type FormValues = z.infer<typeof formSchema>;

export function ClasificationStationForm() {
  const router = useRouter();
  const { cities } = useSelectedCompanyStore();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: undefined,
      companyCityId: "",
      nuapId: "",
      price: undefined,
    },
  });

  const { data: serviceAreas, isLoading: isLoadingServiceAreas } =
    useServiceAreaByCompanyCityId(form.watch("companyCityId"));

  function onSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <CardTitle>Información de la Estación</CardTitle>
                <CardDescription>
                  Datos básicos de la estación de clasificación
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="companyCityId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ciudad</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
                          <Select
                            onValueChange={(value) => {
                              field.onChange(value);
                              form.setValue("nuapId", ""); // Reset NUAP when city changes
                            }}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="pl-9">
                              <SelectValue placeholder="Seleccione una ciudad" />
                            </SelectTrigger>
                            <SelectContent side="bottom">
                              {cities.map((city) => (
                                <SelectItem
                                  key={city.companyCityId}
                                  value={city.companyCityId}
                                >
                                  {city.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="nuapId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>NUAP</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={!form.watch("companyCityId")}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un NUAP" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {serviceAreas?.map((serviceArea) => (
                            <SelectItem
                              key={serviceArea.id}
                              value={serviceArea.id}
                            >
                              {serviceArea.code}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Código</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            type="number"
                            placeholder="Ingrese el código"
                            className="pl-9"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Precio</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="Ingrese el precio"
                            className="pl-9"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/dashboard/classification-stations")}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Guardar estación
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
