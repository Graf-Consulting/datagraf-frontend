import LoadingScreen from "../../components/ui/LoadingScreen";

export default function Loading() {
  return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center">
        <LoadingScreen message="Carregando..." />
    </div>
  )
}