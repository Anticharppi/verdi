"use client";

import { Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900">
      <div className="container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">
                Inicia sesión en Verdi
              </h1>
              <p className="text-gray-400">
                Accede a la gestión de servicios públicos
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Correo electrónico
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
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      className="w-full bg-black/20 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500 bg-black/20"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-300"
                    >
                      Recordarme
                    </label>
                  </div>
                  <a
                    href="/forgot-password"
                    className="text-sm text-emerald-400 hover:text-emerald-300"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 text-white rounded-lg py-2 px-4 hover:bg-emerald-600 transition-colors"
              >
                Iniciar sesión
              </button>

              <p className="text-center text-sm text-gray-400">
                ¿No tienes una cuenta?{" "}
                <Link
                  href="/register"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  Regístrate
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
