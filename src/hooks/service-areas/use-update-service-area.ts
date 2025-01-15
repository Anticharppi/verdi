import {
  createServiceAreaAction,
  updateServiceAreaAction,
} from "@/lib/actions/service-areas";
import { queryKeys } from "@/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export function useUpdateServiceArea() {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: updateServiceAreaAction,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: ({ message, success }) => {
      if (success) {
        toast.success(message);
        queryClient.invalidateQueries({
          queryKey: queryKeys.serviceAreas.all,
        });
        router.push("/dashboard/service-areas");
      } else {
        toast.error(message);
      }
    },
  });
}
