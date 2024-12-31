"use client";

import { FormField, FormItem, FormLabel, FormMessage, FormControl } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface MaterialIntakeGeneralFormProps {
  form: UseFormReturn<any>;
}

export function MaterialIntakeGeneralForm({ form }: MaterialIntakeGeneralFormProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium mb-2">Información General</h3>
      
      <div className="grid gap-3">
        <FormField
          control={form.control}
          name="generalInfo.providerId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Proveedor</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-8">
                    <SelectValue placeholder="Selecciona un proveedor" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">Juan Pérez</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="generalInfo.routeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Ruta</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-8">
                    <SelectValue placeholder="Selecciona una ruta" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">Ruta Norte</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="generalInfo.vehicleId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Vehículo (Opcional)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-8">
                    <SelectValue placeholder="Selecciona un vehículo" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">ABC123 - Camión</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="generalInfo.weekCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Semana</FormLabel>
                <FormControl>
                  <Input type="number" className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="generalInfo.fixedFee"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Tarifa Fija</FormLabel>
                <FormControl>
                  <Input type="number" className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="generalInfo.rejectionSiteId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Sitio de Rechazo</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-8">
                    <SelectValue placeholder="Selecciona un sitio" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">Sitio Principal</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}