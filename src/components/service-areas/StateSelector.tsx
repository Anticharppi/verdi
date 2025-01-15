"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSelectedCompanyStore } from "@/store/companies";
import { Skeleton } from "@/components/ui/skeleton";

export interface StateSelectorProps {
  selectedState: string;
  onStateSelect: (stateId: string) => void;
}

export const StateSelectorSkeleton = () => {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-10 w-full" />
    </div>
  );
};

export const StateSelector = ({
  selectedState,
  onStateSelect,
}: StateSelectorProps) => {
  const { states, isLoading } = useSelectedCompanyStore();
  const selectedStateData = states.find((state) => state.id === selectedState);

  if (isLoading) return <StateSelectorSkeleton />;

  return (
    <div>
      <label className="text-sm font-medium text-gray-900 mb-1.5 block">
        Departamento
      </label>
      <Select
        value={selectedState}
        onValueChange={onStateSelect}
        defaultValue={selectedState}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecciona un departamento">
            {selectedStateData?.name}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {states.map((state) => (
            <SelectItem key={state.id} value={state.id}>
              {state.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
