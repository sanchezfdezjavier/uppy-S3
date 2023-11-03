import UppyDashboard from '@/components/UppyDashboard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-8 bg-stone-50">
      <h1 className="bg-gradient-to-t from-pink-600 to-orange-500 bg-clip-text p-2 text-6xl font-bold tracking-tighter text-transparent">
        Uppy + S3 Demo
      </h1>
      <UppyDashboard />
    </main>
  )
}
