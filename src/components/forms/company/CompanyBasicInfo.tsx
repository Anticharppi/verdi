"use client";

import { Building2 } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CompanyFormValues } from "@/schemas/company";

export function CompanyBasicInfo() {
  const { control } = useFormContext<CompanyFormValues>();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
          <Building2 className="h-6 w-6 text-emerald-600" />
        </div>
        <div>
          <CardTitle>Información Principal</CardTitle>
          <CardDescription>Datos básicos de la empresa</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={control}
              name="superServicesId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Identificación SS</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <p className="text-sm text-muted-foreground">
                    Número de identificación asignado por SuperServicios
                  </p>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="nit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NIT</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de la empresa</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
