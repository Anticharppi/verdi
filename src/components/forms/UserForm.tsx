"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, UserCircle2, Mail, Building2, ShieldCheck, Trash2, Plus } from "lucide-react";

interface UserFormValues {
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  companies: {
    companyId: string;
    role: 'admin' | 'manager' | 'operator';
  }[];
}

interface UserFormProps {
  initialData: UserFormValues;
  isNew: boolean;
}

export default function UserForm({ initialData, isNew }: UserFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState<UserFormValues>(initialData);
  
  // Mock companies data
  const companies = [
    { id: "c1", name: "Acueducto Municipal de Bogotá" },
    { id: "c2", name: "Energía Regional del Valle" },
    { id: "c3", name: "Gas Natural del Caribe" }
  ];

  const roles = [
    { value: 'admin', label: 'Administrador' },
    { value: 'manager', label: 'Gerente' },
    { value: 'operator', label: 'Operador' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simular una actualización exitosa
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log("Datos guardados:", formValues);
      router.push("/dashboard/users");
      router.refresh();
    } catch (error) {
      console.error("Error al guardar:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleCompanyChange = (index: number, field: string, value: string) => {
    const newCompanies = [...formValues.companies];
    newCompanies[index] = {
      ...newCompanies[index],
      [field]: value,
    };
    setFormValues((prev) => ({
      ...prev,
      companies: newCompanies,
    }));
  };

  const addCompany = () => {
    setFormValues((prev) => ({
      ...prev,
      companies: [...prev.companies, { companyId: "", role: 'operator' }],
    }));
  };

  const removeCompany = (index: number) => {
    setFormValues((prev) => ({
      ...prev,
      companies: prev.companies.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Información Personal */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
              <UserCircle2 className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Información Personal</h2>
              <p className="text-sm text-gray-500">Datos básicos del usuario</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre
              </label>
              <input
                type="text"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
                disabled={loading}
                placeholder="Ingrese el nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Apellido
              </label>
              <input
                type="text"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
                disabled={loading}
                placeholder="Ingrese el apellido"
              />
            </div>
          </div>
        </div>

        {/* Información de Cuenta */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Información de Cuenta</h2>
              <p className="text-sm text-gray-500">Datos de acceso al sistema</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
                disabled={loading}
                placeholder="usuario@empresa.com"
              />
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="isAdmin"
                name="isAdmin"
                checked={formValues.isAdmin}
                onChange={handleChange}
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
              />
              <label htmlFor="isAdmin" className="text-sm font-medium text-gray-700">
                Administrador del Sistema
              </label>
            </div>
          </div>
        </div>

        {/* Permisos de Empresa */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Permisos de Empresa</h2>
                <p className="text-sm text-gray-500">Asignar empresas y roles</p>
              </div>
            </div>
            <button
              type="button"
              onClick={addCompany}
              className="flex items-center gap-2 px-3 py-2 text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Agregar Empresa
            </button>
          </div>

          <div className="space-y-4">
            {formValues.companies.map((company, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-gray-200 bg-gray-50 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Empresa {index + 1}</h3>
                  <button
                    type="button"
                    onClick={() => removeCompany(index)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <select
                      value={company.companyId}
                      onChange={(e) => handleCompanyChange(index, "companyId", e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
                      disabled={loading}
                    >
                      <option value="">Seleccione una empresa</option>
                      {companies.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rol
                    </label>
                    <select
                      value={company.role}
                      onChange={(e) => handleCompanyChange(index, "role", e.target.value as any)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 text-sm transition duration-200 ease-in-out hover:border-gray-400"
                      disabled={loading}
                    >
                      {roles.map((role) => (
                        <option key={role.value} value={role.value}>
                          {role.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex items-center justify-end gap-4 bg-gray-50 px-6 py-4 rounded-lg border border-gray-100">
          <button
            type="button"
            onClick={() => router.push("/dashboard/users")}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 transition-all duration-200"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Guardando...
              </span>
            ) : (
              isNew ? "Crear Usuario" : "Guardar Cambios"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}