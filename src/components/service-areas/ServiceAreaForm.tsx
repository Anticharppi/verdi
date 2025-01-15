"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, MapPinned } from "lucide-react";
import { useSelectedCompanyStore } from "@/store/companies";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  useCreateServiceArea,
  useUpdateServiceArea,
} from "@/hooks/service-areas";
import { ServiceAreaFormSkeleton } from "./ServiceAreaFormSkeleton";
import { StateSelector } from "./StateSelector";
import { CitySelector } from "./CitySelector";

const formSchema = z.object({
  code: z
    .string()
    .min(1, "El código NUAP es requerido")
    .regex(/^\d+$/, "El código NUAP solo debe contener números")
    .transform((val) => val.trim()),
  cityId: z.string().min(1, "Debe seleccionar una ciudad"),
  id: z.string().optional(),
});
type FormData = z.infer<typeof formSchema>;

type Props = {
  initialData?: FormData;
};

const defaultValues: FormData = {
  code: "",
  cityId: "",
};

export const ServiceAreaForm = ({ initialData = defaultValues }: Props) => {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const { selectedCompany, cities, states, isLoading } =
    useSelectedCompanyStore();
  const createServiceArea = useCreateServiceArea();
  const updateServiceArea = useUpdateServiceArea();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  const handleCitySelect = (cityId: string) => {
    setSelectedCity(cityId);
    form.setValue("cityId", cityId);
  };

  const onSubmit = async (data: FormData) => {
    if (data.id) {
      await updateServiceArea.mutateAsync({
        id: data.id,
        code: data.code,
        cityId: data.cityId,
        companyId: selectedCompany.id,
      });
    } else {
      await createServiceArea.mutateAsync({
        code: data.code,
        cityId: data.cityId,
        companyId: selectedCompany.id,
      });
    }
  };

  useEffect(() => {
    if (!initialData.cityId || !cities.length || !states.length) return;

    const city = cities.find((city) => city.id === initialData.cityId);

    console.log({ city });

    if (city) {
      console.log({
        city,
      });

      setSelectedState(city.stateId);
      setSelectedCity(initialData.cityId);
      // form.setValue("cityId", initialData.cityId);
    }
  }, [initialData.cityId, cities, states, form]);

  if (isLoading) {
    return <ServiceAreaFormSkeleton />;
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto"
      >
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                <MapPinned className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <CardTitle>
                  {initialData.id
                    ? "Editar área de prestación"
                    : "Crear área de prestación"}
                </CardTitle>
                <CardDescription>
                  {initialData.id
                    ? "Edita los datos de tu área de prestación"
                    : "Ingresa los datos de tu nueva área de prestación"}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Código NUAP</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="Ingresa el código NUAP"
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^\d]/g, "");
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <StateSelector
                selectedState={selectedState}
                onStateSelect={setSelectedState}
              />
              <CitySelector
                selectedState={selectedState}
                selectedCity={selectedCity}
                onCitySelect={handleCitySelect}
              />
              {form.formState.errors.cityId && (
                <p className="text-sm font-medium text-destructive">
                  {form.formState.errors.cityId.message}
                </p>
              )}
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/dashboard/service-areas")}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={createServiceArea.isPending}
                className="bg-purple-600 text-white hover:bg-purple-700"
              >
                {createServiceArea.isPending ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Guardar"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};
