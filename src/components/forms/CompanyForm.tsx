"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CompanyFormValues } from "@/lib/types";
import { ArrowLeft } from "lucide-react";

interface CompanyFormProps {
  initialData: CompanyFormValues;
  isNew: boolean;
}

export default function CompanyForm({ initialData, isNew }: CompanyFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState<CompanyFormValues>(initialData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simular una actualización exitosa
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log("Datos guardados:", formValues);
      router.push("/dashboard/companies");
      router.refresh();
    } catch (error) {
      console.error("Error al guardar:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2 col-span-2">
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Nombre de la empresa
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            value={formValues.name}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <div className="space-y-2 col-span-2">
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="description"
          >
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            value={formValues.description}
            onChange={handleChange}
            disabled={loading}
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            value={formValues.email}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="phone"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            value={formValues.phone}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="website"
          >
            Sitio Web
          </label>
          <input
            type="url"
            id="website"
            name="website"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            value={formValues.website}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="address"
          >
            Dirección
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            value={formValues.address}
            onChange={handleChange}
            disabled={loading}
          />
        </div>
      </div>

      <div className="flex items-center gap-x-2">
        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50"
        >
          {loading ? "Guardando..." : isNew ? "Crear Empresa" : "Guardar Cambios"}
        </button>
        <button
          type="button"
          disabled={loading}
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </button>
      </div>
    </form>
  );
}