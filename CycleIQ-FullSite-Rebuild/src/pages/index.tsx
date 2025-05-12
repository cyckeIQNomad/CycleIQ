import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-10 text-white bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-4">CycleIQ</h1>
      <p className="mb-4">Your crypto financial intelligence hub.</p>
      <ul className="list-disc list-inside">
        <li><Link href="/news">Daily Crypto News</Link></li>
        <li><Link href="/macro">Macro Economy News</Link></li>
        <li><Link href="/reviews">Crypto Project Reviews</Link></li>
        <li><Link href="/courses">Trading Courses (Coming Soon)</Link></li>
      </ul>
    </div>
  )
}
