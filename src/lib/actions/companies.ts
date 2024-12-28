import { fakeCompanies } from "@/lib/data/fakeData.ts";
import { CompanyFormValues } from "@/lib/types";

export async function getCompanyById(id: string) {
  // Simular delay de red
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return fakeCompanies.find(company => company.id === id);
}

export async function updateCompany(id: string, data: CompanyFormValues) {
  // Simular delay de red
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Simular actualización exitosa
  return {
    ...data,
    id
  };
}