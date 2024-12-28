import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="fixed w-full backdrop-blur-sm bg-black/10 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Verdi</h1>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            {["Soluciones", "Resoluciones", "Recursos"].map((item) => (
              <button
                key={item}
                className="hover:text-emerald-300 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 hover:text-emerald-300 transition-colors">
              Iniciar Sesión
            </button>
            <Link
              href={"/register"}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-medium transition-all"
            >
              Registro
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
