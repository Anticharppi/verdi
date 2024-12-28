"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Scale, Currency } from "lucide-react";
import { TabPanelProps } from "./types";
import { BasicInfoPanel } from "./forms/BasicInfoPanel";
import { MaterialsPanel } from "./forms/MaterialsPanel";
import { WeighingMachinesPanel } from "./forms/WeighingMachinesPanel";

export function FormTabs({ control, register, watch, setValue, errors }: TabPanelProps) {
  return (
    <Tabs defaultValue="basic" className="w-full space-y-6">
      <TabsList className="grid grid-cols-3 w-full">
        <TabsTrigger value="basic" className="flex items-center gap-2">
          <Building2 className="h-4 w-4" />
          Información Básica
        </TabsTrigger>
        <TabsTrigger value="materials" className="flex items-center gap-2">
          <Currency className="h-4 w-4" />
          Materiales
        </TabsTrigger>
        <TabsTrigger value="machines" className="flex items-center gap-2">
          <Scale className="h-4 w-4" />
          Básculas
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="basic">
        <BasicInfoPanel 
          control={control}
          register={register}
          watch={watch}
          setValue={setValue}
          errors={errors}
        />
      </TabsContent>

      <TabsContent value="materials">
        <MaterialsPanel
          control={control}
          register={register}
          watch={watch}
          setValue={setValue}
          errors={errors}
        />
      </TabsContent>

      <TabsContent value="machines">
        <WeighingMachinesPanel
          control={control}
          register={register}
          watch={watch}
          setValue={setValue}
          errors={errors}
        />
      </TabsContent>
    </Tabs>
  );
}