import { City, Company, State } from "@prisma/client";
import { create } from "zustand";

interface SelectedCompanyStoreState {
  isLoading: boolean;
  selectedCompany: Company | null;
  cities: City[];
  states: State[];
  setSelectedCompany: (company: Company) => void;
  setCities: (cities: City[]) => void;
  setIsLoading: (loading: boolean) => void;
  setStates: (states: State[]) => void;
}

export const useSelectedCompanyStore = create<SelectedCompanyStoreState>()(
  (set) => ({
    isLoading: true,
    selectedCompany: null,
    cities: [],
    states: [],
    setStates: (states) => set({ states }),
    setSelectedCompany: (selectedCompany: Company) => set({ selectedCompany }),
    setCities: (cities) => set({ cities }),
    setIsLoading: (isLoading) => set({ isLoading }),
  })
);
