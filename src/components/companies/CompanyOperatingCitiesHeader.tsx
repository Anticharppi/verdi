import { MapPinned } from "lucide-react";
import { CardTitle, CardDescription } from "../ui/card";

export function CompanyOperatingCitiesHeader() {
  return (
    <div className="flex flex-row items-center gap-4 pb-4">
      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
        <MapPinned className="h-5 w-5 text-purple-600" />
      </div>
      <div>
        <CardTitle className="text-lg">Ciudades de Operación</CardTitle>
        <CardDescription className="text-sm">
          Selecciona los departamentos y ciudades donde opera la empresa
        </CardDescription>
      </div>
    </div>
  );
}
