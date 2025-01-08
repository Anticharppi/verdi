import { State } from "@prisma/client";

interface StateCheckboxListProps {
  states: State[];
  selectedStates: string[];
  onStateChange: (stateId: string) => void;
}

export function StateCheckboxList({
  states,
  selectedStates,
  onStateChange,
}: StateCheckboxListProps) {
  return (
    <div className="grid grid-cols-3 gap-2 mt-1 max-h-32 overflow-y-auto border rounded-lg p-2">
      {states?.map((state) => (
        <div key={state.id} className="flex items-center space-x-2">
          <input
            type="checkbox"
            id={state.id}
            checked={selectedStates.includes(state.id)}
            onChange={() => onStateChange(state.id)}
            className="h-3 w-3 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
          />
          <label htmlFor={state.id} className="text-xs text-gray-600">
            {state.name}
          </label>
        </div>
      ))}
    </div>
  );
}
