"use client";

import { ReactNode } from "react";

interface FormSectionProps {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
  iconClassName?: string;
}

export function FormSection({
  icon,
  title,
  description,
  children,
  iconClassName = "bg-gray-100",
}: FormSectionProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-4 mb-6">
        <div className={`h-12 w-12 rounded-full ${iconClassName} flex items-center justify-center`}>
          {icon}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}