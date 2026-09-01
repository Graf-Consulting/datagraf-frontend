import MainLayoutWrapper from "../components/MainLayoutWrapper";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayoutWrapper>{children}</MainLayoutWrapper>
}