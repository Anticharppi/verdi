export interface Company {
  id: string;
  name?: string; // Para mostrar un nombre amigable en la UI
  superServicesId: string;
  businessName: string;
  nit: string;
  email: string;
  phoneNumber: string;
  imageUrl?: string;
  address: string;
  status?: 'ACTIVE' | 'INACTIVE';
}

export interface CompanyContextType {
  selectedCompany: Company | null;
  setSelectedCompany: (company: Company | null) => void;
}