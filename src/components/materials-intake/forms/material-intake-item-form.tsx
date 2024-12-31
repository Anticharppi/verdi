"use client";

import { Button } from "@/components/ui/button";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import { MaterialFields } from "./form-fields/material-fields";
import { PlusCircle } from "lucide-react";

interface MaterialIntakeItemFormProps {
  form: UseFormReturn<any>;
}

export function MaterialIntakeItemForm({ form }: MaterialIntakeItemFormProps) {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "materials",
  });

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium">Materiales</h3>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-8 px-2 text-xs"
          onClick={() => append({ appliesFee: true })}
        >
          <PlusCircle className="w-4 h-4 mr-1" />
          Agregar
        </Button>
      </div>

      <div className="space-y-3">
        {fields.map((field, index) => (
          <MaterialFields
            key={field.id}
            control={form.control}
            index={index}
            onRemove={() => remove(index)}
            isRemovable={fields.length > 1}
          />
        ))}
      </div>
    </div>
  );
}