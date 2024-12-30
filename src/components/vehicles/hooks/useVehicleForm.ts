"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { VehicleFormData } from '../types';
import { toast } from 'sonner';

interface ValidationErrors {
  [key: string]: string;
}

export function useVehicleForm(initialData: VehicleFormData) {
  const router = useRouter();
  const [formData, setFormData] = useState<VehicleFormData>(initialData);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [loading, setLoading] = useState(false);
  const isEditing = !!initialData.id;

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.type) {
      newErrors.type = 'El tipo de vehículo es requerido';
    }

    if (!formData.licensePlate) {
      newErrors.licensePlate = 'La placa es requerida';
    }

    if (formData.volumeCapacity <= 0) {
      newErrors.volumeCapacity = 'La capacidad de volumen debe ser mayor a 0';
    }

    if (formData.weightCapacity <= 0) {
      newErrors.weightCapacity = 'La capacidad de peso debe ser mayor a 0';
    }

    if (formData.axesAmount < 0) {
      newErrors.axesAmount = 'El número de ejes no puede ser negativo';
    }

    if (!formData.entryOperationDate) {
      newErrors.entryOperationDate = 'La fecha de entrada en operación es requerida';
    }

    if (!formData.providerId) {
      newErrors.providerId = 'Debe seleccionar un proveedor';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Por favor complete todos los campos requeridos");
      return;
    }

    setLoading(true);

    try {
      // Simular una petición al backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (isEditing) {
        toast.success("Vehículo actualizado exitosamente");
      } else {
        toast.success("Vehículo creado exitosamente");
      }

      router.push("/dashboard/vehicles");
      router.refresh();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Ocurrió un error al guardar los cambios");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof VehicleFormData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Limpiar error del campo cuando se modifica
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleDelete = async () => {
    if (!isEditing) return;

    try {
      setLoading(true);
      // Simular eliminación
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Vehículo eliminado exitosamente");
      router.push("/dashboard/vehicles");
      router.refresh();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al eliminar el vehículo");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    errors,
    loading,
    isEditing,
    handleChange,
    onSubmit,
    handleDelete
  };
}