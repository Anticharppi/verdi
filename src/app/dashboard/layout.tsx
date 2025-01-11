import { Sidebar } from "@/components/Sidebar";
import { SessionProvider } from "@/contexts/SessionContext";
import { getUserInSession } from "@/lib/actions/users";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";

type Props = {
  children: React.ReactNode;
};

export default async function DashboardLayout({ children }: Props) {
  const user = await getUserInSession();
  if (!user) return redirect("/welcome");
  return (
    <SessionProvider>
      <Sidebar>{children}</Sidebar>
      <Toaster position="top-right" />
    </SessionProvider>
  );
}
