import { AppNav } from "@/components/app/app-nav"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="group/app min-h-screen">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <AppNav />
        {children}
      </div>
    </div>
  )
}
