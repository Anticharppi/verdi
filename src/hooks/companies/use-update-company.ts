import { updateCompanyAction } from "@/lib/actions";
import { queryKeys } from "@/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export function useUpdateCompany() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCompanyAction,
    onSettled: (data, error) => {
      if (error) {
        return toast.error(
          error.message || "Ocurrió un error al actualizar la empresa"
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
