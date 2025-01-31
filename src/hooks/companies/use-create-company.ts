import { createCompanyAction } from "@/lib/actions";
import { queryKeys } from "@/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export function useCreateCompany() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createCompanyAction,
    onSettled: (data, error) => {
      if (error) {
        return toast.error(
          error.message || "Ocurrió un error al crear la empresa"
        );
      }
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: queryKeys.companies.all });
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    },
  });
}
