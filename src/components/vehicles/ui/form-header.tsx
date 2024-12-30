"use client";

import { ChevronLeft } from "lucide-react";

interface FormHeaderProps {
  onBack: () => void;
}

export function FormHeader({ onBack }: FormHeaderProps) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="mb-6 px-4 py-2 text-gray-600 hover:text-gray-800 flex items-center gap-2 transition-colors"
    >
      <ChevronLeft className="w-4 h-4" />
      Volver a Vehículos
    </button>
  );
}