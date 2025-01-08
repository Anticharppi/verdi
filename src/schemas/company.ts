import { z } from "zod";

export const companyFormSchema = z.object({
  superServicesId: z.string().min(1, "El ID de superservicios es requerido"),
  businessName: z.string().min(1, "El nombre de la empresa es requerido"),
  nit: z.string().min(1, "El NIT es requerido"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(1, "El teléfono es requerido"),
  address: z.string().min(1, "La dirección es requerida"),
  cities: z.array(z.string()).min(1, "Debe seleccionar al menos una ciudad"),
  id: z.string().optional(),
});

export type CompanyFormValues = {
  id?: string;
  superServicesId: string;
  businessName: string;
  nit: string;
  email: string;
  phone: string;
  address: string;
  cities: string[];
};

export const defaultData = {
  superServicesId: "",
  businessName: "",
  nit: "",
  email: "",
  phone: "",
  address: "",
  cities: [],
};
