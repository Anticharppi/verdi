import { Skeleton } from "../ui/skeleton";

export const LocationSelectorSkeleton = () => {
  return (
    <div className="space-y-4">
      <div>
        <div className="text-sm font-medium text-gray-900 mb-1.5">
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-10 w-full" />
      </div>
      <div>
        <div className="text-sm font-medium text-gray-900 mb-1.5">
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
};
