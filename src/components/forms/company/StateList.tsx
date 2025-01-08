import React from "react";
import { FormLabel } from "@/components/ui/form";
import { State } from "@/types/state-with-cities";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface StatesListProps {
  states: State[];
  selectedStates: string[];
  onStateChange: (stateId: string) => void;
}

export function StatesList({
  states,
  selectedStates,
  onStateChange,
}: StatesListProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <MapPin className="w-4 h-4 text-purple-500" />
        <FormLabel className="text-sm font-medium text-gray-700">
          Departamentos
        </FormLabel>
      </div>

      <Card className="border border-gray-200">
        <CardContent className="p-2">
          <ScrollArea className="h-48 pr-4">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
              {states.map((state) => (
                <div
                  key={state.id}
                  className="flex items-center space-x-2 group hover:bg-purple-50 rounded-lg p-2 transition-colors duration-200"
                >
                  <Checkbox
                    id={state.id}
                    checked={selectedStates.includes(state.id)}
                    onCheckedChange={() => onStateChange(state.id)}
                    className="text-purple-600 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={state.id}
                    className="text-sm text-gray-600 group-hover:text-gray-900 cursor-pointer select-none"
                  >
                    {state.name}
                  </label>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}

export default StatesList;
