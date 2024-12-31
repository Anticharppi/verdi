"use client";

import { Truck, Route as RoutePath, User, Calculator, MapPin, Calendar, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface GeneralInfoSectionProps {
  control: Control<any>;
}

export function GeneralInfoSection({ control }: GeneralInfoSectionProps) {
  return (
    <Card className="p-4">
      <div className="grid grid-cols-3 gap-4">
        <FormField
          control={control}
          name="generalInfo.providerId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs flex items-center gap-2">
                <User className="w-3 h-3" /> 
                Proveedor *
                <Tooltip delayDuration={0}>
                  <TooltipTrigger>
                    <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    Selecciona el proveedor que entrega los materiales
                  </TooltipContent>
                </Tooltip>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-8">
                    <SelectValue placeholder="Seleccionar proveedor" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">Juan Pérez</SelectItem>
                  <SelectItem value="2">María García</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="generalInfo.routeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs flex items-center gap-2">
                <RoutePath className="w-3 h-3" /> 
                Ruta *
                <Tooltip delayDuration={0}>
                  <TooltipTrigger>
                    <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    Ruta asignada al proveedor
                  </TooltipContent>
                </Tooltip>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-8">
                    <SelectValue placeholder="Seleccionar ruta" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">Ruta Norte</SelectItem>
                  <SelectItem value="2">Ruta Sur</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="generalInfo.vehicleId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs flex items-center gap-2">
                <Truck className="w-3 h-3" /> 
                Vehículo
                <Tooltip delayDuration={0}>
                  <TooltipTrigger>
                    <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    Vehículo utilizado para el transporte (opcional)
                  </TooltipContent>
                </Tooltip>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-8">
                    <SelectValue placeholder="Seleccionar vehículo" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">ABC123 - Camión</SelectItem>
                  <SelectItem value="2">XYZ789 - Furgón</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="generalInfo.weekCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs flex items-center gap-2">
                <Calendar className="w-3 h-3" /> 
                Semana *
                <Tooltip delayDuration={0}>
                  <TooltipTrigger>
                    <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    Número de semana del año (1-53)
                  </TooltipContent>
                </Tooltip>
              </FormLabel>
              <FormControl>
                <Input type="number" className="h-8" {...field} min={1} max={53} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="generalInfo.fixedFee"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs flex items-center gap-2">
                <Calculator className="w-3 h-3" /> 
                Tarifa Fija *
                <Tooltip delayDuration={0}>
                  <TooltipTrigger>
                    <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    Tarifa fija aplicada al recibo
                  </TooltipContent>
                </Tooltip>
              </FormLabel>
              <FormControl>
                <Input type="number" className="h-8" {...field} min={0} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="generalInfo.rejectionSiteId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs flex items-center gap-2">
                <MapPin className="w-3 h-3" /> 
                Sitio de Rechazo *
                <Tooltip delayDuration={0}>
                  <TooltipTrigger>
                    <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    Sitio donde se depositan los materiales rechazados
                  </TooltipContent>
                </Tooltip>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="h-8">
                    <SelectValue placeholder="Seleccionar sitio" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">Sitio Principal</SelectItem>
                  <SelectItem value="2">Sitio Secundario</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </Card>
  );
}