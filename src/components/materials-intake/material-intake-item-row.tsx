"use client";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";

interface MaterialIntakeItemRowProps {
  index: number;
  onRemove: () => void;
  isRemovable: boolean;
}

export function MaterialIntakeItemRow({ 
  index, 
  onRemove,
  isRemovable 
}: MaterialIntakeItemRowProps) {
  const form = useFormContext();

  return (
    <div className="grid gap-4 p-4 border rounded-lg border-gray-200">
      <div className="flex justify-between items-center">
        <h4 className="text-sm font-medium">Material {index + 1}</h4>
        {isRemovable && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onRemove}
            className="text-red-600 hover:text-red-700"
          >
            Eliminar
          </Button>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FormField
          control={form.control}
          name={`items.${index}.materialId`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Material</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un material" />
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
          control={form.control}
          name={`items.${index}.amountDeliveredByProvider`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cantidad Entregada (kg)</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={`items.${index}.admittedAmount`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cantidad Admitida (kg)</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={`items.${index}.price`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Precio por kg</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={`items.${index}.appliesFee`}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Aplica tarifa
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name={`items.${index}.rejectedAmount`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Cantidad Rechazada (kg)</FormLabel>
            <FormControl>
              <Input type="number" step="0.01" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`items.${index}.rejectReason`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Motivo de Rechazo</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}