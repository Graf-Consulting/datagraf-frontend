import MainLayoutWrapper from "../../components/layout/MainLayoutWrapper";
import { AuthProvider } from "@/components/layout/AuthProvider";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <MainLayoutWrapper>{children}</MainLayoutWrapper>
    </AuthProvider>
  );
}
