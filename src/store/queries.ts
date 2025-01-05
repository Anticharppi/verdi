export const queryKeys = {
  companies: {
    all: ["companies"] as const,
  },
  states: {
    all: ["states"] as const,
  },
  cities: {
    all: ["cities"] as const,
    citiesByStateId: (stateId: string) => ["cities", { stateId }] as const,
  },
};
