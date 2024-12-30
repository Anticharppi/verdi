"use client";

import { LucideIcon } from "lucide-react";

interface FormSectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
  iconBgColor?: string;
  children: React.ReactNode;
}

export function FormSection({
  icon: Icon,
  title,
  description,
  iconColor = "text-emerald-600",
  iconBgColor = "bg-emerald-100",
  children
}: FormSectionProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-4 mb-6">
        <div className={`h-12 w-12 rounded-full ${iconBgColor} flex items-center justify-center`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
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