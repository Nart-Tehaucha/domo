'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()
  return (
    <div className="space-y-4">
        <Link href="/login">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
              Register
          </button>
        </Link>
        <Link href="/tutorial">
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
              Tutorial
          </button>
        </Link>
        <Link href="/">
          <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700">
              Glossary
          </button>
        </Link>
    </div>
  );
}
