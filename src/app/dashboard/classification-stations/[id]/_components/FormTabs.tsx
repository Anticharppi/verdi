"use client";

import { Building2, Scale, Currency } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BasicInfoForm } from "./BasicInfoForm";
import { MaterialsForm } from "./MaterialsForm";
import { WeighingMachinesForm } from "./WeighingMachinesForm";

interface FormTabsProps {
  control: any;
  register: any;
  watch: any;
  setValue: any;
  selectedState: string;
  onStateChange: (value: string) => void;
}

export function FormTabs({
  control,
  register,
  watch,
  setValue,
  selectedState,
  onStateChange
}: FormTabsProps) {
  return (
    <Tabs defaultValue="basic" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
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
      <div className="mt-4">
        <TabsContent value="basic">
          <BasicInfoForm
            control={control}
            register={register}
            watch={watch}
            setValue={setValue}
            selectedState={selectedState}
            onStateChange={onStateChange}
          />
        </TabsContent>
        <TabsContent value="materials">
          <MaterialsForm
            control={control}
            register={register}
            watch={watch}
            setValue={setValue}
          />
        </TabsContent>
        <TabsContent value="machines">
          <WeighingMachinesForm
            control={control}
            register={register}
            watch={watch}
            setValue={setValue}
          />
        </TabsContent>
      </div>
    </Tabs>
  );
}