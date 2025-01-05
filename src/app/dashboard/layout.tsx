import { QueryContextWrapper } from "@/components/QueryContextWrapper";
import { Sidebar } from "@/components/Sidebar";
import { CompanyProvider } from "@/contexts/CompanyContext";
import { Toaster } from "react-hot-toast";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <QueryContextWrapper>
      <CompanyProvider>
        <Sidebar>{children}</Sidebar>
        <Toaster position="top-right" />
      </CompanyProvider>
    </QueryContextWrapper>
  );
}
