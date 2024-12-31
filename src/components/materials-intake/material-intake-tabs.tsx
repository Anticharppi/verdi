"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MaterialIntakeGeneralForm } from "./forms/material-intake-general-form";
import { MaterialIntakeDetailsForm } from "./forms/material-intake-details-form";
import { MaterialIntakeSummary } from "./forms/material-intake-summary";
import { useState } from "react";

interface MaterialIntakeTabsProps {
  mode?: "create" | "edit";
  initialData?: any;
}

export function MaterialIntakeTabs({ mode = "create", initialData }: MaterialIntakeTabsProps) {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
      <TabsList>
        <TabsTrigger value="general">Información General</TabsTrigger>
        <TabsTrigger value="details">Detalles de Material</TabsTrigger>
        <TabsTrigger value="summary">Resumen</TabsTrigger>
      </TabsList>

      <TabsContent value="general" className="space-y-4">
        <MaterialIntakeGeneralForm 
          mode={mode} 
          initialData={initialData}
          onComplete={() => setActiveTab("details")}
        />
      </TabsContent>

      <TabsContent value="details" className="space-y-4">
        <MaterialIntakeDetailsForm 
          mode={mode}
          initialData={initialData}
          onComplete={() => setActiveTab("summary")}
          onBack={() => setActiveTab("general")}
        />
      </TabsContent>

      <TabsContent value="summary" className="space-y-4">
        <MaterialIntakeSummary 
          mode={mode}
          initialData={initialData}
          onBack={() => setActiveTab("details")}
        />
      </TabsContent>
    </Tabs>
  );
}