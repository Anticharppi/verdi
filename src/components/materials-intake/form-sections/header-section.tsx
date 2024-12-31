"use client";

import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function HeaderSection() {
  return (
    <div className="flex flex-col space-y-1.5">
      <div className="flex items-center space-x-2">
        <h2 className="text-xl font-semibold">Nuevo Recibo de Materiales</h2>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Info className="w-4 h-4 text-muted-foreground cursor-help" />
          </TooltipTrigger>
          <TooltipContent className="max-w-sm">
            <p>Ingresa los datos del proveedor y los materiales recibidos para generar el recibo</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <p className="text-sm text-muted-foreground">
        Todos los campos marcados con * son obligatorios
      </p>
    </div>
  );
}