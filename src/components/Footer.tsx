import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-emerald-950 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Verdi</h3>
            <p className="text-gray-400">
              Software de gestión para servicios públicos domiciliarios
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Soluciones</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-emerald-400 cursor-pointer">Gestión Documental</li>
              <li className="hover:text-emerald-400 cursor-pointer">Control Interno</li>
              <li className="hover:text-emerald-400 cursor-pointer">Reportes SUI</li>
              <li className="hover:text-emerald-400 cursor-pointer">Auditoría</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Recursos</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-emerald-400 cursor-pointer">Documentación</li>
              <li className="hover:text-emerald-400 cursor-pointer">Guías</li>
              <li className="hover:text-emerald-400 cursor-pointer">Blog</li>
              <li className="hover:text-emerald-400 cursor-pointer">Soporte</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-emerald-400 cursor-pointer">Términos de Servicio</li>
              <li className="hover:text-emerald-400 cursor-pointer">Privacidad</li>
              <li className="hover:text-emerald-400 cursor-pointer">Licencias</li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Verdi. Todos los derechos reservados
            </p>
            <div className="flex gap-6">
              <TwitterIcon className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer" />
              <LinkedinIcon className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer" />
              <GithubIcon className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}