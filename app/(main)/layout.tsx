// app/(main)/layout.tsx
import MenuHeader from "../components/MenuHeader";
import Footer from "../components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MenuHeader />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </>
  );
}