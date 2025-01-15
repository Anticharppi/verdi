"use client";

import { ServiceAreaForm } from "@/components/service-areas/ServiceAreaForm";
import { ServiceAreaFormSkeleton } from "@/components/service-areas/ServiceAreaFormSkeleton";
import { useServiceArea } from "@/hooks/service-areas/use-service-area";
import { use } from "react";

type Params = {
  id: string;
};

type Props = {
  params: Promise<Params>;
};

export default function Page({ params }: Props) {
  const { id } = use(params);
  const { data, isLoading } = useServiceArea(id);

  if (isLoading) return <ServiceAreaFormSkeleton />;

  return <ServiceAreaForm initialData={data} />;
}
