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
  session: {
    user: ["session", "user"] as const,
  },
  auth: {
    welcome: ["auth", "welcome"] as const,
  },
  serviceAreas: {
    all: ["serviceAreas"] as const,
  },
};
