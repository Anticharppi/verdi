"use client";

import { Plus, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock data para materiales base
const mockBaseMaterials = [
  { code: "CAR", name: "Cartón" },
  { code: "PLA", name: "Plástico" },
  { code: "VID", name: "Vidrio" },
  { code: "MET", name: "Metal" }
];

interface MaterialsFormProps {
  control: any;
  register: any;
  watch: any;
  setValue: any;
}

export function MaterialsForm({
  control,
  register,
  watch,
  setValue
}: MaterialsFormProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Lista de materiales</h3>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                const currentMaterials = watch("materials");
                setValue("materials", [...currentMaterials, { material: "", price: "" }]);
              }}
              className="text-emerald-600 border-emerald-600 hover:bg-emerald-50"
            >
              <Plus className="w-4 h-4 mr-2" />
              Agregar Material
            </Button>
          </div>

          <div className="space-y-4">
            {watch("materials")?.map((_, index: number) => (
              <div 
                key={index}
                className="flex items-center gap-4 pb-4 border-b border-gray-200 last:border-0"
              >
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Material
                  </label>
                  <Select
                    value={watch(`materials.${index}.material`)}
                    onValueChange={(value) => 
                      setValue(`materials.${index}.material`, value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un material" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockBaseMaterials.map((material) => (
                        <SelectItem key={material.code} value={material.code}>
                          {material.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Precio
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <Input
                      type="number"
                      className="pl-7"
                      placeholder="0"
                      {...register(`materials.${index}.price`)}
                    />
                  </div>
                </div>

                <div className="flex items-end">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      const materials = watch("materials");
                      setValue(
                        "materials",
                        materials.filter((_: any, i: number) => i !== index)
                      );
                    }}
                    className="text-gray-400 hover:text-red-500 h-10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}