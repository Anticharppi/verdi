"use client";

import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Control } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface MaterialFieldsProps {
  control: Control<any>;
  index: number;
  onRemove: () => void;
  isRemovable?: boolean;
}

export function MaterialFields({ 
  control, 
  index, 
  onRemove,
  isRemovable = true,
}: MaterialFieldsProps) {
  const fieldName = `materials.${index}`;

  return (
    <Card className="p-3 relative">
      {isRemovable && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={onRemove}
          className="absolute right-2 top-2 h-6 w-6 p-0"
        >
          <X className="h-4 w-4" />
        </Button>
      )}

      <div className="grid gap-3">
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={control}
            name={`${fieldName}.materialId`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Material</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-8">
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Cartón</SelectItem>
                    <SelectItem value="2">Plástico</SelectItem>
                    <SelectItem value="3">Vidrio</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`${fieldName}.price`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Precio/kg</FormLabel>
                <FormControl>
                  <Input type="number" className="h-8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <FormField
            control={control}
            name={`${fieldName}.amountDelivered`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Cantidad Entregada</FormLabel>
                <FormControl>
                  <Input type="number" className="h-8" step="0.01" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`${fieldName}.admittedAmount`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Cantidad Admitida</FormLabel>
                <FormControl>
                  <Input type="number" className="h-8" step="0.01" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`${fieldName}.rejectedAmount`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Cantidad Rechazada</FormLabel>
                <FormControl>
                  <Input type="number" className="h-8" step="0.01" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={control}
          name={`${fieldName}.appliesFee`}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-xs">Aplica tarifa</FormLabel>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name={`${fieldName}.rejectReason`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Motivo del Rechazo</FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  className="h-16 resize-none" 
                  placeholder="Indica el motivo si hay material rechazado"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-2 pt-2 border-t grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-xs text-muted-foreground">Subtotal:</span>
            <p className="font-medium">
              {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(0)}
            </p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">Total con Tarifa:</span>
            <p className="font-medium">
              {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(0)}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}