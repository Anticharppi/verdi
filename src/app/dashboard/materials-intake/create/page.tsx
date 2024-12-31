"use client";

import { MaterialIntakeForm } from "@/components/materials-intake/material-intake-form";
import { MaterialIntakeItemForm } from "@/components/materials-intake/material-intake-item-form";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateMaterialIntakePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Nuevo Recibo de Materiales</h2>
        <p className="text-sm text-gray-600">
          Crea un nuevo recibo de materiales
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">Información General</TabsTrigger>
          <TabsTrigger value="materials">Materiales</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <MaterialIntakeForm />
        </TabsContent>

        <TabsContent value="materials" className="space-y-4">
          <MaterialIntakeItemForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}