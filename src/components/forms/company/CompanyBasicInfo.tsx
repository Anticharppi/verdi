"use client";

import { Building2 } from "lucide-react";

interface CompanyBasicInfoProps {
  name: string;
  description: string;
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function CompanyBasicInfo({ 
  name, 
  description, 
  loading, 
  onChange 
}: CompanyBasicInfoProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
          <Building2 className="h-6 w-6 text-emerald-600" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Información Principal</h2>
          <p className="text-sm text-gray-500">Datos básicos de la empresa</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre de la empresa
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
              disabled={loading}
              placeholder="Ej: Tech Solutions Inc."
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descripción
            </label>
            <textarea
              name="description"
              value={description}
              onChange={onChange}
              rows={4}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
              disabled={loading}
              placeholder="Describe brevemente la empresa y su actividad principal..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}