"use client";

import { MaterialIntakeForm } from "@/components/materials-intake/material-intake-form";

export default function EditMaterialIntakePage() {
  const mockData = {
    generalInfo: {
      providerId: "1",
      routeId: "1",
      vehicleId: "1",
      weekCode: 48,
      fixedFee: 2000,
      rejectionSiteId: "1",
    },
    materials: [
      {
        materialId: "1",
        amountDelivered: 100,
        admittedAmount: 95,
        price: 1500,
        appliesFee: true,
        rejectedAmount: 5,
        rejectReason: "Material contaminado",
      },
    ],
  };

  return (
    <div className="container mx-auto py-4">
      <MaterialIntakeForm initialData={mockData} />
    </div>
  );
}