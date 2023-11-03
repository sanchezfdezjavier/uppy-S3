import UppyDashboard from "@/components/UppyDashboard"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-stone-50 space-y-8">
      <h1 className="text-6xl tracking-tighter font-bold text-transparent bg-clip-text bg-gradient-to-t from-pink-600 to-orange-500 p-2">Uppy + S3 Demo</h1>
      <UppyDashboard/>
    </main>
  )
}
