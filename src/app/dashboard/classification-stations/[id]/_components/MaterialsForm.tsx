"use client";

import { Currency, Plus, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Control } from "react-hook-form";

// Mock data para materiales base
const mockBaseMaterials = [
  { code: "CAR", name: "Cartón" },
  { code: "PLA", name: "Plástico" },
  { code: "VID", name: "Vidrio" },
  { code: "MET", name: "Metal" }
];

interface MaterialsFormProps {
  control: Control<any>;
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
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
            <Currency className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Materiales</h2>
            <p className="text-sm text-gray-500">Define los materiales y sus precios</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            const currentMaterials = watch("materials");
            setValue("materials", [...currentMaterials, { material: "", price: "" }]);
          }}
          className="flex items-center gap-2 px-3 py-2 text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Agregar Material
        </button>
      </div>

      <div className="space-y-4">
        {watch("materials")?.map((_, index: number) => (
          <div key={index} className="p-4 rounded-lg border border-gray-200 bg-gray-50">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-sm font-medium text-gray-900">Material {index + 1}</h3>
              <button
                type="button"
                onClick={() => {
                  const materials = watch("materials");
                  setValue(
                    "materials",
                    materials.filter((_: any, i: number) => i !== index)
                  );
                }}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
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

              <div>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}