import Card from '@/components/Card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  )
}
