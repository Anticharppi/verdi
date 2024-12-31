"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormControl, FormField } from "@/components/ui/form";
import { Control, UseFieldArrayReturn } from "react-hook-form";
import { PlusCircle, Trash2, Package2, Info } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface MaterialsTableSectionProps {
  control: Control<any>;
  fieldArray: UseFieldArrayReturn<any>;
}

export function MaterialsTableSection({ control, fieldArray }: MaterialsTableSectionProps) {
  const { fields, append, remove } = fieldArray;

  return (
    <Card className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Package2 className="w-4 h-4 text-muted-foreground" />
          <h3 className="text-sm font-medium">Materiales Recibidos</h3>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <Info className="w-4 h-4 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent>Ingresa los materiales y sus cantidades respectivas</TooltipContent>
          </Tooltip>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({ appliesFee: true })}
          className="h-8"
        >
          <PlusCircle className="w-4 h-4 mr-1" /> Agregar Material
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-[200px]">Material *</TableHead>
              <TableHead className="w-[120px]">
                <div className="flex items-center gap-1">
                  Precio/kg *
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                      <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>Precio por kilogramo del material</TooltipContent>
                  </Tooltip>
                </div>
              </TableHead>
              <TableHead className="w-[120px]">
                <div className="flex items-center gap-1">
                  Entregado *
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                      <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>Cantidad en kilogramos recibida</TooltipContent>
                  </Tooltip>
                </div>
              </TableHead>
              <TableHead className="w-[120px]">
                <div className="flex items-center gap-1">
                  Admitido *
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                      <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>Cantidad en kilogramos aceptada</TooltipContent>
                  </Tooltip>
                </div>
              </TableHead>
              <TableHead className="w-[120px]">
                <div className="flex items-center gap-1">
                  Rechazado
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                      <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>Cantidad en kilogramos rechazada</TooltipContent>
                  </Tooltip>
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Motivo
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                      <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>Razón del rechazo si aplica</TooltipContent>
                  </Tooltip>
                </div>
              </TableHead>
              <TableHead className="w-[80px] text-center">
                <div className="flex items-center justify-center gap-1">
                  Tarifa
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                      <Info className="w-3 h-3 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>¿Aplica tarifa al material?</TooltipContent>
                  </Tooltip>
                </div>
              </TableHead>
              <TableHead className="w-[60px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center text-muted-foreground">
                  No hay materiales agregados
                </TableCell>
              </TableRow>
            ) : (
              fields.map((field, index) => (
                <TableRow key={field.id}>
                  <TableCell>
                    <FormField
                      control={control}
                      name={`materials.${index}.materialId`}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-8">
                              <SelectValue placeholder="Seleccionar material" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">Cartón</SelectItem>
                            <SelectItem value="2">Plástico</SelectItem>
                            <SelectItem value="3">Vidrio</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      control={control}
                      name={`materials.${index}.price`}
                      render={({ field }) => (
                        <Input 
                          type="number" 
                          className="h-8" 
                          {...field}
                          min={0}
                          step="0.01"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      control={control}
                      name={`materials.${index}.amountDelivered`}
                      render={({ field }) => (
                        <Input 
                          type="number" 
                          className="h-8" 
                          {...field}
                          min={0}
                          step="0.01"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      control={control}
                      name={`materials.${index}.admittedAmount`}
                      render={({ field }) => (
                        <Input 
                          type="number" 
                          className="h-8" 
                          {...field}
                          min={0}
                          step="0.01"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      control={control}
                      name={`materials.${index}.rejectedAmount`}
                      render={({ field }) => (
                        <Input 
                          type="number" 
                          className="h-8" 
                          {...field}
                          min={0}
                          step="0.01"
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      control={control}
                      name={`materials.${index}.rejectReason`}
                      render={({ field }) => (
                        <Input 
                          className="h-8"
                          placeholder="Motivo del rechazo"
                          {...field}
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell className="text-center">
                    <FormField
                      control={control}
                      name={`materials.${index}.appliesFee`}
                      render={({ field }) => (
                        <div className="flex justify-center">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </div>
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    {fields.length > 1 && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => remove(index)}
                            className="h-8 w-8 p-0"
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Eliminar material</TooltipContent>
                      </Tooltip>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}