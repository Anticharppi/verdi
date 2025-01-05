"use client";

import React from "react";
import { ErrorState } from "@/components/welcome/ErrorState";
import { Hero } from "@/components/welcome/Hero";
import { ConfiguredHero } from "@/components/welcome/ConfiguredHero";
import { useCreateAdmin } from "@/hooks/users";
import { LoadingState } from "@/components/welcome/LoadingState";

export default function Page() {
  const { data, isLoading } = useCreateAdmin();

  if (isLoading || !data) return <LoadingState />;

  if (data.code === "USER_NOT_FOUND") return <ErrorState />;

  if (data.code === "USER_ALREADY_EXISTS") return <ConfiguredHero />;

  return <Hero />;
}
