import { TrendingUp } from "lucide-react";

interface StatsCardProps {
  name: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

export function StatsCard({ name, value, change, icon }: StatsCardProps) {
  return (
    <div className="bg-white overflow-hidden rounded-lg shadow">
      <div className="p-5">
        <div className="flex items-center justify-between">
          {icon}
          <div className="flex items-center text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">
            <TrendingUp className="w-4 h-4 mr-1" />
            {change}
          </div>
        </div>
        <div className="mt-4">
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          <p className="text-sm text-gray-500">{name}</p>
        </div>
      </div>
    </div>
  );
}
