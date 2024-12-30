"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MacroRoute {
  id: string;
  code: string;
  name: string;
  routes: {
    id: string;
    name: string;
    code: string;
  }[];
  nuecas: {
    id: string;
    code: string;
  }[];
}

interface MacroRouteDetailsProps {
  macroRoute: MacroRoute;
  onClose: () => void;
}

export function MacroRouteDetails({ macroRoute, onClose }: MacroRouteDetailsProps) {
  return (
    <Card className="p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Detalles de Macro Ruta</h3>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-sm font-medium text-gray-500">Código</label>
          <p className="mt-1">{macroRoute.code}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500">Nombre</label>
          <p className="mt-1">{macroRoute.name}</p>
        </div>
      </div>

      <Tabs defaultValue="routes" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="routes">Rutas</TabsTrigger>
          <TabsTrigger value="nuecas">NUECAs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="routes">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {macroRoute.routes.map((route) => (
                <TableRow key={route.id}>
                  <TableCell>{route.code}</TableCell>
                  <TableCell>{route.name}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      Ver detalles
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="nuecas">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Código</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {macroRoute.nuecas.map((nueca) => (
                <TableRow key={nueca.id}>
                  <TableCell>{nueca.code}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      Ver detalles
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
