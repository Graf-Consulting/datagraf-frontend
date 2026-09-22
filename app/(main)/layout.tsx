import MainLayoutWrapper from "../../components/layout/MainLayoutWrapper";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayoutWrapper>{children}</MainLayoutWrapper>
}