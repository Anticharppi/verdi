"use client";

import { Building2, Mail } from "lucide-react";
import Link from "next/link";

export default function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900">
      <div className="container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">
                Crea tu cuenta en Verdi
              </h1>
              <p className="text-gray-400">
                Comienza a gestionar tus servicios públicos
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre de la empresa
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      className="w-full bg-black/20 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Empresa de Servicios S.A."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Correo electrónico corporativo
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      className="w-full bg-black/20 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="correo@empresa.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="w-full bg-black/20 border border-white/10 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 text-white rounded-lg py-2 px-4 hover:bg-emerald-600 transition-colors"
              >
                Crear cuenta
              </button>

              <p className="text-center text-sm text-gray-400">
                ¿Ya tienes una cuenta?{" "}
                <Link
                  href="/login"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  Inicia sesión
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
